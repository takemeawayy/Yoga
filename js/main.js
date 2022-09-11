
const itemsMonthly = document.getElementsByClassName('plan_item monthly');
const planItem = document.querySelector(".plan_item")
const itemsYearly = document.getElementsByClassName('plan_item yearly');

const heightHandle = (arr) => {

  const arrLength = arr.length;

  if (window.innerWidth >= 993) {
    if (arrLength <= 3) {
      planWrap.style.height = `${planItem.offsetHeight}px`;
    } else if (arrLength > 3 && arrLength <= 6) {
      planWrap.style.height = `${planItem.offsetHeight * 2}px`;
    } else if (arrLength > 6 && arrLength <= 9) {
      planWrap.style.height = `${planItem.offsetHeight * 3}px`;
    }
  } else if (window.innerWidth >= 769 && window.innerWidth < 993) {
    if (arrLength <= 2) {
      planWrap.style.height = `${planItem.offsetHeight}px`;
    } else if (arrLength > 2 && arrLength <= 4) {
      planWrap.style.height = `${planItem.offsetHeight * 2}px`;
    } else if (arrLength > 4 && arrLength <= 6) {
      planWrap.style.height = `${planItem.offsetHeight * 3}px`;
    }
  } else if (window.innerWidth < 769) {
      planWrap.style.height = `${planItem.offsetHeight * arrLength}px`;
    }
}

window.addEventListener('load', () => heightHandle(itemsMonthly))
window.addEventListener('resize', () => switchEl.checked ? heightHandle(itemsYearly) : heightHandle(itemsMonthly) )

/* Switch */

const switchEl = document.querySelector(".check");
const planWrap = document.querySelector(".plan_items_wrap");

const planChange = () => {
  const timeYearly = document.querySelector(".plan_time.yearly")
  const timeMonthly = document.querySelector(".plan_time.monthly")

  if (switchEl.checked === true) {
    planWrap.classList.remove("monthly");
    planWrap.classList.add("yearly");
    timeYearly.classList.add("active")
    timeMonthly.classList.remove('active')

    heightHandle(itemsYearly);
  } else {

    planWrap.classList.add("monthly");
    planWrap.classList.remove("yearly");
    timeYearly.classList.remove("active")
    timeMonthly.classList.add('active')


    heightHandle(itemsMonthly);
  }
}

switchEl.addEventListener("click", () => planChange())


/* Burger */

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav')

const burgerClick = () => {
  burger.classList.toggle('open')
  nav.classList.toggle('open')
}

burger.addEventListener('click', () => burgerClick());


/* Swipers */

const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },

  breakpoints: {
    1110: {
      slidesPerView: 4
    },
    722: {
      slidesPerView: 3
    },
    482: {
      slidesPerView: 2
    }
  }
});

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-unique2",
    prevEl: ".swiper-button-prev-unique2",
  },
});
