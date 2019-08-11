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
//пример подключение js файлов
//import countTimer from "./modules/countTimer";

//менюшка
clubSelect();
//модульное окно подарок
popUp(document.querySelector('.fixed-gift'), document.getElementById('gift'));
