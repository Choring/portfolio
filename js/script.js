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

const gitBtn = () => {
  const morebtn = document.querySelector("#morebtn");
  
  window.addEventListener("scroll",function(){
    const nowScroll = window.scrollY;
    
    if(nowScroll > 200){
      morebtn.style.opacity="1";
    } else {
      morebtn.style.opacity="0";
    }
  })
}

gitBtn();