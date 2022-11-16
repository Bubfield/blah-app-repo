export const carousel = () => {
  const buttons = document.querySelectorAll("[data-carousel-button]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");

      const middleSlide = slides.querySelector("[data-middle]");
      const leftMiddleSlide = slides.querySelector("[data-leftmiddle]");
      const rightMiddleSlide = slides.querySelector("[data-rightmiddle]");
      const leftSlide = slides.querySelector("[data-left]");
      const rightSlide = slides.querySelector("[data-right]");
      let newIndex = [...slides.children].indexOf(middleSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      slides.children[newIndex].dataset.middle = true;
      if (offset > 0) {
        rightSlide.style.zIndex = "2";
        rightMiddleSlide.style.zIndex = "3";
        leftMiddleSlide.style.zIndex = "1";
        leftSlide.style.zIndex = "0";
        middleSlide.style.zIndex = "2";
        middleSlide.dataset.leftmiddle = true;
        leftMiddleSlide.dataset.left = true;
        leftSlide.dataset.right = true;
        rightSlide.dataset.rightmiddle = true;
        delete leftMiddleSlide.dataset.leftmiddle;
        delete rightMiddleSlide.dataset.rightmiddle;
        delete leftSlide.dataset.left;
        delete rightSlide.dataset.right;
      } else {
        rightSlide.style.zIndex = "-1";
        leftSlide.style.zIndex = "1";
        leftMiddleSlide.style.zIndex = "3";
        middleSlide.style.zIndex = "2";
        rightMiddleSlide.style.zIndex = "1";
        setTimeout(() => {
          rightSlide.style.zIndex = "1";
          leftSlide.style.zIndex = "2";
        }, 1000);
        middleSlide.dataset.rightmiddle = true;
        rightMiddleSlide.dataset.right = true;
        rightSlide.dataset.left = true;
        leftSlide.dataset.leftmiddle = true;
        delete rightMiddleSlide.dataset.rightmiddle;
        delete leftMiddleSlide.dataset.leftmiddle;
        delete rightSlide.dataset.right;
        delete leftSlide.dataset.left;
      }
      delete middleSlide.dataset.middle;
    });
  });
};
