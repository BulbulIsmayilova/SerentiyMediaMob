const flagContain = document.getElementById("flagContain");
let flag = true;
let width = window.innerWidth;

const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");
const flag3 = document.getElementById("flag3");
const flagContainFlags = document.querySelectorAll(".flagContain-flags > img")

document.addEventListener("DOMContentLoaded", function () {
  function updateFlagEvents() {
    width = window.innerWidth;

    if (width <= 768) {
      flag1.addEventListener("click", openFlag);
      flag2.addEventListener("click", openFlag);
      flag3.addEventListener("click", openFlag);
      flag1.removeEventListener("mouseover", hoverOpenFlag)
      flag2.removeEventListener("mouseover", hoverOpenFlag)
      flag3.removeEventListener("mouseover", hoverOpenFlag)
      flagContain.removeEventListener("mouseleave", function(){
        flagContain.style.display = "none"
      })
    } else {
      flag1.removeEventListener("click", openFlag);
      flag2.removeEventListener("click", openFlag);
      flag3.removeEventListener("click", openFlag);
      flag1.addEventListener("mouseover", () => hoverOpenFlag(0))
      flag2.addEventListener("mouseover", () => hoverOpenFlag(1))
      flag3.addEventListener("mouseover", () => hoverOpenFlag(2))
      flagContain.addEventListener("mouseleave", function(){
        flagContain.style.display = "none"
      })
    }
  }
  updateFlagEvents();
  window.addEventListener("resize", updateFlagEvents);
});

const openFlag = () => {
  if (flag) {
    flagContain.style.display = "block";
  } else {
    flagContain.style.display = "none";
  }
  flag = !flag;
};

let flagArr = ['flag1.svg', 'flag2.svg', 'flag3.svg']
let flagActiveArr = ['active1.png','active1.png','active1.png']

const hoverOpenFlag = (index) => {
  for (let i = 0; i < flagContainFlags.length; i++) {
    if(i == index){
      flagContainFlags[i].src = `assets/img/${flagActiveArr[i]}`
    }else{
      flagContainFlags[i].src = `assets/img/${flagArr[i]}`
    }
  }
  flagContain.style.display = "block"
}