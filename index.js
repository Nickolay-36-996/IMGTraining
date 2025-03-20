"use strict";
fetch('https://mystormnet.site/api/get_products_list/')
.then((res) => res.json())
.then((data) => {
    const filters = data.results.filter((element, index) => {
        if(index < 5) {
            return element
        }
    })

    const imgMain = document.querySelector('.img__main')
    imgMain.setAttribute('src', filters[0].image_prev)
   
    for(let l of filters) {
        const tag = document.createElement('img')
        const path = l.image_prev
        const imgAdd = document.querySelector('.img__add')
        tag.setAttribute('src', path)
        tag.classList.add('img')
        imgAdd.append(tag)
        tag.addEventListener('click', function (event) {
            imgMain.setAttribute('src', tag.getAttribute('src'))
        })
    }
})


// const img = document.querySelectorAll(".img");
// const imgMain = document.querySelector(".img__main");
// for (let app of img) {
//   app.addEventListener("click", function (event) {
//     const img = event.target;
//     img.getAttribute("src");
//     imgMain.setAttribute("src", img.getAttribute('src'));
//   });
// }