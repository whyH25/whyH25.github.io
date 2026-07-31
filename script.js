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
    meta: '2026.06 · 2인 팀 프로젝트',
    tags: ['Spring Boot 3', 'Vue 3', 'MySQL', 'OpenAI GPT-4o', 'Google STT/TTS'],
    desc:
      '1:1 구조에 머무는 기존 AI 면접 서비스와 달리, 복수의 AI 면접관 페르소나와 AI 경쟁 지원자가 함께하는 실전형 면접 연습 플랫폼입니다. 회원 인증(일반/구글 소셜 로그인, 이메일 인증, 비밀번호 찾기, 회원탈퇴), 면접방 생성 및 진행 로직(페르소나·프롬프트·응답 저장), STT 연동 및 영어 면접 기능, 피드백 리포트 생성·이메일 발송, 배포 대응을 담당했습니다.',
    github: 'https://github.com/whyH25/dada',
  },
  zipzip: {
    thumb: 'Zipzip',
    image: 'img/zipzip_home.png',
    title: '부동산 중개 웹 서비스 · Zipzip',
    meta: '2024.04 - 2024.05 (6주) · 5인 팀 프로젝트',
    tags: ['Spring Boot', 'Spring Security', 'Oracle DB', 'MyBatis', 'Kakao Map API'],
    desc:
      '매물 등록/조회/필터링과 커뮤니티 기능을 갖춘 부동산 중개 서비스입니다. 사용자 페이지의 자유게시판 CRUD(CKEditor5, 추천, 댓글·대댓글, 자동 스크롤), 중개인 페이지의 매물 CRUD(주소 API, 카카오맵 마커, 다중 첨부파일, DatePicker), 그리고 메인 화면 프론트엔드를 직접 개발했습니다.',
    github: 'https://github.com/whyH25/zipzip',
  },
  board: {
    thumb: 'Board CRUD',
    image: 'img/JSP게시판_home.png',
    title: '게시판 웹 서비스 · Board CRUD',
    meta: '2024.01 (1주) · 개인 프로젝트',
    tags: ['JSP', 'Servlet', 'Spring Framework', 'Oracle DB'],
    desc:
      'JSP/Servlet으로 구현한 게시판 미니 프로젝트입니다. 로그인, 회원가입, 회원정보 수정, 마이페이지, 게시판 CRUD(댓글·대댓글 포함)를 혼자 설계하고 구현했습니다.',
    github: 'https://github.com/whyH25/miniPro1',
  },
  sistagram: {
    thumb: 'Sistagram',
    image: 'img/sistagram_home.png',
    title: '인스타그램 클론 코딩 · Sistagram',
    meta: '2024.03 (10일) · 개인 프로젝트',
    tags: ['Spring', 'MyBatis', 'Oracle DB'],
    desc:
      '인스타그램을 벤치마킹한 SNS 클론 코딩 프로젝트입니다. 회원가입/로그인(이메일 인증, 아이디·비밀번호 찾기), 마이페이지(회원정보 수정, 팔로우/팔로잉 관리), 게시글 작성·수정·삭제, 좋아요, 댓글 및 태그를 통한 대댓글, 회원 검색 기능을 혼자 설계하고 구현했습니다.',
    github: 'https://github.com/whyH25/sistagram',
  },
};

const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalThumb = document.getElementById('modalThumb');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalTags = document.getElementById('modalTags');
const modalDesc = document.getElementById('modalDesc');
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
  modalDesc.textContent = data.desc;

  modalTags.innerHTML = '';
  data.tags.forEach((tag) => {
    const span = document.createElement('span');
    span.textContent = tag;
    modalTags.appendChild(span);
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
