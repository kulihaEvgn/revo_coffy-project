// Не удалять проверка на поддержку формата webp в браузере
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});;
const modalTrigger = document.querySelector('.play__button')
const modal = document.querySelector('.modal')
const burgerBtn = document.querySelector('.burger')
const menu = document.querySelector('.menu')


function showElement(elem,){
    elem.classList.add('show')
    elem.classList.remove('hide')

}

function hideElement(elem){
    elem.classList.add('hide')
    elem.classList.remove('show')
}


modalTrigger.addEventListener('click',e=>{
    showElement(modal)
    document.body.style.overflow='hidden'
})

document.addEventListener('click',e=>{
    const target = e.target
    if (target === modal){
        hideElement(modal)
        document.body.style.overflow=''
    }
})

burgerBtn.addEventListener('click',()=>{
    if(menu.classList.contains('show')){
        hideElement(menu)
    }else{
        showElement(menu)
    }
})
;

