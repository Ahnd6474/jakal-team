// ===== PROJECT DATA =====
const PROJECTS = [
  // ---- Previous Projects ----
  {
    id: 'latte',
    category: 'previous',
    categoryLabel: '이전 프로젝트',
    icon: '☕',
    iconBg: 'rgba(245,158,11,0.15)',
    title: 'LATTE',
    shortDesc: '자동화 기반의 실험적 응용 프로젝트',
    fullDesc: 'LATTE는 Jakal 팀의 초기 실험 프로젝트로, 자동화 파이프라인의 가능성을 탐구한 작업입니다. 반복적인 작업을 코드로 대체하는 워크플로우를 연구하고, 이후 Jakal Series의 기반이 되는 핵심 아이디어들을 도출했습니다.',
    tags: ['Automation', 'Python', 'Research'],
    url: 'https://github.com/Ahnd6474/LATTE'
  },
  {
    id: 'tomato',
    category: 'previous',
    categoryLabel: '이전 프로젝트',
    icon: '🍅',
    iconBg: 'rgba(239,68,68,0.15)',
    title: 'TomatatoDisease',
    shortDesc: 'AI 기반 토마토 식물 질병 진단 시스템',
    fullDesc: '딥러닝 이미지 분류 모델을 활용해 토마토 잎 사진에서 질병을 자동으로 진단하는 시스템입니다. 농업 현장에서 육안 검사를 대체하고, 조기 질병 탐지를 통해 작물 손실을 최소화하는 것을 목표로 합니다. CNN 기반 분류 모델을 학습시켜 여러 가지 병해 유형을 구분합니다.',
    tags: ['Deep Learning', 'Computer Vision', 'Python', 'CNN'],
    url: 'https://github.com/Ahnd6474/TomatatoDisease'
  },
  {
    id: 'colony',
    category: 'previous',
    categoryLabel: '이전 프로젝트',
    icon: '🔬',
    iconBg: 'rgba(16,185,129,0.15)',
    title: 'ColonyPlate',
    shortDesc: '배양 플레이트 콜로니 자동 계수 시스템',
    fullDesc: '실험실에서 수작업으로 진행하던 세균 콜로니 카운팅을 자동화한 컴퓨터 비전 프로젝트입니다. 배양 플레이트 이미지를 분석하여 콜로니 수를 자동으로 계수함으로써 실험 시간과 오차를 줄입니다. 생명과학 분야의 반복 작업 자동화 사례입니다.',
    tags: ['Computer Vision', 'OpenCV', 'Python', 'Lab Automation'],
    url: 'https://github.com/Ahnd6474/ColonyPlate'
  },

  // ---- Jakal Series ----
  {
    id: 'jakal-flow',
    category: 'jakal',
    categoryLabel: 'Jakal Series',
    icon: '⚡',
    iconBg: 'rgba(99,102,241,0.15)',
    title: 'Jakal-flow',
    shortDesc: 'AI 에이전트 기반 자동화 플로우 엔진',
    fullDesc: 'Jakal Series의 핵심 엔진입니다. 여러 AI 모델(GPT, Gemini 등)과 자동화 도구를 연결하여 복잡한 작업 흐름을 오케스트레이션합니다. Jakal-flow 위에서 동작하는 다양한 파생 프로젝트들의 기반이 되며, 에이전트 간 통신, 작업 분배, 결과 취합 등을 처리합니다.',
    tags: ['AI Agent', 'Orchestration', 'LLM', 'Python', 'Automation'],
    url: 'https://github.com/Ahnd6474/Jakal-flow'
  },
  {
    id: 'jakal-chart',
    category: 'jakal',
    categoryLabel: 'Jakal Series',
    icon: '📈',
    iconBg: 'rgba(245,158,11,0.15)',
    title: 'Jakal-chart',
    shortDesc: 'AI 기반 주식 분석 자동화 시스템',
    fullDesc: 'Jakal-flow를 기반으로 주식 시장 데이터를 자동 수집·분석하는 시스템입니다. AI 모델이 차트 패턴, 기술적 지표, 시장 흐름을 분석하고 인사이트를 자동으로 생성합니다. 반복적인 시장 분석 작업을 자동화하여 의사결정 속도를 높입니다.',
    tags: ['Stock', 'Finance AI', 'Data Analysis', 'Python'],
    url: 'https://github.com/Ahnd6474/stock_ai'
  },
  {
    id: 'jakal-work',
    category: 'jakal',
    categoryLabel: 'Jakal Series',
    icon: '🧪',
    iconBg: 'rgba(16,185,129,0.15)',
    title: 'Jakal-work',
    shortDesc: 'Jakal 시스템 실험 및 프로토타이핑 공간',
    fullDesc: '새로운 자동화 아이디어와 AI 통합 방식을 실험하는 샌드박스 저장소입니다. Jakal Series에 추가될 기능들의 프로토타입을 만들고, 다양한 LLM과 자동화 도구의 조합을 테스트합니다. 팀의 R&D 허브 역할을 합니다.',
    tags: ['Experiment', 'Prototype', 'R&D', 'LLM'],
    url: 'https://github.com/Ahnd6474/experiment'
  },
  {
    id: 'jakal-lit',
    category: 'jakal',
    categoryLabel: 'Jakal Series',
    icon: '📚',
    iconBg: 'rgba(139,92,246,0.15)',
    title: 'Jakal-lit',
    shortDesc: 'AI 기반 문헌 자동 수집·정리 시스템',
    fullDesc: '연구 논문, 기술 문서, 웹 콘텐츠를 자동으로 수집하고 AI가 요약·분류하는 시스템입니다. 방대한 정보를 빠르게 소화하고 핵심 인사이트를 추출하는 과정을 자동화합니다. 학습과 리서치에 드는 시간을 극적으로 줄이는 것을 목표로 합니다.',
    tags: ['Literature Review', 'NLP', 'Summarization', 'AI'],
    url: 'https://github.com/Ahnd6474/lit'
  },
  {
    id: 'jakal-hwpx',
    category: 'jakal',
    categoryLabel: 'Jakal Series',
    icon: '📄',
    iconBg: 'rgba(59,130,246,0.15)',
    title: 'Jakal-hwpx',
    shortDesc: 'HWP/HWPX 문서 자동화 처리 도구',
    fullDesc: '한글 문서(HWP/HWPX) 형식을 자동으로 파싱·생성·편집하는 도구입니다. 공공기관, 기업 환경에서 반드시 사용해야 하는 HWP 형식의 문서 작업을 코드로 자동화합니다. 보고서 자동 생성, 데이터 추출, 문서 변환 등 다양한 시나리오에 적용 가능합니다.',
    tags: ['HWP', 'Document Automation', 'Python', 'Korea'],
    url: 'https://github.com/Ahnd6474/jakal-hwpx'
  },

  // ---- Made with Jakal-flow ----
  {
    id: 'testwebsite',
    category: 'made',
    categoryLabel: 'Made with Jakal',
    icon: '🌐',
    iconBg: 'rgba(6,182,212,0.15)',
    title: 'Gemini Flash Website',
    shortDesc: 'Jakal-flow + Gemini 3 Flash로 생성한 웹사이트',
    fullDesc: 'Jakal-flow 시스템을 사용해 Google Gemini 3 Flash 모델이 자동으로 구성하고 생성한 웹사이트 프로젝트입니다. AI가 콘텐츠 기획부터 코드 생성까지 전 과정을 수행하며, Jakal-flow의 멀티 에이전트 파이프라인이 각 단계를 조율합니다.',
    tags: ['Gemini 3 Flash', 'Jakal-flow', 'Web', 'AI Generated'],
    url: 'https://github.com/Ahnd6474/testwebsite'
  },
  {
    id: 'calculator',
    category: 'made',
    categoryLabel: 'Made with Jakal',
    icon: '🧮',
    iconBg: 'rgba(245,158,11,0.15)',
    title: 'GPT Calculator',
    shortDesc: 'Jakal-flow + GPT 5.4로 만든 스마트 계산기',
    fullDesc: 'Jakal-flow 시스템과 GPT 5.4 모델을 결합하여 자동 생성한 스마트 계산기 애플리케이션입니다. 단순한 사칙연산을 넘어 AI가 자연어로 된 수식을 이해하고 계산합니다. Made with Jakal-flow 시리즈의 실용적 사례로, AI 코드 생성 능력을 시연합니다.',
    tags: ['GPT 5.4', 'Jakal-flow', 'Calculator', 'AI Generated'],
    url: 'https://github.com/Ahnd6474/calculator'
  }
];

// ===== RENDER PROJECT CARDS =====
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.transitionDelay = `${i * 0.06}s`;
    card.setAttribute('data-category', p.category);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', p.title + ' 상세 보기');
    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon" style="background:${p.iconBg}">${p.icon}</div>
        <div class="card-arrow">&#8599;</div>
      </div>
      <div class="card-category">${p.categoryLabel}</div>
      <div class="card-title">${p.title}</div>
      <div class="card-desc">${p.shortDesc}</div>
      <div class="card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `;
    card.addEventListener('click', () => openModal(p));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(p); });
    grid.appendChild(card);
  });
  // trigger reveal
  requestAnimationFrame(() => {
    document.querySelectorAll('#projectGrid .reveal').forEach(el => {
      el.classList.add('visible');
    });
  });
}

// ===== FILTER TABS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

// ===== MODAL =====
function openModal(p) {
  document.getElementById('modalBadge').textContent = p.categoryLabel;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalDesc').textContent = p.fullDesc;
  document.getElementById('modalTags').innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  document.getElementById('modalLink').href = p.url;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 20
    ? 'rgba(10,10,15,0.95)'
    : 'rgba(10,10,15,0.85)';
});

// ===== MOBILE NAV =====
function toggleMenu() {
  document.getElementById('navMobile').classList.toggle('open');
}

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function observeReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'));
    let current = 0;
    const step = Math.ceil(target / 30);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 40);
  });
}
const statsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateCounters();
    statsObserver.disconnect();
  }
}, { threshold: 0.5 });
const statsEl = document.querySelector('.about-stats');
if (statsEl) statsObserver.observe(statsEl);

// ===== PARTICLE CANVAS =====
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: null, y: null };

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function rand(a, b) { return Math.random() * (b - a) + a; }

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: rand(0, W || 800), y: rand(0, H || 600),
      vx: rand(-0.3, 0.3), vy: rand(-0.3, 0.3),
      r: rand(1, 2.5),
      alpha: rand(0.2, 0.6)
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
      ctx.fill();
    });
    // connect nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99,102,241,${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();

  canvas.parentElement.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
})();

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  // add reveal to static elements
  document.querySelectorAll('.team-card, .stat, .contact-card').forEach(el => {
    el.classList.add('reveal');
  });
  observeReveal();
});
