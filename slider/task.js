// let sliderItem = document.querySelectorAll('.slider__item');
// let sliderNext = document.querySelector('.slider__arrow_next');
// let sliderPrev = document.querySelector('.slider__arrow_prev');

// let sliderPoint = 0;
// let sliderArray = Array.from(sliderItem);

// sliderNext.onclick = function () {
//     sliderPoint++;
//     for (let i of sliderArray) {
//         i.className = 'slider__item';
//     }
//     if (sliderPoint >= sliderItem.length) {
//         sliderPoint = 0;
//     }
//     sliderItem[sliderPoint].className = 'slider__item slider__item_active';
// }

// sliderPrev.onclick = function () {
//     sliderPoint--;
//     for (let i of sliderArray) {
//         i.className = 'slider__item';
//     }
//     if (sliderPoint < 0) {
//         sliderPoint = sliderItem.length - 1;
//     }
//     sliderItem[sliderPoint].className = 'slider__item slider__item_active';
// }

let slidersItem = Array.from(document.querySelectorAll('.slider__item'));
let sliderNext = document.querySelector('.slider__arrow_next');
let sliderPrev = document.querySelector('.slider__arrow_prev');


function findActive () {
    return slidersItem.findIndex(slide => slide.classList.contains('slider__item_active'));
}

function clearActive (index) {
    slidersItem[index].classList.remove('slider__item_active');
}

function addActive (index) {
    slidersItem[index].classList.add('slider__item_active')
}

function activeIndex (index) {
    if (index < 0) {
        return slidersItem.length - 1;
    } else if (index > slidersItem.length - 1) {
        return 0;
    } else {
        return index;
    }
}


sliderNext.onclick = () => {
    let indexActive = findActive();
    clearActive(indexActive);
    addActive(activeIndex(++indexActive));
}

sliderPrev.onclick = () => {
    let indexActive = findActive();
    clearActive(indexActive);
    addActive(activeIndex(--indexActive));
}
