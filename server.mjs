import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join } from 'node:path';
import crypto from 'node:crypto';

const root = process.cwd();
const publicDir = join(root, 'public');
const dataDir = join(root, 'data');
const reqPath = join(dataDir, 'requests.json');
const mailPath = join(dataDir, 'mail.log');

const mime = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8'
};

async function ensureStorage() {
  await mkdir(dataDir, { recursive: true });
  if (!existsSync(reqPath)) await writeFile(reqPath, '[]');
  if (!existsSync(mailPath)) await writeFile(mailPath, '');
}

function send(res, code, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(code, { 'Content-Type': type });
  res.end(body);
}

async function handleApi(req, res) {
  if (req.method !== 'POST') return send(res, 405, 'Method Not Allowed');
  let raw = '';
  req.on('data', (chunk) => raw += chunk);
  req.on('end', async () => {
    try {
      const body = JSON.parse(raw || '{}');
      const requests = JSON.parse(await readFile(reqPath, 'utf-8'));
      const record = {
        id: crypto.randomUUID(),
        receivedAt: new Date().toISOString(),
        status: 'new',
        ...body
      };
      requests.push(record);
      await writeFile(reqPath, JSON.stringify(requests, null, 2));
      const mail = `\n---\nTO: ${body.email}\nSUBJECT: ご依頼受付完了（概算）\n${new Date().toISOString()}\n依頼を受け付けました。概算合計: ${body.estimate?.total ?? 0}円\n`;      
      await writeFile(mailPath, mail, { flag: 'a' });
      send(res, 200, JSON.stringify({ ok: true }), 'application/json; charset=utf-8');
    } catch {
      send(res, 400, JSON.stringify({ ok: false }), 'application/json; charset=utf-8');
    }
  });
}

createServer(async (req, res) => {
  await ensureStorage();
  const url = new URL(req.url || '/', 'http://localhost');
  if (url.pathname === '/api/request') return handleApi(req, res);
  let pathname = url.pathname === '/' ? '/index.html' : url.pathname;
  const file = join(publicDir, pathname);
  try {
    const content = await readFile(file);
    send(res, 200, content, mime[extname(file)] || 'application/octet-stream');
  } catch {
    send(res, 404, 'Not Found');
  }
}).listen(3000, () => {
  console.log('Server running: http://localhost:3000');
});
