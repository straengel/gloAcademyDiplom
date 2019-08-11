//Калькулятор
import {checkNumber} from "./check";

const calc = (price=100) => {
    const   calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');

    //Расчитать стоимость
    const calcOnlyNumber = () => {
        const calc = document.getElementById('calc');
        calc.addEventListener('keydown', (event) => {
            if(event.target.matches('input.calc-item')){
                if(checkNumber(event.key) !== true){
                    event.preventDefault();
                    return false;
                }
            }
        });
    };
    calcOnlyNumber();

    const countSum = () => {
        let showTotal = (ind) => {
            let int = setInterval(() => {
                if(total > ind) {
                    ind++;
                } else if(total < ind) {
                    ind--;
                }
                totalValue.textContent = ind;
                if(total === ind){
                    clearInterval(int);
                }
            }, 10);
        };
        let total = 0,
            typeValue = +calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value,
            countValue = 1,
            dayValue = 1;

        if(calcCount.value > 1){
            countValue += (calcCount.value - 1) / 10;
        }

        if(calcDay.value && calcDay.value < 5){
            dayValue *= 2;
        } else if(calcDay.value && calcDay.value){
            dayValue *= 1.5;
        }

        if(typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
            showTotal(+totalValue.textContent);
        } else {
            totalValue.textContent = total;
        }

    };

    calcBlock.addEventListener('change', (event) => {
        const target = event.target;

        // if( target.matches('.calc-type') || target.matches('.calc-square') ||
        //     target.matches('.calc-day') || target.matches('.calc-count')){

        // }
        // Любой из вариантов верен
        if(target === calcType || target === calcSquare || target === calcDay || target === calcCount){
            countSum(totalValue.textContent);
        }
    });
};
export default calc;