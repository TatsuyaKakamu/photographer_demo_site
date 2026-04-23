const DEFAULT_BEFORE_FILTER = 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)';

const works = [
  {
    id: 1, title: 'Night Presence', scene: 'Night',
    image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '横浜 みなとみらい', time: '2024-11 / 22:14', camera: 'Sony α7R V + 24-70mm GM', iso: 800, f: 2.8, ss: '1/60' },
    note: '街路灯の色温度が車体のメタリック塗装と合う瞬間を狙い、三脚でブラケット露光。'
  },
  {
    id: 2, title: 'Urban Gloss', scene: 'Urban',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '東京 丸の内', time: '2024-09 / 16:42', camera: 'Canon EOS R5 + 70-200mm RF', iso: 400, f: 4.0, ss: '1/250' },
    note: 'ガラス張りビルの映り込みを車体の縦ラインに重ね、わざと高さを合わせて構えた。'
  },
  {
    id: 3, title: 'Coastal Light', scene: 'Coastal',
    image: 'https://images.unsplash.com/photo-1549317336-206569e8475c?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '湘南 葉山', time: '2024-06 / 18:31', camera: 'Sony α7R V + 35mm GM', iso: 200, f: 5.6, ss: '1/500' },
    note: '日没15分前、影が伸びる時間帯だけに現れる金色を得るため、朝からロケ待機。'
  },
  {
    id: 4, title: 'Mountain Cut', scene: 'Mountain',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '長野 美ヶ原', time: '2024-08 / 05:48', camera: 'Nikon Z9 + 70-200mm S', iso: 100, f: 8.0, ss: '1/320' },
    note: '標高差で空気が澄む尾根道を選び、山肌を圧縮する望遠で車を風景の中に「置いた」。'
  },
  {
    id: 5, title: 'Steel Detail', scene: 'Detail',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80',
    exif: { location: 'スタジオ 世田谷', time: '2024-10 / 13:20', camera: 'Sony α7R V + 90mm Macro G', iso: 100, f: 11, ss: '1/125' },
    note: 'ヘッドライト内側リフレクターを活かすため、光源をボディサイドに走らせ反射を制御。'
  },
  {
    id: 6, title: 'Motion Blur', scene: 'Motion',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '富士スピードウェイ', time: '2024-07 / 11:05', camera: 'Canon EOS R5 + 24-105mm RF', iso: 100, f: 16, ss: '1/30' },
    note: '時速60kmで併走しながら1/30秒。ISO100まで落として昼光下でもブレ量を確保。'
  },
  {
    id: 7, title: 'Midnight Urban', scene: 'Night',
    image: 'https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '渋谷スクランブル', time: '2024-12 / 23:47', camera: 'Sony α7R V + 50mm GM', iso: 1600, f: 1.8, ss: '1/80' },
    note: 'ネオンの色ムラを背景に溶かすため、絞り開放でボケを深く作った。'
  },
  {
    id: 8, title: 'Editorial Avenue', scene: 'Urban',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '大阪 中之島', time: '2024-10 / 15:15', camera: 'Canon EOS R5 + 24mm RF', iso: 200, f: 5.6, ss: '1/400' },
    note: '歩道橋の上から見下ろす構図。都市のスケール感を出すため24mm広角を選択。'
  },
  {
    id: 9, title: 'Seaside Drift', scene: 'Coastal',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '鎌倉 七里ヶ浜', time: '2024-05 / 17:12', camera: 'Sony α7R V + 24-70mm GM', iso: 160, f: 4.0, ss: '1/800' },
    note: '塩害を避けつつ波打ち際ギリギリ。潮位表を確認してベストの30分だけ撮影。'
  },
  {
    id: 10, title: 'Ridge Frame', scene: 'Mountain',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '群馬 志賀高原', time: '2024-09 / 06:34', camera: 'Nikon Z9 + 24-120mm S', iso: 125, f: 9.0, ss: '1/250' },
    note: '雲海の切れ間を3時間待機。前景の低木を入れて車のスケール感を強調した。'
  },
  {
    id: 11, title: 'Badge & Carbon', scene: 'Detail',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
    exif: { location: 'スタジオ 港南', time: '2024-11 / 10:05', camera: 'Sony α7R V + 90mm Macro G', iso: 100, f: 5.6, ss: '1/160' },
    note: 'カーボン織目の微細な反射を殺さないよう、半逆光＋ディフューザー1枚で調整。'
  },
  {
    id: 12, title: 'Rolling Cut', scene: 'Motion',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '箱根ターンパイク', time: '2024-07 / 14:22', camera: 'Canon EOS R5 + 70-200mm RF', iso: 100, f: 11, ss: '1/60' },
    note: 'カーブ進入を狙い、パン追従の速度を合わせるためシャッタータイミングを3回リハ。'
  },
  {
    id: 13, title: 'Noir Bodyline', scene: 'Night',
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '六本木ヒルズ', time: '2024-12 / 21:08', camera: 'Sony α7R V + 55mm ZA', iso: 640, f: 2.0, ss: '1/50' },
    note: '単一光源（街灯）のみで陰影を描写。全体を黒に近づけ、ボディラインだけが浮かぶように。'
  },
  {
    id: 14, title: 'Concrete Silence', scene: 'Urban',
    image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '品川 倉庫街', time: '2024-10 / 17:50', camera: 'Canon EOS R5 + 35mm RF', iso: 200, f: 8.0, ss: '1/200' },
    note: 'コンクリート壁の凹凸が夕日に照らされる数分間のみ発生する質感を狙った。'
  },
  {
    id: 15, title: 'Salt Air', scene: 'Coastal',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '千葉 九十九里', time: '2024-08 / 05:22', camera: 'Sony α7R V + 85mm GM', iso: 250, f: 4.0, ss: '1/1000' },
    note: '朝霧越しの逆光で車体の輪郭だけが霧ににじむ時間を、3日通って確保。'
  },
  {
    id: 16, title: 'Alpine Tone', scene: 'Mountain',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '北海道 美瑛', time: '2024-09 / 10:18', camera: 'Nikon Z9 + 35mm S', iso: 100, f: 7.1, ss: '1/400' },
    note: '高山植物の緑と車体マットカラーの色差を作るため、彩度を現場で追い込んだ。'
  },
  {
    id: 17, title: 'Leather & Stitch', scene: 'Detail',
    image: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=1200&q=80',
    exif: { location: 'スタジオ 世田谷', time: '2024-11 / 14:40', camera: 'Sony α7R V + 90mm Macro G', iso: 100, f: 8.0, ss: '1/125' },
    note: '車内ダッシュボードのステッチ。三脚で手振れゼロを確保し、精細を優先。'
  },
  {
    id: 18, title: 'Launch Pass', scene: 'Motion',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '富士スピードウェイ', time: '2024-07 / 09:40', camera: 'Canon EOS R5 + 16-35mm RF', iso: 200, f: 6.3, ss: '1/1600' },
    note: 'スタート加速の瞬間、ローアングル10cmで車体下の気流を写し込む。'
  },
  {
    id: 19, title: 'Tunnel Reflection', scene: 'Night',
    image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '首都高 山手トンネル', time: '2024-12 / 02:34', camera: 'Sony α7R V + 24-70mm GM', iso: 1250, f: 2.8, ss: '1/100' },
    note: 'トンネル照明の色温度が揃う区間を下見で特定、通行量が減る深夜に撮影。'
  },
  {
    id: 20, title: 'Street Editorial', scene: 'Urban',
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80',
    exif: { location: '京都 祇園', time: '2024-10 / 16:05', camera: 'Canon EOS R5 + 50mm RF', iso: 320, f: 4.5, ss: '1/500' },
    note: '街路樹の影が車体を横切る瞬間を狙い、太陽の方位と時刻を事前計算。'
  },
];

const yen = (value) => `${value.toLocaleString('ja-JP')}円`;

const estimateConfig = {
  base: { key: 'one_car', label: '1台撮影ベース', price: 35000 },
  options: [
    { key: 'extra_cuts', label: '追加カット', price: 5000 },
    { key: 'night', label: '夜景撮影', price: 8000 },
    { key: 'extra_location', label: 'ロケ地追加', price: 10000 },
    { key: 'video', label: '動画撮影追加', price: 20000 },
    { key: 'retouch', label: 'レタッチ強化', price: 8000 },
    { key: 'rush', label: '納期短縮', price: 10000 },
    { key: 'weekend', label: '土日祝対応', price: 8000 }
  ],
  presets: [
    {
      key: 'sns_starter',
      label: 'SNSスターター',
      description: '投稿用の基本品質を押さえたい方向け。',
      includes: ['retouch'],
      bundlePrice: 6000
    },
    {
      key: 'editorial',
      label: 'エディトリアル',
      description: '雑誌風の見せ方に必要な定番セット。',
      includes: ['night', 'retouch', 'weekend'],
      bundlePrice: 18000
    },
    {
      key: 'campaign',
      label: 'キャンペーン',
      description: '訴求力とスピードを優先する商用向け。',
      includes: ['night', 'extra_location', 'video', 'retouch', 'rush'],
      bundlePrice: 42000
    }
  ],
  travelFees: {
    0: { label: '20km以内', amount: 0 },
    1: { label: '20〜50km', amount: 5000 },
    2: { label: '50km超', amount: 10000 }
  }
};

let currentFilteredIds = [];

function mountGallery(targetId, limit = 20, scene = 'All') {
  const root = document.getElementById(targetId);
  if (!root) return;

  const filtered = works
    .filter((w) => scene === 'All' || w.scene === scene)
    .slice(0, limit);

  currentFilteredIds = filtered.map((w) => w.id);

  root.innerHTML = '';
  filtered.forEach((w) => {
    const el = document.createElement('article');
    el.className = 'work reveal';
    el.tabIndex = 0;
    el.dataset.workId = String(w.id);
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `${w.title} を拡大して Before/After と撮影データを見る`);
    el.innerHTML = `<img loading="lazy" src="${w.image}" alt="${w.title} - ${w.scene} style car photograph"><span>${w.scene}</span>`;
    root.appendChild(el);
  });

  setupReveals();
}

function setupReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function setupHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;

  let current = 0;
  slides[current].classList.add('active');

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5200);
}

function setupFloatingCta() {
  const floating = document.querySelector('.floating-cta');
  if (!floating) return;

  window.addEventListener('scroll', () => {
    floating.classList.toggle('visible', window.scrollY > window.innerHeight * 0.85);
  });
}

function setupFilters() {
  const container = document.querySelector('[data-filter-container]');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const button = e.target.closest('[data-filter]');
    if (!button) return;

    container.querySelectorAll('[data-filter]').forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    mountGallery('portfolio-grid', 20, button.dataset.filter);
  });
}

function setupMobileNav() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (!header || !toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupEstimate() {
  const form = document.getElementById('estimate-form');
  if (!form) return;

  const presetWrap = document.getElementById('preset-list');
  const optWrap = document.getElementById('option-list');
  const summary = document.getElementById('estimate-summary');
  const discountState = document.getElementById('discount-state');
  const status = document.getElementById('form-status');

  estimateConfig.presets.forEach((preset, index) => {
    const regular = preset.includes.reduce((acc, key) => {
      const opt = estimateConfig.options.find((item) => item.key === key);
      return acc + (opt?.price ?? 0);
    }, 0);
    const save = regular - preset.bundlePrice;

    const card = document.createElement('label');
    card.className = 'preset-card';
    card.innerHTML = `
      <input type="radio" name="preset" value="${preset.key}" ${index === 1 ? 'checked' : ''}>
      <span class="preset-title">${preset.label}</span>
      <span class="preset-desc">${preset.description}</span>
      <span class="preset-pricing"><s>${yen(regular)}</s> → ${yen(preset.bundlePrice)}</span>
      <span class="preset-save">セット割引 ${yen(save)}</span>
    `;
    presetWrap.appendChild(card);
  });

  estimateConfig.options.forEach((opt) => {
    const row = document.createElement('label');
    row.className = 'option-item';
    row.innerHTML = `<input type="checkbox" name="options" value="${opt.key}"> ${opt.label}（+${yen(opt.price)}）`;
    optWrap.appendChild(row);
  });

  const getSelectedPreset = () => {
    const key = form.querySelector('input[name="preset"]:checked')?.value;
    return estimateConfig.presets.find((preset) => preset.key === key) ?? estimateConfig.presets[0];
  };

  const syncOptionsFromPreset = () => {
    const preset = getSelectedPreset();
    const checks = form.querySelectorAll('input[name="options"]');
    checks.forEach((check) => {
      check.checked = preset.includes.includes(check.value);
    });
  };

  const compute = () => {
    const selectedPreset = getSelectedPreset();
    const selected = [...form.querySelectorAll('input[name="options"]:checked')].map((i) => i.value);
    const selectedSet = new Set(selected);
    const allIncluded = selectedPreset.includes.every((key) => selectedSet.has(key));

    const chosenOptions = estimateConfig.options.filter((opt) => selectedSet.has(opt.key));
    const lineItems = [{ label: estimateConfig.base.label, amount: estimateConfig.base.price }];

    let optionTotal = 0;
    if (allIncluded) {
      lineItems.push({ label: `${selectedPreset.label} プリセット`, amount: selectedPreset.bundlePrice });
      optionTotal += selectedPreset.bundlePrice;

      const addonOptions = chosenOptions.filter((opt) => !selectedPreset.includes.includes(opt.key));
      addonOptions.forEach((opt) => {
        lineItems.push({ label: `${opt.label}（追加）`, amount: opt.price });
        optionTotal += opt.price;
      });

      discountState.textContent = 'プリセット割引が適用されています。';
      discountState.classList.remove('is-warning');
    } else {
      chosenOptions.forEach((opt) => {
        lineItems.push({ label: opt.label, amount: opt.price });
        optionTotal += opt.price;
      });

      discountState.textContent = 'プリセット内の項目が外れたため、単品価格に切り替わりました。';
      discountState.classList.add('is-warning');
    }

    const travel = Number(form.querySelector('select[name="travel_distance"]')?.value ?? 0);
    const travelFee = estimateConfig.travelFees[travel];
    if (travelFee?.amount) {
      lineItems.push({ label: `出張費 ${travelFee.label}`, amount: travelFee.amount });
    }

    const subtotal = lineItems.reduce((acc, item) => acc + item.amount, 0);
    const tax = Math.round(subtotal * 0.1);
    const total = subtotal + tax;

    summary.innerHTML = lineItems.map((item) => `<div class="line"><span>${item.label}</span><strong>${yen(item.amount)}</strong></div>`).join('')
      + `<div class="line"><span>小計</span><strong>${yen(subtotal)}</strong></div>`
      + `<div class="line"><span>消費税(10%)</span><strong>${yen(tax)}</strong></div>`
      + `<div class="line total"><span>税込概算合計</span><strong>${yen(total)}</strong></div>`;

    return {
      preset: selectedPreset.key,
      discountApplied: allIncluded,
      options: selected,
      optionTotal,
      lineItems,
      subtotal,
      tax,
      total
    };
  };

  form.addEventListener('change', (event) => {
    if (event.target.matches('input[name="preset"]')) {
      syncOptionsFromPreset();
    }
    compute();
  });

  syncOptionsFromPreset();
  compute();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const consent = form.querySelector('input[name="consent"]');
    if (!consent?.checked) return;

    const estimate = compute();
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.options = [...form.querySelectorAll('input[name="options"]:checked')].map((i) => i.value);
    payload.estimate = estimate;

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = '送信中...';
    status.textContent = '';

    try {
      const res = await fetch('/api/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('network');
      window.location.href = '/thanks.html';
    } catch {
      status.textContent = '送信に失敗しました。時間を置いて再度お試しください。';
      submitBtn.disabled = false;
      submitBtn.textContent = '概算を添えて依頼を送信する';
    }
  });
}

function setupFinderUI() {
  if (document.getElementById('finder-root')) return;

  const FINDER_PAGES = new Set(['/', '/index.html', '/portfolio.html']);
  if (!FINDER_PAGES.has(window.location.pathname)) return;

  const pageLabels = {
    '/': 'HOME',
    '/index.html': 'HOME',
    '/portfolio.html': 'PORTFOLIO'
  };
  const pageName = pageLabels[window.location.pathname] ?? 'KURIKI';

  const root = document.createElement('div');
  root.id = 'finder-root';
  root.setAttribute('aria-hidden', 'true');
  root.innerHTML = `
    <div class="finder-af" id="finder-af">
      <span class="af-bracket tl"></span>
      <span class="af-bracket tr"></span>
      <span class="af-bracket bl"></span>
      <span class="af-bracket br"></span>
    </div>
    <div class="finder-hud" role="status" aria-live="off">
      <div class="hud-corner hud-tl">
        <span class="hud-led"></span>
        <span class="hud-item"><span class="hud-k">ISO</span>400</span>
        <span class="hud-item"><span class="hud-k">F</span>2.8</span>
        <span class="hud-item">1/250</span>
      </div>
      <div class="hud-corner hud-tr">
        <span class="hud-led"></span>
        <span class="hud-item hud-page">${pageName}</span>
        <span class="hud-item hud-time">--:--</span>
      </div>
      <div class="hud-corner hud-bl">
        <span class="hud-led"></span>
        <span class="hud-item">YOKOHAMA</span>
        <span class="hud-item">JP</span>
      </div>
      <div class="hud-corner hud-br">
        <span class="hud-led hud-led--pulse"></span>
        <span class="hud-item"><span class="hud-k">BAT</span>87%</span>
        <span class="hud-item"><span class="hud-k">SHOTS</span><span class="hud-shots">0024</span></span>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  const toggle = document.createElement('button');
  toggle.id = 'finder-toggle';
  toggle.className = 'finder-toggle';
  toggle.type = 'button';
  toggle.innerHTML = '<span class="finder-dot"></span><span class="finder-label">FINDER</span>';
  document.body.appendChild(toggle);

  const STORAGE_KEY = 'kuriki.finder';
  const stored = localStorage.getItem(STORAGE_KEY);
  const finderOn = stored === null ? true : stored === 'on';
  const applyState = (on) => {
    document.body.classList.toggle('finder-on', on);
    document.body.classList.toggle('finder-off', !on);
    toggle.setAttribute('aria-pressed', String(on));
    toggle.querySelector('.finder-label').textContent = on ? 'FINDER ON' : 'FINDER OFF';
  };
  applyState(finderOn);

  toggle.addEventListener('click', () => {
    const next = !document.body.classList.contains('finder-on');
    localStorage.setItem(STORAGE_KEY, next ? 'on' : 'off');
    applyState(next);
  });

  const af = root.querySelector('#finder-af');
  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const rendered = { x: mouse.x, y: mouse.y };
  let snapTarget = null;

  const updateSnap = (el) => {
    if (!el || !el.isConnected) { snapTarget = null; af.classList.remove('snap'); return; }
    const rect = el.getBoundingClientRect();
    snapTarget = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    af.classList.add('snap');
  };

  document.addEventListener('pointermove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    af.classList.add('visible');
  });
  document.addEventListener('pointerleave', () => af.classList.remove('visible'));

  document.addEventListener('pointerover', (e) => {
    const target = e.target.closest('a, button, .work');
    if (target && !target.closest('#finder-toggle')) updateSnap(target);
  });
  document.addEventListener('pointerout', (e) => {
    const target = e.target.closest('a, button, .work');
    if (target && !target.closest('#finder-toggle')) {
      snapTarget = null;
      af.classList.remove('snap');
    }
  });

  const tick = () => {
    const target = snapTarget ?? mouse;
    rendered.x += (target.x - rendered.x) * 0.22;
    rendered.y += (target.y - rendered.y) * 0.22;
    af.style.transform = `translate3d(${rendered.x}px, ${rendered.y}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  const timeEl = root.querySelector('.hud-time');
  const updateTime = () => {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const mm = pad(now.getMonth() + 1);
    const dd = pad(now.getDate());
    const hh = pad(now.getHours());
    const mi = pad(now.getMinutes());
    timeEl.textContent = `${mm}/${dd} ${hh}:${mi}`;
  };
  updateTime();
  setInterval(updateTime, 30 * 1000);

  const shotsEl = root.querySelector('.hud-shots');
  let shots = 24;
  let lastShotY = window.scrollY;
  const SHOT_STEP = 360;
  window.addEventListener('scroll', () => {
    if (Math.abs(window.scrollY - lastShotY) >= SHOT_STEP) {
      shots += 1;
      lastShotY = window.scrollY;
      shotsEl.textContent = String(shots).padStart(4, '0');
      shotsEl.parentElement.classList.add('hud-blink');
      setTimeout(() => shotsEl.parentElement.classList.remove('hud-blink'), 180);
    }
  }, { passive: true });
}

function setupLightbox() {
  if (document.getElementById('lightbox-root')) return;

  const root = document.createElement('div');
  root.id = 'lightbox-root';
  root.className = 'lightbox';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-labelledby', 'lightbox-title');
  root.hidden = true;
  root.innerHTML = `
    <div class="lightbox-overlay" data-lb-close aria-hidden="true"></div>
    <div class="lightbox-ring" aria-hidden="true"></div>
    <button type="button" class="lightbox-close" data-lb-close aria-label="閉じる">×</button>
    <div class="lightbox-stage">
      <img class="ba-after" alt="" draggable="false">
      <img class="ba-before" alt="" draggable="false">
      <span class="ba-label ba-label-before">BEFORE 撮って出し</span>
      <span class="ba-label ba-label-after">AFTER レタッチ</span>
      <button type="button" class="lightbox-prev" data-lb-prev aria-label="前の作品">‹</button>
      <button type="button" class="lightbox-next" data-lb-next aria-label="次の作品">›</button>
      <div class="ba-handle" role="slider" aria-label="Before/After 比較スライダー" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" tabindex="0">
        <span class="ba-handle-bar"></span>
        <span class="ba-handle-dot"></span>
      </div>
    </div>
    <aside class="lightbox-exif">
      <div class="exif-head">
        <span class="exif-scene"></span>
        <h3 id="lightbox-title" class="exif-title">—</h3>
        <span class="exif-count"></span>
      </div>
      <div class="exif-chip"><span class="exif-ico" aria-hidden="true">📍</span><span class="exif-k">Location</span><span class="exif-v" data-k="location"></span></div>
      <div class="exif-chip"><span class="exif-ico" aria-hidden="true">🕐</span><span class="exif-k">Time</span><span class="exif-v" data-k="time"></span></div>
      <div class="exif-chip"><span class="exif-ico" aria-hidden="true">📷</span><span class="exif-k">Camera</span><span class="exif-v" data-k="camera"></span></div>
      <div class="exif-chip"><span class="exif-ico" aria-hidden="true">⚙️</span><span class="exif-k">Exposure</span><span class="exif-v" data-k="settings"></span></div>
      <div class="exif-note"><span class="exif-ico" aria-hidden="true">💭</span><span class="exif-v" data-k="note"></span></div>
      <p class="exif-hint">← → で前後、Esc で閉じる / ハンドルをドラッグで Before/After</p>
    </aside>
  `;
  document.body.appendChild(root);

  const ring = root.querySelector('.lightbox-ring');
  const closeBtn = root.querySelector('.lightbox-close');
  const prevBtn = root.querySelector('.lightbox-prev');
  const nextBtn = root.querySelector('.lightbox-next');
  const stage = root.querySelector('.lightbox-stage');
  const handle = root.querySelector('.ba-handle');
  const beforeImg = root.querySelector('.ba-before');
  const afterImg = root.querySelector('.ba-after');
  const titleEl = root.querySelector('#lightbox-title');
  const sceneEl = root.querySelector('.exif-scene');
  const countEl = root.querySelector('.exif-count');
  const vLoc = root.querySelector('[data-k="location"]');
  const vTime = root.querySelector('[data-k="time"]');
  const vCam = root.querySelector('[data-k="camera"]');
  const vSet = root.querySelector('[data-k="settings"]');
  const vNote = root.querySelector('[data-k="note"]');

  let currentIndex = -1;
  let lastFocus = null;
  let baPos = 50;

  const setPos = (p) => {
    baPos = Math.max(0, Math.min(100, p));
    stage.style.setProperty('--ba-pos', `${baPos}%`);
    handle.setAttribute('aria-valuenow', String(Math.round(baPos)));
  };

  const hiRes = (url) => url.replace('w=1200', 'w=1800').replace('q=80', 'q=85');

  const renderSlide = (index) => {
    const id = currentFilteredIds[index];
    const w = works.find((x) => x.id === id);
    if (!w) return;
    currentIndex = index;
    const url = hiRes(w.image);
    beforeImg.src = url;
    afterImg.src = url;
    beforeImg.alt = `${w.title} - 撮って出し (before)`;
    afterImg.alt = `${w.title} - レタッチ済み (after)`;
    stage.style.setProperty('--before-filter', w.beforeFilter || DEFAULT_BEFORE_FILTER);
    titleEl.textContent = w.title;
    sceneEl.textContent = w.scene;
    countEl.textContent = `${index + 1} / ${currentFilteredIds.length}`;
    vLoc.textContent = w.exif.location;
    vTime.textContent = w.exif.time;
    vCam.textContent = w.exif.camera;
    vSet.textContent = `ISO ${w.exif.iso} · F${w.exif.f} · ${w.exif.ss}`;
    vNote.textContent = w.note;
    setPos(50);
  };

  const openLightbox = (id) => {
    if (!currentFilteredIds.length) return;
    const index = currentFilteredIds.indexOf(id);
    if (index < 0) return;
    lastFocus = document.activeElement;
    root.hidden = false;
    document.body.classList.add('lightbox-open');
    renderSlide(index);
    ring.classList.remove('active');
    void ring.offsetWidth;
    ring.classList.add('active');
    setTimeout(() => ring.classList.remove('active'), 650);
    closeBtn.focus();
  };

  const closeLightbox = () => {
    if (root.hidden) return;
    root.hidden = true;
    document.body.classList.remove('lightbox-open');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  };

  const navigate = (delta) => {
    const len = currentFilteredIds.length;
    if (!len) return;
    renderSlide((currentIndex + delta + len) % len);
  };

  document.addEventListener('click', (e) => {
    if (document.body.classList.contains('lightbox-open')) return;
    const work = e.target.closest('.work[data-work-id]');
    if (!work) return;
    openLightbox(Number(work.dataset.workId));
  });

  document.addEventListener('keydown', (e) => {
    if (document.body.classList.contains('lightbox-open')) return;
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const work = e.target.closest?.('.work[data-work-id]');
    if (!work) return;
    e.preventDefault();
    openLightbox(Number(work.dataset.workId));
  });

  root.addEventListener('click', (e) => {
    if (e.target.closest('[data-lb-close]')) closeLightbox();
    else if (e.target.closest('[data-lb-prev]')) navigate(-1);
    else if (e.target.closest('[data-lb-next]')) navigate(1);
  });

  root.addEventListener('keydown', (e) => {
    if (root.hidden) return;
    const onHandle = document.activeElement === handle;
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        closeLightbox();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (onHandle) setPos(baPos - 2); else navigate(-1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (onHandle) setPos(baPos + 2); else navigate(1);
        break;
      case 'Home':
        e.preventDefault();
        setPos(0);
        break;
      case 'End':
        e.preventDefault();
        setPos(100);
        break;
      case 'Tab': {
        const focusables = [closeBtn, prevBtn, handle, nextBtn];
        const idx = focusables.indexOf(document.activeElement);
        if (idx < 0) { e.preventDefault(); closeBtn.focus(); return; }
        if (e.shiftKey && idx === 0) { e.preventDefault(); focusables[focusables.length - 1].focus(); }
        else if (!e.shiftKey && idx === focusables.length - 1) { e.preventDefault(); focusables[0].focus(); }
        break;
      }
    }
  });

  const xToPct = (x) => {
    const rect = stage.getBoundingClientRect();
    return ((x - rect.left) / rect.width) * 100;
  };

  let draggingHandle = false;
  handle.addEventListener('pointerdown', (e) => {
    draggingHandle = true;
    try { handle.setPointerCapture(e.pointerId); } catch {}
    e.stopPropagation();
    e.preventDefault();
  });
  handle.addEventListener('pointermove', (e) => {
    if (!draggingHandle) return;
    setPos(xToPct(e.clientX));
  });
  const endHandleDrag = (e) => {
    if (!draggingHandle) return;
    draggingHandle = false;
    try { handle.releasePointerCapture(e.pointerId); } catch {}
  };
  handle.addEventListener('pointerup', endHandleDrag);
  handle.addEventListener('pointercancel', endHandleDrag);

  let gesture = null;
  stage.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.ba-handle, button')) return;
    gesture = {
      id: e.pointerId, type: e.pointerType,
      startX: e.clientX, startY: e.clientY, isSwipe: false
    };
    try { stage.setPointerCapture(e.pointerId); } catch {}
    if (e.pointerType === 'mouse') setPos(xToPct(e.clientX));
  });
  stage.addEventListener('pointermove', (e) => {
    if (!gesture || gesture.id !== e.pointerId) return;
    const dx = e.clientX - gesture.startX;
    const dy = e.clientY - gesture.startY;
    if (gesture.type === 'touch') {
      if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) gesture.isSwipe = true;
      if (!gesture.isSwipe) setPos(xToPct(e.clientX));
    } else if (gesture.type === 'mouse') {
      setPos(xToPct(e.clientX));
    }
  });
  stage.addEventListener('pointerup', (e) => {
    if (!gesture || gesture.id !== e.pointerId) return;
    const dx = e.clientX - gesture.startX;
    if (gesture.isSwipe && Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1);
    else if (gesture.type === 'touch' && !gesture.isSwipe) setPos(xToPct(e.clientX));
    try { stage.releasePointerCapture(e.pointerId); } catch {}
    gesture = null;
  });
  stage.addEventListener('pointercancel', (e) => {
    try { stage.releasePointerCapture(e.pointerId); } catch {}
    gesture = null;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupHeroSlider();
  setupReveals();
  setupFloatingCta();
  setupFilters();
  setupMobileNav();
  setupEstimate();
  setupFinderUI();
  setupLightbox();

  if (document.getElementById('featured-grid')) mountGallery('featured-grid', 8);
  if (document.getElementById('portfolio-grid')) mountGallery('portfolio-grid', 20);
});
