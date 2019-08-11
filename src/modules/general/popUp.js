const popUp = (popUpBtn, popUp) => {
    popUpBtn.addEventListener('click', (event) => {
        popUp.style.display = 'block';
    });
    popUp.addEventListener('click', (event) => {
        let target = event.target;
        if(target.matches('.overlay') || target.matches('.close_icon') || target.matches('.close-btn')){
            popUp.style.display = 'none';
        }
    });

};
export default popUp;