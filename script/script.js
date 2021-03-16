let header = document.querySelector(".header"),
    burger = document.querySelector(".mobile-header_burger"),
    burgerLines = document.querySelectorAll(".mobile-header_burger-line");

burger.addEventListener("click", () => {
  for (let line of burgerLines) {
    line.classList.toggle("mobile-header_burger-line-bg");
  }
  header.classList.toggle("header-active");
  burger.classList.toggle("burger-active");
  if (window.matchMedia("(max-width: 910px)").matches) {
    document.body.classList.toggle("scroll-hidden");
  }
})

// Сделать анимацию нажатия бургера
// Возможно сделать меньше минимальную ширину