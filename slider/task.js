let sliderItem = document.querySelectorAll('.slider__item');
let sliderNext = document.querySelector('.slider__arrow_next');
let sliderPrev = document.querySelector('.slider__arrow_prev');

let sliderPoint = 0;
let sliderArray = Array.from(sliderItem);

sliderNext.onclick = function () {
    sliderPoint++;
    for (let i of sliderArray) {
        i.className = 'slider__item';
    }
    if (sliderPoint >= sliderItem.length) {
        sliderPoint = 0;
    }
    sliderItem[sliderPoint].className = 'slider__item slider__item_active';
}

sliderPrev.onclick = function () {
    sliderPoint--;
    for (let i of sliderArray) {
        i.className = 'slider__item';
    }
    if (sliderPoint < 0) {
        sliderPoint = sliderItem.length - 1;
    }
    sliderItem[sliderPoint].className = 'slider__item slider__item_active';
}