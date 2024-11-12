const flagContain = document.getElementById("flagContain");
let flag = true;
let width = window.innerWidth;

const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");
const flag3 = document.getElementById("flag3");

document.addEventListener("DOMContentLoaded", function () {
  function updateFlagEvents() {
    width = window.innerWidth;

    if (width <= 768) {
      flag1.addEventListener("click", openFlag);
      flag2.addEventListener("click", openFlag);
      flag3.addEventListener("click", openFlag);
    } else {
      flag1.removeEventListener("click", openFlag);
      flag2.removeEventListener("click", openFlag);
      flag3.removeEventListener("click", openFlag);
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
