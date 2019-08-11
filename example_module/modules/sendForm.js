//send-ajax-form
import {checkPhone, checkStringRu} from "./check";
const sendForm = (element) => {
    const   errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

    const form = element;

    const statusMessage = document.createElement('div');

    const inputs = form.querySelectorAll('input');

    const clearInput = () => {
        inputs.forEach((val, key) => {
            val.value = '';
        });
    };

    const banChars = () => {
        form.addEventListener('keydown', (event) => {
            const target = event.target;
            if(target.matches('input[name=user_name]') || target.matches('input[name=user_message]')){
                if(checkStringRu(event.key) !== true){
                    event.preventDefault();
                    return false;
                }
            }
            if(target.matches('input[name=user_phone]')){
                if(checkPhone(event.key) !== true){
                    event.preventDefault();
                    return false;
                }
            }
        });
    };
    banChars();

    statusMessage.textContent = 'Тут будет сообщение';
    statusMessage.style.cssText = 'font-size: 2rem';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        form.appendChild(statusMessage);
        let body = {};


        formData.forEach((val, key) => {
            body[key] = val;
        });
        statusMessage.textContent = loadMessage;
        postData(body)
            .then((response)=>{
                if(response.status !== 200){
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                clearInput();
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error();
            });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    };
};
export default sendForm;