// Theme toggle (persisted in localStorage)
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Project modal
const projectData = {
  interviewai: {
    thumb: 'InterviewAI',
    image: 'img/dada_home1.png',
    title: '다대다(多:多) AI 면접 시뮬레이션 · InterviewAI',
    meta: '2026.06 (4주) · 2인 팀 프로젝트',
    tags: ['Spring Boot 3', 'Vue 3', 'MySQL', 'OpenAI GPT-4o', 'Google STT/TTS'],
    background:
      '기존 AI 면접 서비스 대부분이 1:1 구조에 머물러 있어 실제 기업 면접의 압박감을 연습하기 어렵다는 문제의식에서 출발한 프로젝트입니다. 여러 명의 AI 면접관과 AI 경쟁 지원자가 함께 참여하는 다대다(多:多) 면접 시뮬레이션을 통해, 실전과 가까운 환경에서 면접을 연습할 수 있는 서비스를 목표로 기획했습니다.',
    features: [
      '회원가입/로그인(이메일·소셜), 이력서·자기소개서·포트폴리오 등록',
      '회사/직무/난이도, 면접관·지원자 인원을 선택하는 면접 설정',
      '이력서 기반 맞춤 질문 생성, AI 면접관·경쟁 지원자 페르소나 생성',
      '음성 답변 STT 변환, 이전 답변 맥락을 기억하는 꼬리 질문 생성',
      '면접 종료 후 정성·정량 평가와 시각화 리포트 제공',
    ],
    role:
      '회원 인증(일반/구글 소셜 로그인, 이메일 인증, 비밀번호 찾기, 회원탈퇴), 면접방 생성 및 진행 로직(페르소나·프롬프트·응답 저장), STT 연동 및 영어 면접 기능, 피드백 리포트 생성·이메일 발송, 배포 대응을 담당했습니다.',
    gallery: [
      'img/dada_home1.png',
      'img/dada_home2.png',
      'img/dada_login.png',
      'img/dada_crud.png',
      'img/dada_reportlist.png',
      'img/dada_reportdetail1.png',
      'img/dada_reportdatail2.png',
      'img/dada_reportdetail3.png',
    ],
    github: 'https://github.com/whyH25/dada',
  },
  zipzip: {
    thumb: 'Zipzip',
    image: 'img/zipzip_home.png',
    title: '부동산 중개 웹 서비스 · Zipzip',
    meta: '2024.04 - 2024.05 (5주) · 5인 팀 프로젝트',
    tags: ['Spring Boot', 'Spring Security', 'Oracle DB', 'MyBatis', 'Kakao Map API'],
    background:
      '매물 정보와 커뮤니티 기능을 한 곳에서 제공하는 부동산 중개 플랫폼을 목표로 5인 팀이 5주간 진행한 프로젝트입니다. 사용자는 자유게시판에서 정보를 나누고, 중개인은 지도 기반으로 매물을 손쉽게 등록·관리할 수 있도록 기획했습니다.',
    features: [
      '사용자 메인 페이지 자유게시판 CRUD (CKEditor5 에디터)',
      '게시글 추천 및 댓글·대댓글, 자동 스크롤/페이지 이동',
      '중개인 페이지 매물 등록·수정·삭제 및 리스트/모달 상세',
      '매물 등록 시 주소 API 연동, 카카오맵 마커 표시, 다중 첨부파일',
    ],
    role:
      '사용자 페이지의 자유게시판 CRUD(CKEditor5, 추천, 댓글·대댓글, 자동 스크롤), 중개인 페이지의 매물 CRUD(주소 API, 카카오맵 마커, 다중 첨부파일, DatePicker), 그리고 메인 화면 프론트엔드를 직접 개발했습니다.',
    gallery: ['img/zipzip_home.png', 'img/zipzip_main.png'],
    github: 'https://github.com/whyH25/zipzip',
  },
  board: {
    thumb: 'Board CRUD',
    image: 'img/JSP게시판_home.png',
    title: '게시판 웹 서비스 · Board CRUD',
    meta: '2024.02 (3일) · 개인 프로젝트',
    tags: ['JSP', 'Servlet', 'Spring Framework', 'Oracle DB'],
    background:
      'JSP/Servlet 기반 MVC 구조를 직접 손으로 구현하며 웹 요청 처리 흐름을 익히기 위해 진행한 개인 미니 프로젝트입니다. 프레임워크 도움 없이 로그인부터 게시판 CRUD까지 전체 흐름을 3일간 혼자 설계하고 구현했습니다.',
    features: [
      '로그인/회원가입, DB 값 검증, 아이디·비밀번호 찾기',
      '로그인 시 쿠키(Cookie) 생성 및 인증 처리',
      '마이페이지 - 회원정보 조회/수정, 본인 게시글 조회',
      '게시판 CRUD - 회원만 글쓰기, 본인 글 수정·삭제, 댓글·대댓글',
    ],
    gallery: ['img/JSP게시판_home.png', 'img/JSP게시판_login.png', 'img/JSP게시판_detail.png'],
    github: 'https://github.com/whyH25/miniPro1',
  },
  sistagram: {
    thumb: 'Sistagram',
    image: 'img/sistagram_home.png',
    title: '인스타그램 클론 코딩 · Sistagram',
    meta: '2024.03 (10일) · 개인 프로젝트',
    tags: ['Spring', 'MyBatis', 'Oracle DB'],
    background:
      '인스타그램을 벤치마킹한 SNS 클론 코딩 프로젝트입니다. 회원 인증부터 팔로우, 피드, 댓글까지 SNS의 핵심 플로우를 처음부터 끝까지 직접 설계해보기 위해 개인 프로젝트로 10일간 진행했습니다.',
    features: [
      '로그인/회원가입 - DB 값 중복 체크, 아이디·비밀번호 찾기(이메일 인증)',
      '로그인 시 쿠키(Cookie) 생성',
      '마이페이지 - 회원정보 조회/수정, 본인 게시글 조회, 팔로우/팔로잉 관리',
      '게시글 작성·수정·삭제, 좋아요, 댓글 및 태그를 통한 대댓글',
      '회원 검색',
    ],
    gallery: ['img/sistagram_home.png', 'img/sistagram_login.png', 'img/sistagram_detail.png'],
    github: 'https://github.com/whyH25/sistagram',
  },
};

const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalThumb = document.getElementById('modalThumb');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalTags = document.getElementById('modalTags');
const modalBackground = document.getElementById('modalBackground');
const modalFeatures = document.getElementById('modalFeatures');
const modalRoleSection = document.getElementById('modalRoleSection');
const modalRole = document.getElementById('modalRole');
const modalGallery = document.getElementById('modalGallery');
const modalLinks = document.getElementById('modalLinks');

function openProjectModal(id) {
  const data = projectData[id];
  if (!data) return;

  if (data.image) {
    modalThumb.innerHTML = '';
    const img = document.createElement('img');
    img.src = data.image;
    img.alt = data.title;
    modalThumb.appendChild(img);
  } else {
    modalThumb.textContent = data.thumb;
  }
  modalTitle.textContent = data.title;
  modalMeta.textContent = data.meta;
  modalBackground.textContent = data.background;

  modalTags.innerHTML = '';
  data.tags.forEach((tag) => {
    const span = document.createElement('span');
    span.textContent = tag;
    modalTags.appendChild(span);
  });

  modalFeatures.innerHTML = '';
  (data.features || []).forEach((feature) => {
    const li = document.createElement('li');
    li.textContent = feature;
    modalFeatures.appendChild(li);
  });

  if (data.role) {
    modalRoleSection.hidden = false;
    modalRole.textContent = data.role;
  } else {
    modalRoleSection.hidden = true;
  }

  modalGallery.innerHTML = '';
  (data.gallery || []).forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = data.title + ' 화면';
    img.loading = 'lazy';
    modalGallery.appendChild(img);
  });

  modalLinks.innerHTML = '';
  if (data.github) {
    const link = document.createElement('a');
    link.href = data.github;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'GitHub →';
    modalLinks.appendChild(link);
  }

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('click', () => openProjectModal(card.dataset.project));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openProjectModal(card.dataset.project);
    }
  });
});

modalClose.addEventListener('click', closeProjectModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeProjectModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeProjectModal();
});

// Scroll reveal animation
const revealTargets = document.querySelectorAll(
  '.section-title, .about-grid, .skill-card, .project-card, .contact-desc, .contact-links'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => observer.observe(el));
