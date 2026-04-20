const works = [
  { id:1, title:'Night Presence', scene:'Night', image:'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80' },
  { id:2, title:'Urban Gloss', scene:'Urban', image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80' },
  { id:3, title:'Coastal Light', scene:'Coastal', image:'https://images.unsplash.com/photo-1549317336-206569e8475c?auto=format&fit=crop&w=1200&q=80' },
  { id:4, title:'Mountain Cut', scene:'Mountain', image:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80' },
  { id:5, title:'Steel Detail', scene:'Detail', image:'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80' },
  { id:6, title:'Motion Blur', scene:'Motion', image:'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80' },
  { id:7, title:'Midnight Urban', scene:'Night', image:'https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?auto=format&fit=crop&w=1200&q=80' },
  { id:8, title:'Editorial Avenue', scene:'Urban', image:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80' },
  { id:9, title:'Seaside Drift', scene:'Coastal', image:'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80' },
  { id:10, title:'Ridge Frame', scene:'Mountain', image:'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80' },
  { id:11, title:'Badge & Carbon', scene:'Detail', image:'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80' },
  { id:12, title:'Rolling Cut', scene:'Motion', image:'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80' },
  { id:13, title:'Noir Bodyline', scene:'Night', image:'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80' },
  { id:14, title:'Concrete Silence', scene:'Urban', image:'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1200&q=80' },
  { id:15, title:'Salt Air', scene:'Coastal', image:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80' },
  { id:16, title:'Alpine Tone', scene:'Mountain', image:'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80' },
  { id:17, title:'Leather & Stitch', scene:'Detail', image:'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=1200&q=80' },
  { id:18, title:'Launch Pass', scene:'Motion', image:'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80' },
  { id:19, title:'Tunnel Reflection', scene:'Night', image:'https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=1200&q=80' },
  { id:20, title:'Street Editorial', scene:'Urban', image:'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80' },
];
const yen = (value) => `${value.toLocaleString('ja-JP')}円`;
const estimateConfig = {
  base: { key: 'one_car', label: '1台撮影プラン', price: 35000 },
  options: [
    { key: 'extra_cuts', label: '追加カット', price: 5000 },
    { key: 'night', label: '夜景撮影', price: 8000 },
    { key: 'extra_location', label: 'ロケ地追加', price: 10000 },
    { key: 'video', label: '動画撮影追加', price: 20000 },
    { key: 'retouch', label: 'レタッチ追加', price: 8000 },
    { key: 'rush', label: '納期短縮', price: 10000 },
    { key: 'weekend', label: '土日祝対応', price: 8000 }
  ]
};

function mountGallery(targetId, limit = 20, scene = 'All') {
  const root = document.getElementById(targetId); if (!root) return;
  root.innerHTML = '';
  works.filter(w => scene === 'All' || w.scene === scene).slice(0, limit).forEach((w) => {
    const el = document.createElement('article'); el.className = 'work reveal';
    el.innerHTML = `<img loading="lazy" src="${w.image}" alt="${w.title} - ${w.scene} style car photograph"><span>${w.scene}</span>`;
    root.appendChild(el);
  });
  setupReveals();
}

function setupReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function setupHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;
  let current = 0; slides[current].classList.add('active');
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000);
}

function setupFloatingCta() {
  const floating = document.querySelector('.floating-cta');
  if (!floating) return;
  window.addEventListener('scroll', () => {
    floating.classList.toggle('visible', window.scrollY > window.innerHeight * 0.85);
  });
}

function setupFilters() {
  const container = document.querySelector('[data-filter-container]'); if (!container) return;
  container.addEventListener('click', (e) => {
    const button = e.target.closest('[data-filter]'); if (!button) return;
    container.querySelectorAll('[data-filter]').forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    mountGallery('portfolio-grid', 20, button.dataset.filter);
  });
}

function setupEstimate() {
  const form = document.getElementById('estimate-form'); if (!form) return;
  const optWrap = document.getElementById('option-list');
  const summary = document.getElementById('estimate-summary');
  estimateConfig.options.forEach(opt => {
    const row = document.createElement('label');
    row.innerHTML = `<input type="checkbox" name="options" value="${opt.key}"> ${opt.label}（+${yen(opt.price)}）`;
    optWrap.appendChild(row);
  });

  const compute = () => {
    const selected = [...form.querySelectorAll('input[name="options"]:checked')].map(i => i.value);
    const travel = Number(form.querySelector('select[name="travel_distance"]').value || 0);
    const items = [{ label: estimateConfig.base.label, amount: estimateConfig.base.price }];
    selected.forEach(key => {
      const opt = estimateConfig.options.find(o => o.key === key);
      if (opt) items.push({ label: opt.label, amount: opt.price });
    });
    if (travel === 1) items.push({ label: '出張 20km超', amount: 5000 });
    if (travel === 2) items.push({ label: '出張 50km超', amount: 10000 });
    const subtotal = items.reduce((acc, i) => acc + i.amount, 0);
    const tax = Math.round(subtotal * 0.1);
    const total = subtotal + tax;
    summary.innerHTML = items.map(i => `<div class="line"><span>${i.label}</span><strong>${yen(i.amount)}</strong></div>`).join('') +
      `<div class="line"><span>小計</span><strong>${yen(subtotal)}</strong></div><div class="line"><span>消費税(10%)</span><strong>${yen(tax)}</strong></div><div class="line total"><span>税込概算合計</span><strong>${yen(total)}</strong></div>`;
    return { items, subtotal, tax, total };
  };
  form.addEventListener('change', compute);
  compute();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const consent = form.querySelector('input[name="consent"]');
    if (!consent.checked) return alert('注意事項への同意が必要です。');
    const estimate = compute();
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.options = [...form.querySelectorAll('input[name="options"]:checked')].map(i => i.value);
    payload.estimate = estimate;
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true; submitBtn.textContent = '送信中...';
    try {
      const res = await fetch('/api/request', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error('network');
      window.location.href = '/thanks.html';
    } catch (err) {
      alert('送信に失敗しました。時間を置いて再度お試しください。');
      submitBtn.disabled = false; submitBtn.textContent = '概算を添えて依頼を送信する';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupHeroSlider(); setupReveals(); setupFloatingCta(); setupFilters(); setupEstimate();
  if (document.getElementById('featured-grid')) mountGallery('featured-grid', 8);
  if (document.getElementById('portfolio-grid')) mountGallery('portfolio-grid', 20);
});
