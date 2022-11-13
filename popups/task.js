let modalMain = document.querySelector('#modal_main');
let modalSuccess = document.querySelector('#modal_success');
let showSuccess = document.querySelector('.show-success');
let closeTimes = document.querySelectorAll('div.modal__close_times');


let closeArr = Array.from(closeTimes);


modalMain.classList.add('modal_active')

showSuccess.onclick = () => {
    modalMain.className = 'modal'
    modalSuccess.classList.add('modal_active')
}

closeTimes.forEach((element) => {
    element.onclick = () => {
        element.parentElement.parentElement.className = 'modal'
    }
})

