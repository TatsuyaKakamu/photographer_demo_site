const works = [
  {
    id: 1,
    title: 'Night Presence',
    scene: 'Night',
    image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Daikoku Futo, Yokohama',
      time: '2026-02-14 20:12',
      cameraLens: 'Sony α7 IV + FE 35mm F1.4 GM',
      settings: 'ISO 640 / F1.8 / 1-100s'
    },
    note: '街灯の反射をボディラインに沿わせるため、車体角度を5度だけ振っている。'
  },
  {
    id: 2,
    title: 'Urban Gloss',
    scene: 'Urban',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Shibuya Stream, Tokyo',
      time: '2026-01-22 16:48',
      cameraLens: 'Canon EOS R6 Mark II + RF 24-70mm F2.8L',
      settings: 'ISO 250 / F4.0 / 1-200s'
    },
    note: '背景の看板色が主張しすぎないよう、偏光の角度を微調整して艶だけを残した。'
  },
  {
    id: 3,
    title: 'Coastal Light',
    scene: 'Coastal',
    image: 'https://images.unsplash.com/photo-1549317336-206569e8475c?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Zushi Marina, Kanagawa',
      time: '2025-11-08 06:21',
      cameraLens: 'Nikon Z6II + NIKKOR Z 50mm F1.8 S',
      settings: 'ISO 100 / F2.8 / 1-640s'
    },
    note: '朝焼けの色温度が上がる前の4分間だけ狙い、ヘッドライトに空の色を映した。'
  },
  {
    id: 4,
    title: 'Mountain Cut',
    scene: 'Mountain',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Hakone Turnpike, Kanagawa',
      time: '2025-10-02 09:10',
      cameraLens: 'Sony α7R V + FE 70-200mm F2.8 GM OSS II',
      settings: 'ISO 125 / F4.5 / 1-500s'
    },
    note: '圧縮効果で山の稜線と車のフェンダーを重ね、力感を演出。'
  },
  {
    id: 5,
    title: 'Steel Detail',
    scene: 'Detail',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Studio K, Shinagawa',
      time: '2026-03-05 14:06',
      cameraLens: 'Canon EOS R5 + RF 85mm F2 Macro',
      settings: 'ISO 200 / F5.6 / 1-160s'
    },
    note: 'メタル質感が白飛びしないよう、ディフューザー越しに一点だけ強いハイライトを置いた。'
  },
  {
    id: 6,
    title: 'Motion Blur',
    scene: 'Motion',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Bay Shore Route, Tokyo',
      time: '2026-02-02 22:48',
      cameraLens: 'Sony α1 + FE 24mm F1.4 GM',
      settings: 'ISO 320 / F8.0 / 1-30s'
    },
    note: '車体は流さず背景だけを流すため、速度とパン角を事前に3回計測。'
  },
  {
    id: 7,
    title: 'Midnight Urban',
    scene: 'Night',
    image: 'https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Ariake, Tokyo',
      time: '2025-12-18 23:17',
      cameraLens: 'Nikon Z8 + NIKKOR Z 35mm F1.8 S',
      settings: 'ISO 800 / F2.0 / 1-125s'
    },
    note: '街路樹の影がドアパネルに被る位置を避けるため、停車位置を60cm単位で調整。'
  },
  {
    id: 8,
    title: 'Editorial Avenue',
    scene: 'Urban',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Marunouchi Naka-dori, Tokyo',
      time: '2026-03-12 07:55',
      cameraLens: 'Fujifilm X-H2S + XF 33mm F1.4',
      settings: 'ISO 160 / F2.8 / 1-320s'
    },
    note: '通勤導線の切れ目30秒を使い、人物が自然に抜けた瞬間だけ連写。'
  },
  {
    id: 9,
    title: 'Seaside Drift',
    scene: 'Coastal',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Kujukuri Beach Road, Chiba',
      time: '2025-09-27 17:32',
      cameraLens: 'Sony α7 IV + FE 16-35mm F2.8 GM',
      settings: 'ISO 125 / F4.0 / 1-400s'
    },
    note: '波しぶきのタイミングに合わせて3秒カウントでシャッター、躍動感を作った。'
  },
  {
    id: 10,
    title: 'Ridge Frame',
    scene: 'Mountain',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Yatsugatake Skyline, Nagano',
      time: '2025-11-16 08:03',
      cameraLens: 'Canon EOS R3 + RF 70-200mm F2.8L',
      settings: 'ISO 200 / F5.0 / 1-640s'
    },
    note: '背景の山肌を立体的に出すため、太陽が斜め45度に来る時間に限定した。'
  },
  {
    id: 11,
    title: 'Badge & Carbon',
    scene: 'Detail',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Garage 11, Yokosuka',
      time: '2026-01-30 13:44',
      cameraLens: 'Sony α7R V + FE 90mm F2.8 Macro G OSS',
      settings: 'ISO 160 / F7.1 / 1-125s'
    },
    note: 'エンブレムの輪郭だけを硬く見せるため、反対側に黒ケントを立てて締めている。'
  },
  {
    id: 12,
    title: 'Rolling Cut',
    scene: 'Motion',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Minato Mirai Loop, Yokohama',
      time: '2026-03-01 19:26',
      cameraLens: 'Nikon Z6II + NIKKOR Z 24-120mm F4 S',
      settings: 'ISO 500 / F5.6 / 1-40s'
    },
    note: '道路照明の周期に合わせて走行速度を固定し、ブレを均一に整えた。'
  },
  {
    id: 13,
    title: 'Noir Bodyline',
    scene: 'Night',
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Shinagawa Interchange, Tokyo',
      time: '2025-12-02 21:39',
      cameraLens: 'Canon EOS R5 + RF 50mm F1.2L',
      settings: 'ISO 1000 / F1.8 / 1-80s'
    },
    note: '黒つぶれを避けつつ重さを残すため、シャドウは現場で1段だけ持ち上げる想定で撮影。'
  },
  {
    id: 14,
    title: 'Concrete Silence',
    scene: 'Urban',
    image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Toyosu Market Backlane, Tokyo',
      time: '2026-02-10 05:58',
      cameraLens: 'Sony α7 IV + FE 24-105mm F4 G OSS',
      settings: 'ISO 250 / F4.5 / 1-160s'
    },
    note: 'コンクリの冷たさを活かしつつ車体色を死なせないよう、色温度を4200Kで固定。'
  },
  {
    id: 15,
    title: 'Salt Air',
    scene: 'Coastal',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Enoshima Coastline, Kanagawa',
      time: '2025-08-21 18:11',
      cameraLens: 'Nikon Z8 + NIKKOR Z 85mm F1.8 S',
      settings: 'ISO 140 / F3.2 / 1-320s'
    },
    note: '潮風でヘイズが乗る前に1カットを完成させるため、構図確認は前日に済ませた。'
  },
  {
    id: 16,
    title: 'Alpine Tone',
    scene: 'Mountain',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Norikura Skyline, Gifu',
      time: '2025-10-18 07:24',
      cameraLens: 'Canon EOS R6 + RF 35mm F1.8 Macro',
      settings: 'ISO 160 / F5.6 / 1-500s'
    },
    note: '標高でコントラストが強く出るため、空とボディの階調を残す露出を優先。'
  },
  {
    id: 17,
    title: 'Leather & Stitch',
    scene: 'Detail',
    image: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Private Studio, Meguro',
      time: '2026-03-18 11:07',
      cameraLens: 'Sony α7R V + FE 50mm F2.5 G',
      settings: 'ISO 320 / F4.0 / 1-100s'
    },
    note: '革のしわを質感として見せるため、トップライトを弱めてサイドに寄せた。'
  },
  {
    id: 18,
    title: 'Launch Pass',
    scene: 'Motion',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Tatsumi Junction, Tokyo',
      time: '2026-01-11 00:26',
      cameraLens: 'Nikon Z9 + NIKKOR Z 24-70mm F2.8 S',
      settings: 'ISO 640 / F6.3 / 1-25s'
    },
    note: '加速感を出すため、先導車との距離を一定に保ちながら追走で撮影。'
  },
  {
    id: 19,
    title: 'Tunnel Reflection',
    scene: 'Night',
    image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Yamate Tunnel, Yokohama',
      time: '2025-11-28 22:54',
      cameraLens: 'Canon EOS R3 + RF 28-70mm F2L',
      settings: 'ISO 1250 / F2.8 / 1-125s'
    },
    note: 'トンネル照明の等間隔を利用し、ボディにリズム感あるハイライトを作った。'
  },
  {
    id: 20,
    title: 'Street Editorial',
    scene: 'Urban',
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80',
    beforeFilter: 'saturate(0.55) brightness(0.92) contrast(0.85) hue-rotate(8deg) blur(0.4px)',
    exif: {
      location: 'Kanda, Tokyo',
      time: '2026-02-27 15:02',
      cameraLens: 'Fujifilm X-T5 + XF 23mm F1.4',
      settings: 'ISO 200 / F2.2 / 1-500s'
    },
    note: '雑誌の扉を想定し、余白を左に確保したレイアウトで撮影時点から設計。'
  }
];

const worksById = new Map(works.map((work) => [String(work.id), work]));

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
      el.tabIndex = 0;
      el.setAttribute('role', 'button');
      el.dataset.workId = String(w.id);
      el.setAttribute('aria-label', `${w.title} のBefore/Afterとメイキングを見る`);
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

function setupLightbox() {
  if (document.getElementById('work-lightbox')) return;

  let activeList = [];
  let currentIndex = 0;
  let baPos = 50;
  let isOpen = false;
  let previousFocus = null;
  let pointerMode = null;
  let startX = 0;
  let startY = 0;

  const root = document.createElement('div');
  root.id = 'work-lightbox';
  root.className = 'lightbox';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-hidden', 'true');
  root.innerHTML = `
    <div class="lightbox-backdrop" data-lightbox-close></div>
    <div class="lightbox-ring" aria-hidden="true"></div>
    <div class="lightbox-shell" role="document">
      <button type="button" class="lightbox-close" data-lightbox-close aria-label="閉じる">×</button>
      <div class="lightbox-media">
        <div class="ba-stage" id="ba-stage">
          <img class="ba-image ba-before" alt="" draggable="false">
          <img class="ba-image ba-after" alt="" draggable="false">
          <button type="button" class="ba-handle" id="ba-handle" role="slider" aria-label="Before After スライダー" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" tabindex="0">
            <span class="ba-grip" aria-hidden="true"></span>
          </button>
        </div>
        <button type="button" class="lightbox-nav prev" data-nav="prev" aria-label="前の作品">←</button>
        <button type="button" class="lightbox-nav next" data-nav="next" aria-label="次の作品">→</button>
      </div>
      <aside class="lightbox-meta" aria-live="polite">
        <h2 class="lightbox-title"></h2>
        <p class="lightbox-scene"></p>
        <ul class="meta-list">
          <li><span>📍 Location</span><strong data-meta="location"></strong></li>
          <li><span>🕐 Time</span><strong data-meta="time"></strong></li>
          <li><span>📷 Camera+Lens</span><strong data-meta="camera"></strong></li>
          <li><span>⚙️ ISO·F·SS</span><strong data-meta="settings"></strong></li>
          <li><span>💭 Note</span><strong data-meta="note"></strong></li>
        </ul>
      </aside>
    </div>
  `;
  document.body.appendChild(root);

  const stage = root.querySelector('#ba-stage');
  const handle = root.querySelector('#ba-handle');
  const beforeImage = root.querySelector('.ba-before');
  const afterImage = root.querySelector('.ba-after');
  const titleEl = root.querySelector('.lightbox-title');
  const sceneEl = root.querySelector('.lightbox-scene');

  const focusableSelector = 'button, [href], [tabindex]:not([tabindex="-1"])';
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setSlider = (nextPos) => {
    baPos = Math.max(0, Math.min(100, nextPos));
    stage.style.setProperty('--ba-pos', `${baPos}%`);
    handle.style.left = `${baPos}%`;
    handle.setAttribute('aria-valuenow', String(Math.round(baPos)));
  };

  const renderWork = () => {
    const work = activeList[currentIndex];
    if (!work) return;

    titleEl.textContent = work.title;
    sceneEl.textContent = work.scene;
    beforeImage.src = work.image;
    afterImage.src = work.image;
    beforeImage.alt = `${work.title} before`;
    afterImage.alt = `${work.title} after`;
    beforeImage.style.filter = work.beforeFilter;
    root.querySelector('[data-meta="location"]').textContent = work.exif.location;
    root.querySelector('[data-meta="time"]').textContent = work.exif.time;
    root.querySelector('[data-meta="camera"]').textContent = work.exif.cameraLens;
    root.querySelector('[data-meta="settings"]').textContent = work.exif.settings;
    root.querySelector('[data-meta="note"]').textContent = work.note;
    setSlider(50);
  };

  const getActiveListFromGrid = (grid) => {
    if (!grid) return works;
    const ids = [...grid.querySelectorAll('.work[data-work-id]')].map((item) => item.dataset.workId);
    const list = ids.map((id) => worksById.get(String(id))).filter(Boolean);
    return list.length ? list : works;
  };

  const move = (direction) => {
    if (!activeList.length) return;
    currentIndex = (currentIndex + direction + activeList.length) % activeList.length;
    renderWork();
  };

  const close = () => {
    if (!isOpen) return;
    isOpen = false;
    root.classList.remove('open');
    root.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
  };

  const open = (workId, triggerEl) => {
    const grid = triggerEl?.closest('.gallery');
    activeList = getActiveListFromGrid(grid);
    const nextIndex = activeList.findIndex((work) => String(work.id) === String(workId));
    if (nextIndex < 0) return;

    currentIndex = nextIndex;
    previousFocus = document.activeElement;
    isOpen = true;
    root.classList.add('open');
    root.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    renderWork();

    if (prefersReducedMotion) {
      root.classList.add('ring-done');
    } else {
      root.classList.remove('ring-done');
      window.setTimeout(() => root.classList.add('ring-done'), 600);
    }

    const focusables = root.querySelectorAll(focusableSelector);
    if (focusables.length) focusables[0].focus();
  };

  document.addEventListener('click', (event) => {
    const workItem = event.target.closest('.work[data-work-id]');
    if (workItem) {
      open(workItem.dataset.workId, workItem);
      return;
    }

    if (!isOpen) return;
    if (event.target.closest('[data-lightbox-close]')) close();

    const navButton = event.target.closest('[data-nav]');
    if (navButton) {
      move(navButton.dataset.nav === 'next' ? 1 : -1);
    }
  });

  document.addEventListener('keydown', (event) => {
    const workItem = event.target.closest?.('.work[data-work-id]');
    if (!isOpen && workItem && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      open(workItem.dataset.workId, workItem);
      return;
    }

    if (!isOpen) return;

    if (event.key === 'Escape') {
      close();
      return;
    }

    if (event.key === 'Tab') {
      const focusables = [...root.querySelectorAll(focusableSelector)].filter((el) => !el.disabled);
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      setSlider(0);
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      setSlider(100);
      return;
    }

    if (document.activeElement === handle && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
      event.preventDefault();
      setSlider(baPos + (event.key === 'ArrowRight' ? 3 : -3));
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    }
  });

  const pointerToPercent = (clientX) => {
    const rect = stage.getBoundingClientRect();
    const relative = ((clientX - rect.left) / rect.width) * 100;
    setSlider(relative);
  };

  const onPointerMove = (event) => {
    if (!isOpen || pointerMode !== 'drag') return;
    pointerToPercent(event.clientX);
  };

  const onPointerUp = (event) => {
    if (!isOpen) return;

    if (pointerMode === 'swipe') {
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      if (Math.abs(deltaX) > 50 && Math.abs(deltaY) < 60) {
        move(deltaX < 0 ? 1 : -1);
      }
    }

    pointerMode = null;
    stage.releasePointerCapture?.(event.pointerId);
    handle.releasePointerCapture?.(event.pointerId);
  };

  handle.addEventListener('pointerdown', (event) => {
    if (!isOpen) return;
    event.stopPropagation();
    pointerMode = 'drag';
    handle.setPointerCapture?.(event.pointerId);
    pointerToPercent(event.clientX);
  });

  stage.addEventListener('pointerdown', (event) => {
    if (!isOpen) return;
    startX = event.clientX;
    startY = event.clientY;
    pointerMode = 'swipe';
    stage.setPointerCapture?.(event.pointerId);
  });

  stage.addEventListener('pointermove', onPointerMove);
  stage.addEventListener('pointerup', onPointerUp);
  handle.addEventListener('pointermove', onPointerMove);
  handle.addEventListener('pointerup', onPointerUp);
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

document.addEventListener('DOMContentLoaded', () => {
  setupHeroSlider();
  setupReveals();
  setupFloatingCta();
  setupFilters();
  setupMobileNav();
  setupEstimate();
  setupLightbox();
  setupFinderUI();

  if (document.getElementById('featured-grid')) mountGallery('featured-grid', 8);
  if (document.getElementById('portfolio-grid')) mountGallery('portfolio-grid', 20);
});
