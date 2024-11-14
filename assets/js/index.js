const flagContain = document.getElementById("flagContain");
let flag = true;
let width = window.innerWidth;

const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");
const flag3 = document.getElementById("flag3");
const flagContainFlags = document.querySelectorAll(".flagContain-flags > img")

document.addEventListener("DOMContentLoaded", function () {
  function openFlagClick0() { openFlag(0); }
  function openFlagClick1() { openFlag(1); }
  function openFlagClick2() { openFlag(2); }

  function hoverFlag0() { hoverOpenFlag(0); }
  function hoverFlag1() { hoverOpenFlag(1); }
  function hoverFlag2() { hoverOpenFlag(2); }

  function hideFlagContain() {
    flagContain.style.display = "none";
  }

  function updateFlagEvents() {
    width = window.innerWidth;

    if (width <= 768) {
      flag1.addEventListener("click", openFlagClick0);
      flag2.addEventListener("click", openFlagClick1);
      flag3.addEventListener("click", openFlagClick2);

      flag1.removeEventListener("mouseover", hoverFlag0);
      flag2.removeEventListener("mouseover", hoverFlag1);
      flag3.removeEventListener("mouseover", hoverFlag2);
      flagContain.removeEventListener("mouseleave", hideFlagContain);
    } else {
      flag1.removeEventListener("click", openFlagClick0);
      flag2.removeEventListener("click", openFlagClick1);
      flag3.removeEventListener("click", openFlagClick2);

      flag1.addEventListener("mouseover", hoverFlag0);
      flag2.addEventListener("mouseover", hoverFlag1);
      flag3.addEventListener("mouseover", hoverFlag2);
      flagContain.addEventListener("mouseleave", hideFlagContain);
    }
  }

  updateFlagEvents();
  window.addEventListener("resize", updateFlagEvents);
});

const openFlag = (index) => {
  if (flag) {
    for (let i = 0; i < flagContainFlags.length; i++) {
      if(i == index){
        flagContainFlags[i].src = `assets/img/${flagActiveArr[i]}`
      }else{
        flagContainFlags[i].src = `assets/img/${flagArr[i]}`
      }
    }
    flagContain.style.display = "block";
  } else {
    flagContain.style.display = "none";
  }
  flag = !flag;
};

let flagArr = ['flag1.svg', 'flag2.svg', 'flag3.svg']
let flagActiveArr = ['active1.png','active1.png','active1.png']

const hoverOpenFlag = (index) => {
  if(width <= 768) return
  for (let i = 0; i < flagContainFlags.length; i++) {
    if(i == index){
      flagContainFlags[i].src = `assets/img/${flagActiveArr[i]}`
    }else{
      flagContainFlags[i].src = `assets/img/${flagArr[i]}`
    }
  }
  flagContain.style.display = "block"
}