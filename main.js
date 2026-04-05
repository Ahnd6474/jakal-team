// ===== LOGO URLS =====
const LOGOS = {
  'jakal-flow': 'https://raw.githubusercontent.com/Ahnd6474/Jakal-flow/main/logo/jakal-flow.png',
  'jakal-lit':  'https://raw.githubusercontent.com/Ahnd6474/Jakal-flow/main/logo/jakal-lit.png',
  'jakal-work': 'https://raw.githubusercontent.com/Ahnd6474/Jakal-flow/main/logo/jakal-work.png',
};

// ===== I18N =====
const T = {
  ko: {
    'nav-about':       '소개',
    'nav-team':        '팀원',
    'nav-projects':    '프로젝트',
    'nav-contact':     '연락처',
    'hero-title':      '모든 것을 <span class="accent">자동화</span>하여<br />특이점에 기여하기',
    'hero-sub':        'Automating everything to contribute to the singularity',
    'hero-btn-projects': '프로젝트 보기',
    'hero-btn-team':   '팀 소개',
    'hero-scroll':     '스크롤',
    'about-h2':        '우리는 누구인가',
    'about-desc':      'Jakal은 자동화 기술과 AI를 통해 인류의 다음 단계를 앞당기는 팀입니다.<br />반복을 없애고, 지능을 더하고, 미래를 빌드합니다.',
    'stat-projects':   'Projects',
    'stat-members':    'Members',
    'stat-mission':    'Mission',
    'team-h2':         '팀원 소개',
    'member-role':     'Co-Founder & Developer',
    'danny-desc':      '자동화 시스템 설계와 AI 통합을 담당합니다. Jakal Series의 핵심 아키텍처를 이끌고 있습니다.',
    'albert-desc':     '프론트엔드 및 시스템 통합을 담당합니다. 사용자 경험과 자동화 파이프라인 구축에 집중합니다.',
    'projects-h2':     '프로젝트',
    'projects-hint':   '카드를 클릭하면 상세 정보를 확인할 수 있습니다.',
    'filter-all':      '전체',
    'filter-previous': '이전 프로젝트',
    'contact-h2':      '연락하기',
    'contact-desc':    '협업 제안, 문의 사항이 있으시면 언제든지 연락주세요.',
    'contact-note':    '또는 GitHub에서 직접 연락하실 수 있습니다.',
    'footer-copy':     '© 2024 Team Jakal. 모든 것을 자동화하여 특이점에 기여하기.',
    'modal-btn':       'GitHub에서 보기',
  },
  en: {
    'nav-about':       'About',
    'nav-team':        'Team',
    'nav-projects':    'Projects',
    'nav-contact':     'Contact',
    'hero-title':      'Automating <span class="accent">everything</span><br />to reach the singularity',
    'hero-sub':        '모든 것을 자동화하여 특이점에 기여하기',
    'hero-btn-projects': 'View Projects',
    'hero-btn-team':   'Meet the Team',
    'hero-scroll':     'Scroll',
    'about-h2':        'Who We Are',
    'about-desc':      'Jakal is a team accelerating the next stage of humanity through automation and AI.<br />We eliminate repetition, amplify intelligence, and build the future.',
    'stat-projects':   'Projects',
    'stat-members':    'Members',
    'stat-mission':    'Mission',
    'team-h2':         'Meet the Team',
    'member-role':     'Co-Founder & Developer',
    'danny-desc':      'Leads automation system design and AI integration. Drives the core architecture of the Jakal Series.',
    'albert-desc':     'Handles frontend development and system integration. Focuses on user experience and automation pipeline construction.',
    'projects-h2':     'Projects',
    'projects-hint':   'Click a card to see detailed information.',
    'filter-all':      'All',
    'filter-previous': 'Previous',
    'contact-h2':      'Contact Us',
    'contact-desc':    'Have a collaboration proposal or inquiry? Feel free to reach out anytime.',
    'contact-note':    'Or contact us directly on GitHub.',
    'footer-copy':     '© 2024 Team Jakal. Automating everything to reach the singularity.',
    'modal-btn':       'View on GitHub',
  }
};

let currentLang = localStorage.getItem('jakal-lang') || 'ko';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('jakal-lang', lang);
  document.documentElement.lang = lang;

  // Update toggle button labels
  const label = lang === 'ko' ? 'EN' : 'KO';
  document.querySelectorAll('#langToggle, #langToggleMobile').forEach(el => {
    el.textContent = label;
  });

  // Apply textContent translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });

  // Apply innerHTML translations (for elements with embedded HTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
  });

  // Re-render projects and modal button with new language
  const activeFilter = document.querySelector('.filter-btn.active');
  if (activeFilter) renderProjects(activeFilter.dataset.filter);
}

function toggleLang() {
  applyLang(currentLang === 'ko' ? 'en' : 'ko');
}

// ===== PROJECT DATA =====
const PROJECTS = [
  // ---- Previous Projects ----
  {
    id: 'latte',
    category: 'previous',
    categoryLabel: { ko: '이전 프로젝트', en: 'Previous' },
    icon: '☕',
    iconBg: 'rgba(245,158,11,0.15)',
    title: 'LATTE',
    shortDesc: {
      ko: '자동화 기반의 실험적 응용 프로젝트',
      en: 'Experimental automation-based application project'
    },
    fullDesc: {
      ko: 'LATTE는 Jakal 팀의 초기 실험 프로젝트로, 자동화 파이프라인의 가능성을 탐구한 작업입니다. 반복적인 작업을 코드로 대체하는 워크플로우를 연구하고, 이후 Jakal Series의 기반이 되는 핵심 아이디어들을 도출했습니다.',
      en: 'LATTE is an early experimental project by Team Jakal, exploring the possibilities of automation pipelines. It investigates workflows that replace repetitive tasks with code, and derived the core ideas that became the foundation for the Jakal Series.'
    },
    tags: ['Automation', 'Python', 'Research'],
    url: 'https://github.com/Ahnd6474/LATTE'
  },

  // ---- Jakal Series ----
  {
    id: 'jakal-flow',
    category: 'jakal',
    categoryLabel: { ko: 'Jakal Series', en: 'Jakal Series' },
    logo: LOGOS['jakal-flow'],
    iconBg: 'rgba(99,102,241,0.12)',
    title: 'Jakal-flow',
    shortDesc: {
      ko: 'AI 에이전트 기반 자동화 플로우 엔진',
      en: 'AI agent-based automation flow engine'
    },
    fullDesc: {
      ko: 'Jakal Series의 핵심 엔진입니다. 여러 AI 모델(GPT, Gemini 등)과 자동화 도구를 연결하여 복잡한 작업 흐름을 오케스트레이션합니다. Jakal-flow 위에서 동작하는 다양한 파생 프로젝트들의 기반이 되며, 에이전트 간 통신, 작업 분배, 결과 취합 등을 처리합니다.',
      en: 'The core engine of the Jakal Series. It orchestrates complex workflows by connecting multiple AI models (GPT, Gemini, etc.) and automation tools. It serves as the foundation for various derivative projects built on top of Jakal-flow, handling inter-agent communication, task distribution, and result aggregation.'
    },
    tags: ['AI Agent', 'Orchestration', 'LLM', 'Python', 'Automation'],
    url: 'https://github.com/Ahnd6474/Jakal-flow'
  },
  {
    id: 'jakal-chart',
    category: 'jakal',
    categoryLabel: { ko: 'Jakal Series', en: 'Jakal Series' },
    icon: '📈',
    iconBg: 'rgba(245,158,11,0.15)',
    title: 'Jakal-chart',
    shortDesc: {
      ko: 'AI 기반 주식 분석 자동화 시스템',
      en: 'AI-powered automated stock analysis system'
    },
    fullDesc: {
      ko: 'Jakal-flow를 기반으로 주식 시장 데이터를 자동 수집·분석하는 시스템입니다. AI 모델이 차트 패턴, 기술적 지표, 시장 흐름을 분석하고 인사이트를 자동으로 생성합니다. 반복적인 시장 분석 작업을 자동화하여 의사결정 속도를 높입니다.',
      en: 'A system built on Jakal-flow that automatically collects and analyzes stock market data. AI models analyze chart patterns, technical indicators, and market trends to generate insights automatically. Automates repetitive market analysis tasks to accelerate decision-making.'
    },
    tags: ['Stock', 'Finance AI', 'Data Analysis', 'Python'],
    url: 'https://github.com/Ahnd6474/stock_ai'
  },
  {
    id: 'jakal-work',
    category: 'jakal',
    categoryLabel: { ko: 'Jakal Series', en: 'Jakal Series' },
    logo: LOGOS['jakal-work'],
    iconBg: 'rgba(16,185,129,0.12)',
    title: 'Jakal-work',
    shortDesc: {
      ko: 'Jakal 시스템 실험 및 프로토타이핑 공간',
      en: 'Jakal system experimentation and prototyping space'
    },
    fullDesc: {
      ko: '새로운 자동화 아이디어와 AI 통합 방식을 실험하는 샌드박스 저장소입니다. Jakal Series에 추가될 기능들의 프로토타입을 만들고, 다양한 LLM과 자동화 도구의 조합을 테스트합니다. 팀의 R&D 허브 역할을 합니다.',
      en: 'A sandbox repository for experimenting with new automation ideas and AI integration approaches. Prototypes features to be added to the Jakal Series and tests various combinations of LLMs and automation tools. Serves as the team\'s R&D hub.'
    },
    tags: ['Experiment', 'Prototype', 'R&D', 'LLM'],
    url: 'https://github.com/Ahnd6474/experiment'
  },
  {
    id: 'jakal-lit',
    category: 'jakal',
    categoryLabel: { ko: 'Jakal Series', en: 'Jakal Series' },
    logo: LOGOS['jakal-lit'],
    iconBg: 'rgba(139,92,246,0.12)',
    title: 'Jakal-lit',
    shortDesc: {
      ko: 'AI 기반 문헌 자동 수집·정리 시스템',
      en: 'AI-powered automated literature collection and organization'
    },
    fullDesc: {
      ko: '연구 논문, 기술 문서, 웹 콘텐츠를 자동으로 수집하고 AI가 요약·분류하는 시스템입니다. 방대한 정보를 빠르게 소화하고 핵심 인사이트를 추출하는 과정을 자동화합니다. 학습과 리서치에 드는 시간을 극적으로 줄이는 것을 목표로 합니다.',
      en: 'A system that automatically collects research papers, technical documents, and web content, with AI summarizing and categorizing them. Automates the process of rapidly digesting vast amounts of information and extracting key insights. Aims to dramatically reduce time spent on learning and research.'
    },
    tags: ['Literature Review', 'NLP', 'Summarization', 'AI'],
    url: 'https://github.com/Ahnd6474/lit'
  },
  {
    id: 'jakal-hwpx',
    category: 'jakal',
    categoryLabel: { ko: 'Jakal Series', en: 'Jakal Series' },
    icon: '📄',
    iconBg: 'rgba(59,130,246,0.15)',
    title: 'Jakal-hwpx',
    shortDesc: {
      ko: 'HWP/HWPX 문서 자동화 처리 도구',
      en: 'HWP/HWPX document automation processing tool'
    },
    fullDesc: {
      ko: '한글 문서(HWP/HWPX) 형식을 자동으로 파싱·생성·편집하는 도구입니다. 공공기관, 기업 환경에서 반드시 사용해야 하는 HWP 형식의 문서 작업을 코드로 자동화합니다. 보고서 자동 생성, 데이터 추출, 문서 변환 등 다양한 시나리오에 적용 가능합니다.',
      en: 'A tool that automatically parses, generates, and edits Korean HWP/HWPX document formats. Automates document work in HWP format — mandatory in Korean public institutions and enterprises — using code. Applicable to various scenarios including automated report generation, data extraction, and document conversion.'
    },
    tags: ['HWP', 'Document Automation', 'Python', 'Korea'],
    url: 'https://github.com/Ahnd6474/jakal-hwpx'
  },

  // ---- Made with Jakal-flow ----
  {
    id: 'calculator',
    category: 'made',
    categoryLabel: { ko: 'Made with Jakal', en: 'Made with Jakal' },
    icon: '🧮',
    iconBg: 'rgba(245,158,11,0.15)',
    title: 'GPT Calculator',
    shortDesc: {
      ko: 'Jakal-flow + GPT 5.4로 만든 스마트 계산기',
      en: 'Smart calculator built with Jakal-flow + GPT 5.4'
    },
    fullDesc: {
      ko: 'Jakal-flow 시스템과 GPT 5.4 모델을 결합하여 자동 생성한 스마트 계산기 애플리케이션입니다. 단순한 사칙연산을 넘어 AI가 자연어로 된 수식을 이해하고 계산합니다. Made with Jakal-flow 시리즈의 실용적 사례로, AI 코드 생성 능력을 시연합니다.',
      en: 'A smart calculator application automatically generated by combining the Jakal-flow system with the GPT 5.4 model. Beyond simple arithmetic, the AI understands and computes expressions written in natural language. A practical showcase of the Made with Jakal-flow series, demonstrating AI code generation capabilities.'
    },
    tags: ['GPT 5.4', 'Jakal-flow', 'Calculator', 'AI Generated'],
    url: 'https://github.com/Ahnd6474/calculator'
  }
];

// ===== RENDER PROJECT CARDS =====
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = '';
  const lang = currentLang;
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.transitionDelay = `${i * 0.06}s`;
    card.setAttribute('data-category', p.category);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', p.title);

    const iconHtml = p.logo
      ? `<img src="${p.logo}" alt="${p.title}" onerror="this.parentElement.textContent='⚡'" />`
      : p.icon;

    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon" style="background:${p.iconBg}">${iconHtml}</div>
        <div class="card-arrow">&#8599;</div>
      </div>
      <div class="card-category">${p.categoryLabel[lang]}</div>
      <div class="card-title">${p.title}</div>
      <div class="card-desc">${p.shortDesc[lang]}</div>
      <div class="card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `;
    card.addEventListener('click', () => openModal(p));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(p); });
    grid.appendChild(card);
  });

  requestAnimationFrame(() => {
    document.querySelectorAll('#projectGrid .reveal').forEach(el => el.classList.add('visible'));
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
let currentProject = null;

function openModal(p) {
  currentProject = p;
  const lang = currentLang;

  const logoWrap = document.getElementById('modalLogoWrap');
  const logoImg  = document.getElementById('modalLogo');
  if (p.logo) {
    logoImg.src = p.logo;
    logoImg.alt = p.title;
    logoWrap.style.display = 'block';
  } else {
    logoWrap.style.display = 'none';
  }

  document.getElementById('modalBadge').textContent = p.categoryLabel[lang];
  document.getElementById('modalTitle').textContent  = p.title;
  document.getElementById('modalDesc').textContent   = p.fullDesc[lang];
  document.getElementById('modalTags').innerHTML     = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  document.getElementById('modalLink').href          = p.url;
  document.getElementById('modalLink').textContent   = T[lang]['modal-btn'];
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  currentProject = null;
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 20
    ? 'rgba(10,10,15,0.98)'
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
  if (entries[0].isIntersecting) { animateCounters(); statsObserver.disconnect(); }
}, { threshold: 0.5 });
const statsEl = document.querySelector('.about-stats');
if (statsEl) statsObserver.observe(statsEl);

// ===== PARTICLE CANVAS =====
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function rand(a, b) { return Math.random() * (b - a) + a; }

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: rand(0, W || 800), y: rand(0, H || 600),
      vx: rand(-0.3, 0.3), vy: rand(-0.3, 0.3),
      r: rand(1, 2.5), alpha: rand(0.2, 0.6)
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
})();

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  renderProjects('all');
  document.querySelectorAll('.team-card, .stat, .contact-card').forEach(el => el.classList.add('reveal'));
  observeReveal();
});
