"use strict";
// fetch('https://mystormnet.site/api/get_products_list/')
// .then((res) => res.json())
// .then((data) => {
//     const filters = data.results.filter((element, index) => {
//         if(index < 5) {
//             return element
//         }
//     })

//     const imgMain = document.querySelector('.img__main')
//     imgMain.setAttribute('src', filters[0].image_prev)

//     for(let l of filters) {
//         const tag = document.createElement('img')
//         const path = l.image_prev
//         const imgAdd = document.querySelector('.img__add')
//         tag.setAttribute('src', path)
//         tag.classList.add('img')
//         imgAdd.append(tag)
//         tag.addEventListener('click', function (event) {
//             imgMain.setAttribute('src', tag.getAttribute('src'))
//         })
//     }
// })

const img = document.querySelectorAll(".img");
const imgMain = document.querySelector(".img__main");
for (let app of img) {
  app.addEventListener("click", function (event) {
    const img = event.target;
    img.getAttribute("src");
    imgMain.setAttribute("src", img.getAttribute("src"));
  });
}

const imgAdd = document.querySelector(".img__add");
const widthAllElements =
  img[0].clientWidth * img.length + 20 * (img.length - 1);

const vectorLeft = document.querySelector(".vector__left");
const vectorRight = document.querySelector(".vector__right");
let saveTranslate = 0;


vectorLeft.addEventListener("click", function (event) {
  console.log(saveTranslate);
  console.log(saveTranslate <= widthAllElements)
  if (saveTranslate >= 0) {
    saveTranslate = 0
  }
  else {
    saveTranslate += (img[0].clientWidth + 20) * 5;
    imgAdd.style.transform = `translateX(${saveTranslate}px)`;
  }
});


vectorRight.addEventListener("click", function (event) {
  // saveTranslate -= img[0].clientWidth + 20;
  console.log(saveTranslate)
  console.log(saveTranslate <= -widthAllElements)
  // imgAdd.style.transform = `translateX(${saveTranslate}px)`;
  if (saveTranslate <= (-widthAllElements + (img[0].clientWidth +20) * 5)) {}
  else {
    saveTranslate -= (img[0].clientWidth + 20) * 5;
    imgAdd.style.transform = `translateX(${saveTranslate}px)`;
  }
});
