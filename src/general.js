'use strict';
import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'es6-promise';
import 'whatwg-fetch';
//import 'fetch-polyfill';
import 'formdata-polyfill';
import elemntClosest from 'element-closest';
elemntClosest(window);
import clubSelect from './modules/general/clubSelect';
//Обработка всех popup, +первый элемент кнпока, второй сама форма
import popUp from './modules/general/popUp';
//Слайдер в шапке
import mainSlider from './modules/general/mainSlider';
//Обработка всех модальных форм, первый параметр - форма, второй - проверка чекбокса
//import sendFormModal from './modules/general/sendFormModal';
//Обработка всех страничных форм, первый параметр - форма, второй - проверка чекбокса
//import sendFormPage from './modules/general/sendFormPage';
//пример подключение js файлов
//import countTimer from "./modules/countTimer";

//менюшка
clubSelect();
//модульное окно подарок открытие
popUp(document.querySelector('.fixed-gift'), document.getElementById('gift'));
//Страница модулей открытие
popUp(document.querySelector('.open-popup'), document.getElementById('free_visit_form'));
//Модальное окно #2 открытие
popUp(document.querySelector('.call .callback-btn'), document.getElementById('callback_form'));
//mainSlider
mainSlider();