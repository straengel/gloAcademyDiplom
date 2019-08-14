
//Обработка всех popup, +первый элемент кнпока, второй сама форма
import popUp from './popUp';
import {clearInput, validatePhone, checkStringRu, checkPhone} from './sendFormModules/moduleForms';
//popUp(false, document.getElementById('#thanks'));
const sendFormPage = (form, check=false) => {
    const   modalHead = document.querySelector('#thanks h4'),
            modalText = document.querySelector('#thanks p'),
            errorMessage = 'Произошла ошибка',
            successMessage = 'Письмо отправлено!';

    const inputs = form.querySelectorAll('input');

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

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        let body = {};
        //проверка чекбокса
        if(check){
            if(!check.checked){
                alert('Подтвердите согласие на обработку персональных данных в чекБОКСЕ!');
            } else {
                //console.log('Проверка пройдена');
            }
        } else {
            //console.log('Нет чекбокса');
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

        ///*
        postData(body)
            .then((response)=>{
                if(response.status !== 200){
                    modalHead.textContent = `Произошла ошибка`;
                    modalText.innerHTML = `
                        Ваша заявка не отправлена.
                    `;
                    popUp(false, document.getElementById('thanks'));
                    return false;
                }
                modalHead.textContent = `Спасибо!`;
                modalText.innerHTML = `
                        Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.
                    `;

                popUp(false, document.getElementById('thanks'));
                clearInput(inputs);
            })
            .catch((error) => {
                modalHead.textContent = `Произошла ошибка`;
                modalText.innerHTML = `
                        Ваша заявка не отправлена.
                    `;
                popUp(false, document.getElementById('thanks'));
                clearInput(inputs);
            });
    });

};

export default sendFormPage;