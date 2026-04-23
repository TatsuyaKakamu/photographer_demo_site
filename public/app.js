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

function mountGallery(targetId, limit = 20, scene = 'All') {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.innerHTML = '';
  works
    .filter((w) => scene === 'All' || w.scene === scene)
    .slice(0, limit)
    .forEach((w) => {
      const el = document.createElement('article');
      el.className = 'work reveal';
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
    slides[current].classList.remove('focus-shift');
    current = (current + 1) % slides.length;
    slides[current].classList.add('focus-shift');
    requestAnimationFrame(() => {
      slides[current].classList.add('active');
    });
    setTimeout(() => {
      slides[current].classList.remove('focus-shift');
    }, 520);
  }, 5200);
}

function setupViewfinderOverlay() {
  const overlay = document.querySelector('.viewfinder-overlay');
  const afFrame = overlay?.querySelector('.af-frame');
  if (!overlay || !afFrame) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  const hudPresets = {
    '/': { iso: 'ISO 200', f: 'F1.8', ss: '1/500', focal: '50mm' },
    '/index.html': { iso: 'ISO 200', f: 'F1.8', ss: '1/500', focal: '50mm' },
    '/portfolio.html': { iso: 'ISO 320', f: 'F4.0', ss: '1/250', focal: '85mm' },
    '/estimate.html': { iso: 'ISO 640', f: 'F2.8', ss: '1/160', focal: '35mm' },
    '/about.html': { iso: 'ISO 500', f: 'F2.2', ss: '1/200', focal: '40mm' },
    '/notes.html': { iso: 'ISO 100', f: 'F5.6', ss: '1/80', focal: '24mm' },
    '/thanks.html': { iso: 'ISO 250', f: 'F2.0', ss: '1/320', focal: '58mm' }
  };
  const activeHud = hudPresets[location.pathname] ?? hudPresets['/'];
  Object.entries(activeHud).forEach(([key, value]) => {
    const hud = overlay.querySelector(`[data-hud="${key}"]`);
    if (hud) hud.textContent = value;
  });

  const moveFrame = (event) => {
    const x = Math.min(window.innerWidth - 24, Math.max(24, event.clientX));
    const y = Math.min(window.innerHeight - 24, Math.max(24, event.clientY));
    afFrame.style.left = `${x}px`;
    afFrame.style.top = `${y}px`;
  };

  window.addEventListener('pointermove', moveFrame, { passive: true });
  window.addEventListener('mousemove', moveFrame, { passive: true });

  let flashTimer;
  window.addEventListener('scroll', () => {
    clearTimeout(flashTimer);
    flashTimer = setTimeout(() => {
      overlay.classList.add('flash-active');
      setTimeout(() => overlay.classList.remove('flash-active'), 120);
    }, 110);
  }, { passive: true });
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

document.addEventListener('DOMContentLoaded', () => {
  setupViewfinderOverlay();
  setupHeroSlider();
  setupReveals();
  setupFloatingCta();
  setupFilters();
  setupMobileNav();
  setupEstimate();

  if (document.getElementById('featured-grid')) mountGallery('featured-grid', 8);
  if (document.getElementById('portfolio-grid')) mountGallery('portfolio-grid', 20);
});
