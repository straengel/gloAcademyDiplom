//import gift from './modules/main/gift';
//gift();
import calc from './modules/main/calc';
import popUp from "./modules/general/popUp";
window.addEventListener('DOMContentLoaded', function(){
    calc();
    //модульное окно подарок открытие
    popUp(document.querySelector('.fixed-gift'), document.getElementById('gift'),() =>{
        document.querySelector('.fixed-gift').style.display = 'none';
    });
});