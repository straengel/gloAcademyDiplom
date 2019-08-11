const mainSlider = () => {
    const   slide = document.querySelectorAll('.main-slider .slide'),
            slider = document.querySelector('.main-slider');
    let     interval,
            timeOutFirst,
            timeOutSecond,
            currentSlide = 0; //номер слайдра
    slide.forEach((el, index) => {
        el.style.transition = `opacity .2s`;
        if(index === 0)
            el.style.opacity = `1`;
        else
            el.style.opacity = `0`;
    });

    const prevSlide = (elem, index) => {
        elem[index].style.opacity = `0`;
        timeOutFirst = setTimeout(() => {
            clearTimeout(timeOutFirst);
            elem[index].style.display = `none`;
        }, 200);

    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].style.display = `flex`;
        timeOutSecond = setTimeout(() => {
            clearTimeout(timeOutSecond);
            elem[index].style.opacity = `1`;
        }, 200);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide);
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide);
    };

    const startSlide = (time=3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    startSlide();
};
export default mainSlider;