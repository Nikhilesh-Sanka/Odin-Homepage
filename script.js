function firingInViewEvent(elementsArray) {
  document.addEventListener("scroll", () => {
    elementsArray.forEach((element) => {
      let boundRect = element.getBoundingClientRect();
      if (boundRect.top < window.innerHeight && boundRect.bottom > 0) {
        element.dispatchEvent(new CustomEvent("inView"));
      }
    });
  });
}
let elementArray = Array.from(document.querySelectorAll(".project"));
firingInViewEvent(elementArray);
elementArray.forEach((element) => {
  element.addEventListener("inView", () => {
    element.classList.add("rotate-and-enter");
  });
});
window.onload = () => {
  elementArray.forEach((element) => {
    let boundRect = element.getBoundingClientRect();
    if (boundRect.top < window.innerHeight && boundRect.bottom > 0) {
      element.classList.add("rotate-and-enter");
    }
  });
};
