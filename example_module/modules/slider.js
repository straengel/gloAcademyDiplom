//слайдер

const slider = () => {
    const   slide = document.querySelectorAll('.portfolio-item'),
            slider = document.querySelector('.portfolio-content');

    let     interval,
            dots,
            currentSlide = 0; //номер слайдра

    const generateDot = () => {
        const rootDot = document.querySelector('.portfolio-dots');
        let elemNew = ``;
        slide.forEach((elem, index) => {
            if(index === 0){
                elemNew += `<li class="dot dot-active"></li>`;
            } else {
                elemNew += `<li class="dot"></li>`;
            }
        });
        rootDot.insertAdjacentHTML('beforeend', elemNew);
        dots = document.querySelectorAll('.dot');
    };

    generateDot();

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };

    const startSlide = (time=3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;
        if(!target.matches('.portfolio-btn, .dot')){
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        if(target.matches('#arrow-right')){
            currentSlide++;
        } else if(target.matches('#arrow-left')){
            currentSlide--;
        } else if(target.matches('.dot')){
            dots.forEach((elem, index) => {
                if(elem === target){
                    currentSlide = index;
                }
            });
        }

        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
        if(event.target.matches('.portfolio-btn, .dot')){
            stopSlide();
        }

    });

    slider.addEventListener('mouseout', (event) => {
        if(event.target.matches('.portfolio-btn, .dot')){
            startSlide();
        }
    });

    startSlide();
};
export default slider;