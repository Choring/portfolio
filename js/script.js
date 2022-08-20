// for (i = 1; i < 8; i++) {
//   var skillTitle = document.getElementById(`a${i}`);
//   skillTitle.addEventListener("click", function (e) {
//     let svg = e.path[1].querySelector("svg");
//     console.log(skillTitle);
//     boom(svg);
//   });
// }

function boom(svg) {
  svg.classList.contains("none")? svg.classList.remove("none"): svg.classList.add("none");
}

const moreBtn = document.querySelector(".moreBtn");

moreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#profile").scrollIntoView({ behavior: "smooth" });
});

const button = () => {
  const burger = document.querySelector(".burger");
  const toggle = document.querySelector(".toggle");

  burger.addEventListener("click", function () {
    burger.classList.toggle("boom");
    toggle.classList.toggle("zero");
  });
};

button();
