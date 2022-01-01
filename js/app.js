// let value = prompt('Оцените портфолио сайт от 1 до 10 баллов');
// 五条悟 (Front-end developer)
// Function with global
const { footer_input, navbar, hamburger_menu, links, filter_btns, skills_wrap, skills_bars, records_wrap, records_numbers } = newFunction_while();
// newFunction_while code start
function newFunction_while() {
  const filter_btns = document.querySelectorAll(".filter-btn");
  const skills_wrap = document.querySelector(".skills");
  const skills_bars = document.querySelectorAll(".skill-progress");
  const records_wrap = document.querySelector(".records");
  const records_numbers = document.querySelectorAll(".number");
  const footer_input = document.querySelector(".footer-input");
  const hamburger_menu = document.querySelector(".hamburger-menu");
  const navbar = document.querySelector("header nav");
  const links = document.querySelectorAll(".links a");
  return { footer_input, navbar, hamburger_menu, links, filter_btns, skills_wrap, skills_bars, records_wrap, records_numbers };
}
// Footer code JS
footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});
// Menu function code 
function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

// hamgurber_menu code start
hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

// filter_btns code start
filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
  skillsEffect();
  countUp();
});
// CheckScroll code
function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}
// My skillsEffect
function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}
// bruh i am so tired 
function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 100;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      } else {
        numb.innerText = maxNum;
      }
    };

    setTimeout(updateCount, 400);
  });
}
// it's my Swiper
let mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

// SOCIAL PANEL JS
const { floating_btn, social_panel_container, close_btn } = newFunction_Js();

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

function newFunction_Js() {
  const floating_btn = document.querySelector('.floating-btn');
  const close_btn = document.querySelector('.close-btn');
  const social_panel_container = document.querySelector('.social-panel-container');
  return { floating_btn, social_panel_container, close_btn };
}
// yeee it's finally code Js 