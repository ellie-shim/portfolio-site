import Typed from "typed.js";

const nav = document.querySelector(".header__nav");
const goTop = document.querySelector(".go-top");
const projectWrap = document.querySelector(".project__wrap__control");
const projectWrapBtn = document.querySelector(".project__wrap__toggle-btn");

// 프로젝트 더보기 버튼 활성화/비활성화

projectWrapBtn.addEventListener("click", () => {
  if (projectWrapBtn.value === "off") {
    projectWrapBtn.textContent = "프로젝트 닫기";
    projectWrap.classList.add("act");
    projectWrapBtn.value = "on";
  } else if (projectWrapBtn.value === "on") {
    projectWrapBtn.textContent = "프로젝트 더보기";
    projectWrap.classList.remove("act");
    projectWrapBtn.value = "off";
  }
});

// 스크롤 시 nav에 스티키 추가  : 모바일에서 작동이 안돼서 자바스크립트로 구현..
const welcomeEl = document.querySelector(".welcome");
document.addEventListener("scroll", () => {
  let point = welcomeEl.clientHeight - 135;
  let top = window.pageYOffset;
  if (top < point) {
    nav.classList.remove("header__nav-sticky_on");
  } else {
    nav.classList.add("header__nav-sticky_on");
  }
});

document.addEventListener("scroll", () => {
  let point = welcomeEl.clientHeight;
  let top = window.pageYOffset;
  if (top < point) {
    goTop.classList.remove("go-top--on");
  } else {
    goTop.classList.add("go-top--on");
  }
});

// go top 버튼 class 추가
goTop.addEventListener("mouseenter", () => {
  goTop.classList.add("go-top-hover");
});
goTop.addEventListener("mouseleave", () => {
  goTop.classList.remove("go-top-hover");
});

// go top버튼 클릭시 스크롤 최상단으로 이동
goTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// 첫 화면 텍스트 타이핑 이펙트
const options = {
  strings: ["HTML5", "CSS3", "JavaScript", "JQuery", "Sass", "React"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  cursorChar: "_"
};

const typed = new Typed("#typing__skill", options);
