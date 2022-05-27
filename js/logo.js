const item = document.querySelector(".logo");

item.animate(
  [{ transform: "translateX(-1.2rem)" }, { transform: "translateY(0rem)" }],
  {
    duration: 3500,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);
