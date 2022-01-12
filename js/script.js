const main = (() => {
  const burger = document.querySelector(".burger");
  const cross = document.querySelector(".cross");
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    body.classList.add("pushed");
  });

  cross.addEventListener("click", () => {
    body.classList.remove("pushed");
  });
})();
