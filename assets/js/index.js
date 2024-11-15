const flagContain = document.getElementById("flagContain");
let flag = true;
let width = window.innerWidth;
const borderBottom = document.getElementById("border-bottom")

const data = [
  [
    {
      name : "Святой источник",
      href : "https://serenity-group.ru/promo/ya_svyatoiist"
    },
    {
      name : "Крутой Окер",
      href : "https://serenity-group.ru/promo/yandexplus_krutoyoker"
    },
    {
      name : "Геркулес",
      href : "https://serenity-group.ru/promo/yandexplus_rusprod"
    },
    {
      name : "Фреш Бар",
      href : "https://serenity-group.ru/promo/ya_freshbar"
    },
    {
      name : "Росинка",
      href : "https://serenitymedia.ru/promo/ya_rosinka/"
    },
    {
      name : "Barinoff",
      href : "https://serenity-group.ru/promo/ya_barinoff"
    },
    {
      name : "Фрутилад",
      href : "https://frutilad.promo/"
    },
    {
      name : "Сапсан",
      href : "https://serenity-group.ru/promo/ya_sapsan"
    },
    {
      name : "Айсберри Филевское",
      href : "https://serenity-group.ru/promo/ya_iceberryfilevskoe"
    },
    {
      name : "Айсберри Как раньше",
      href : "https://serenity-group.ru/promo/ya_iceberrykakranshe"
    },
    {
      name : "Русский продукт Великий устюг",
      href : "https://serenitymedia.ru/promo/ya_gercules"
    },
  ],
  [
    {
      name : "Coca-Cola",
      href : "https://serenitymedia.uz/promo/coca-cola_ny25/"
    },
    {
      name : "Alpen Gold",
      href : "https://alpengold-promo.me/"
    }
  ],
  [
    {
      name : "Galmart",
      href : "https://serenitymedia.ru/promo/ya_galmart/"
    },
    {
      name : "Alpen Gold",
      href : "https://alpengold-promo.me/"
    }
  ]
]

const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");
const flag3 = document.getElementById("flag3");
const flag4 = document.getElementById("flag4");
const flagContainFlags = document.querySelectorAll(".flagContain-flags > img")

document.addEventListener("DOMContentLoaded", function () {
  function openFlagClick0() { openFlag(0); }
  function openFlagClick1() { openFlag(1); }
  function openFlagClick2() { openFlag(2); }
  function openFlagClick3() { openFlag(3); }

  function hoverFlag0() { hoverOpenFlag(0); }
  function hoverFlag1() { hoverOpenFlag(1); }
  function hoverFlag2() { hoverOpenFlag(2); }
  function hoverFlag3() { hoverOpenFlag(3); }

  function hideFlagContain() {
    flagContain.style.display = "none";
  }

  function updateFlagEvents() {
    width = window.innerWidth;

    if (width <= 768) {
      flag1.addEventListener("click", openFlagClick0);
      flag2.addEventListener("click", openFlagClick1);
      flag3.addEventListener("click", openFlagClick2);
      flag4.addEventListener("click", openFlagClick3);

      flag1.removeEventListener("mouseover", hoverFlag0);
      flag2.removeEventListener("mouseover", hoverFlag1);
      flag3.removeEventListener("mouseover", hoverFlag2);
      flag4.removeEventListener("mouseover", hoverFlag3);
      flagContain.removeEventListener("mouseleave", hideFlagContain);
    } else {
      flag1.removeEventListener("click", openFlagClick0);
      flag2.removeEventListener("click", openFlagClick1);
      flag3.removeEventListener("click", openFlagClick2);
      flag4.removeEventListener("click", openFlagClick3);

      flag1.addEventListener("mouseover", hoverFlag0);
      flag2.addEventListener("mouseover", hoverFlag1);
      flag3.addEventListener("mouseover", hoverFlag2);
      flag4.addEventListener("mouseover", hoverFlag3);
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
        flagContainFlags[i].classList.remove("gray")
      }else{
        flagContainFlags[i].classList.add("gray")
      }
    }
    flagContain.style.display = "block";
  } else {
    flagContain.style.display = "none";
  }
  flag = !flag;
  changeContent(index)
};

const hoverOpenFlag = (index) => {
  for (let i = 0; i < flagContainFlags.length; i++) {
    if(i == index){
      flagContainFlags[i].classList.remove("gray")
    }else{
      flagContainFlags[i].classList.add("gray")
    }
  }
  flagContain.style.display = "block"
  changeContent(index)
}

const changeContent = (index) => {
  if(index === 3) return
  let arr = data[index]
  let kod = ''

  arr.map(item => {
    return kod += `<li>
                    <div>
                      <a target="_blank" href='${item.href}'>${item.name}</a>
                      <div></div>
                    </div>
                  </li>`
  })
  borderBottom.innerHTML = kod
}