//меню
const toggleMenu = () => {
    const   menu = document.querySelector('menu'),
            body = document.querySelector('body');

    body.addEventListener('click', (event) => {
        let target = event.target;
        if(menu.classList.contains('active-menu') === false && target.closest('.menu')){
            menu.classList.toggle('active-menu');
        } else {
            if(
                (!target.closest('menu') && menu.classList.contains('active-menu') === true) ||
                target.closest('.close-btn') ||
                target.closest('menu li')
            ){
                menu.classList.toggle('active-menu');
            }
        }

    });
};
export default toggleMenu;