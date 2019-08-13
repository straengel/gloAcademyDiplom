//Запрет ввода
export const checkNumber = (num) => {
    let regexp = /[0-9/B]/i;
    if(regexp.test(num))
        return true;
    else
        return false;
};
export const checkStringRu = (str) => {
    let regexp = /[a-яА-Я,\s]/i;
    regexp = /[А-яё/B]/i;
    if(regexp.test(str) || str == ' '){
        return true;
    } else {
        return false;
    }
};
export const checkPhone = (phone) => {
    let regexp = /[0-9/B]/i;
    if(regexp.test(phone))
        return true;
    else
        return false;
};