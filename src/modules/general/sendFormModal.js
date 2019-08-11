//send-ajax-form
//1) надо сделать валидацию телефон
/*
 * 1) Все формы на странице и в модальных окнах должны отправляться посредством
 * ajax(без перезагрузки страницы) и захватывать все введенные данные.
 * Также необходимо оповестить пользователя о состоянии отправки (идет отправка, отправлено, ошибка).
 * В последних двух состояниях необходимо заменить сам контент модального окна на оповещение.
 * Необходима маска или валидация номера телефона (нужное кол-во чисел, код).
 * Заполнение имени и комментария - только на русском языке
 * - Наверно надо доп параметр, который будет определять модал или нет
 *
 * 2)Форма отправки данных, запретить отправку если не стоит галочка согласен
 * на обработку данных и сообщить пользователю что необходимо подтвердить согласие.
 * - Наверно надо добавить доп параметр, который будет выводить сообщение и может вывести в отдельный модуль
 *
 * 3) После отправки данных вывести модальное окно c id="thanks"
 * в котором сообщение об успешной отправки или об ошибке если отправка не удалась
 * - Наверно надо добавить доп параметр, который будет выводить модальное окно и может вывести в отдельный модуль
 */
const sendForm = (element) => {
    const   errorMessage = 'Ошибка!',
        loadMessage = 'Идет отправка!',
        successMessage = 'Отправлено!';

    const form = element;

    const statusMessage = document.createElement('div');

    const inputs = form.querySelectorAll('input');

    const clearInput = () => {
        inputs.forEach((val, key) => {
            val.value = '';
        });
    };
    /*
    const checkNumber = (num) => {
        let regexp = /[0-9/B]/i;
        if(regexp.test(num))
            return true;
        else
            return false;
    };
    const checkStringRu = (str) => {
        let regexp = /[a-яА-Я,\s]/i;
        regexp = /[А-яё/B]/i;
        if(regexp.test(str) || str == ' '){
            return true;
        } else {
            return false;
        }
    };
    const checkPhone = (phone) => {
        let regexp = /[\+0-9/B]/i;
        if(regexp.test(phone))
            return true;
        else
            return false;
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
    /**/

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