//таймер
const countTimer = (deadline) => {
    const   timeHours = document.querySelector('#timer-hours'),
            timeMinutes = document.querySelector('#timer-minutes'),
            timeSeconds = document.querySelector('#timer-seconds');
    timeHours.textContent = '00';
    timeMinutes.textContent = '00';
    timeSeconds.textContent = '00';

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            day = Math.floor(timeRemaining / 360 / 24),
            hours = Math.floor((timeRemaining / 360) % 24),
            minutes = Math.floor((timeRemaining / 60) % 60),
            seconds = Math.floor(timeRemaining % 60);

        return { hours, minutes, seconds, timeRemaining };
    };

    const addZero = (str) => {
        str = String(str);
        if(str.length < 2){
            str = '0'+ str;
        }
        return str;
    };

    let timeRemaining = getTimeRemaining().timeRemaining;

    const updateClock = () => {
        let timer = getTimeRemaining();
        timeHours.textContent = addZero(timer.hours);
        timeMinutes.textContent = addZero(timer.minutes);
        timeSeconds.textContent = addZero(timer.seconds);
    };
    if(timeRemaining > 0){
        let setInt = setInterval(updateClock, 1000);
        setTimeout(function(){
            clearInterval(setInt);
        }, timeRemaining*1000);
    }
};
export default countTimer;