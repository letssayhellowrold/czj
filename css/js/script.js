document.addEventListener("DOMContentLoaded", function () {
  // 图片淡入淡出
  const figure = document.getElementById("myFigure");
  window.addEventListener("scroll", function () {
    const { top, bottom } = figure.getBoundingClientRect();
    const isVisible = top < window.innerHeight && bottom > 0;
    figure.classList.toggle("show", isVisible);
    figure.classList.toggle("hide", !isVisible);
  });

  // 按动返回顶部
  const customScrollBtn = document.querySelector(".custom-scroll-btn");

  window.addEventListener("scroll", () => {
    customScrollBtn.style.display = window.scrollY > 1000 ? "block" : "none";
  });
  customScrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
