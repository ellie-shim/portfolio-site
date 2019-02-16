const nav = document.querySelector('.header__nav');
const goTop = document.querySelector('.go-top');

// 스크롤 시 헤더 스타일 추가
document.addEventListener("scroll", () => {
  let top = window.pageYOffset;
  if(top < 60){
    nav.classList.remove("header__nav-scroll_on")
  }else{
    nav.classList.add("header__nav-scroll_on")
  }
})

// go top 버튼 class 추가
goTop.addEventListener("mouseenter", () => {
  goTop.classList.add('go-top-hover')
})
goTop.addEventListener('mouseleave', () => {
  goTop.classList.remove('go-top-hover')
})

// go top버튼 클릭시 스크롤 최상단으로 이동
goTop.addEventListener('click', () => {
  window.scrollTo(0,0)
})