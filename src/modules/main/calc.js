const calc = () => {
    const   priceTotal = document.getElementById('price-total'),
            radioCardOrder = document.querySelector('#card_order .time');
    let     priceClubCart = {
        1 : 2999,
        6 : 14990,
        9 : 21990,
        12: 24990
    };

    radioCardOrder.addEventListener('change', (event) => {
        let target = event.target;
        if(target.matches('input[name=card-type]')){
            priceTotal.textContent = `${priceClubCart[target.value]}`;
        }
    });
};
export default calc;