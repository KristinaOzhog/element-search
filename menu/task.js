const menuLinkBar = Array.from(document.querySelectorAll('.menu__link'));

for (let i of menuLinkBar) {
    i.onclick = () => {
        const parentI = i.parentElement;
        if (parentI.querySelector('.menu_sub')) {
            parentI.querySelector('.menu_sub').classList.toggle('menu_active');
            return false;
        }
    }
}