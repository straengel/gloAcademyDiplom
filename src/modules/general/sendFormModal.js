
//Обработка всех popup, +первый элемент кнпока, второй сама форма
import {clearInput, validatePhone, checkStringRu, checkPhone} from './sendFormModules/moduleForms';
//popUp(false, document.getElementById('#thanks'));
const sendFormModal = (form, check=false) => {
    const   modalHead = document.querySelector('#thanks h4'),
        modalText = document.querySelector('#thanks p'),
        errorMessage = 'Произошла ошибка!',
        loadMessage = 'Идет отправка!',
        successMessage = 'Письмо отправлено!';

    const inputs = form.querySelectorAll('input');

    const statusMessage = document.createElement('div');

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    };

    const banChars = () => {
        form.addEventListener('keydown', (event) => {
            const target = event.target;
            if(target.matches('input[name=name]')){
                if(checkStringRu(event.key) !== true){
                    event.preventDefault();
                    return false;
                }
            }
            if(target.matches('input[name=phone]')){
                if(checkPhone(event.key) !== true){
                    event.preventDefault();
                    return false;
                }
            }
        });
    };
    banChars();
    statusMessage.style.cssText = 'font-size: 1rem; color: #ffd11a';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        const formData = new FormData(form);
        let body = {};
        //проверка чекбокса
        if(check){
            if(!check.checked){
                alert('Подтвердите согласие на обработку персональных данных в чекБОКСЕ!');
            } else {
                console.log('Проверка пройдена');
            }
        } else {
            console.log('Нет чекбокса');
        }


        formData.forEach((val, key) => {
            body[key] = val;
        });
        //Валидация телефона
        if (body.phone){
            if(!validatePhone(body.phone)){
                alert('Введите правильно телефон');
                return false;
            }
            console.log('Телефон введен правильно');
        }
        //console.log(body);
        statusMessage.textContent = loadMessage;
        ///*
        postData(body)
            .then((response)=>{
                if(response.status !== 200){
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                clearInput(inputs);
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error();
            });
    });

};

export default sendFormModal;