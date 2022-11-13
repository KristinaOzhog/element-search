const menuLinkBar = Array.from(document.querySelectorAll('.menu__link'));

for (let i of menuLinkBar) {
    i.onclick = () => {
        const parentI = i.parentElement;
        if (parentI.querySelector('.menu_sub').className === 'menu menu_sub') {
            parentI.querySelector('.menu_sub').className = 'menu menu_sub menu_active'
        
        }

        if (i.closest('.menu_main')) {
            return false
        }
    }
}