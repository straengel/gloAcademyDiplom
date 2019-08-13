//очищение текстовых инпутов
export const clearInput = (inputs) => {
    inputs.forEach((val, key) => {
        if(val.type === 'text' || val.type === 'tel')
            val.value = '';
    });
};
//запрет на ввод не русских букв
export const checkStringRu = (str) => {
    let regexp = /[a-яА-Я,\s]/i;
    regexp = /[А-яё/B]/i;
    if(regexp.test(str) || str == ' '){
        return true;
    } else {
        return false;
    }
};
//валдиация телефона
export const validatePhone = (str) => {
    //Хард проверка
    const regex = /^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,18}$/;
    const subst = "+$1 ($2) $3-$4-$5";
    return regex.test(str);
};
//валдиация почты
export const validateMail = (str) => {
    const re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    return re.test(str);
};
