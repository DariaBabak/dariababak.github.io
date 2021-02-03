document.addEventListener('DOMContentLoaded'), function() {
    document.querySelectorAll('.header-bottom__item').forEach(function(menu) {
        menu.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.submenu').forEach(function(submenu){
                submenu.classList.remove('.visually-hidden')
            })
            document.querySelector('[data-target=${path}]').classList.add('.visually-hidden')
        })
    })
} 

/*
NodeList.prototype.forEach = Array.prototype.forEach;

var menu = document.querySelectorAll (".header-bottom__item");
var submenu = document.querySelectorAll (".submenu");
menu.forEach (function() {
  menu.addEventListener ('click', function() {
    submenu.classList.toggle ("visually-hidden");
  })
})



menu.forEach(function(menu) {
    menu.addEventListener ("click", function (evt) {
        evt.preventDefault ();
        submenu.forEach(function(submenu) {
            submenu.classList.toggle ("visually-hidden");
        })
        });
});

*/

const element = document.querySelector('.galery-filter');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    });

var swiper = new Swiper('.editions-swiper-container', {
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    });

var swiper = new Swiper('.projects-swiper-container', {
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    });

$( function() {
     $( "#accordion" ).accordion();
} );

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)-999-99-99");
im.mask(selector);

new JustValidate ('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.lenght === 10
            }
        },
    },
});

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("myMap", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.758463, 37.601079],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
    });

    var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42]
    });
    // Размещение геообъекта на карте. 
    myMap.geoObjects.add(myPlacemark); 
}