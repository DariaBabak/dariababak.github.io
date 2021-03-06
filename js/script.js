document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.header-bottom__item').forEach(function(menu) {
        menu.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.submenu').forEach(function(submenu) {
                submenu.classList.remove('.visually-hidden')
            })
            document.querySelector('[data-target=${path}]').classList.add('.visually-hidden')
        })
    })
})

var showAll = document.querySelector (".events__button-all");
var eventsItems = document.querySelector (".events__items");

showAll.addEventListener ("click", function(event) {
  event.preventDefault ();
  showAll.classList.add ("events__item-closed");
  eventsItems.classList.remove ("events__item-closed");
  eventsItems.classList.add ("events__item-oppened");
});

const element = document.querySelector('.galery__filter');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 50,
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

var swiper = new Swiper('.editions__swiper-container', {
    slidesPerView: 3,
    spaceBetween: 50,
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

var swiper = new Swiper('.projects__swiper-container', {
    slidesPerView: 3,
    spaceBetween: 50,
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

$(function() {
    $("#accordion").accordion();
});

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)-999-99-99");
im.mask(selector);

new JustValidate('.form', {
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

function init() {
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
