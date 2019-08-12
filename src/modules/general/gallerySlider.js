//import slider from "../../../example_module/modules/slider";

const gallerySlider = () => {
    const   slide = document.querySelectorAll('.gallery-slider .slide'),
            slider = document.querySelector('.gallery-slider');
    let     interval,
            dots,
            currentSlide = 0,
            timeOutFirst,
            timeOutSecond,
            html = `
                <div class="slider-arrow next"><span><i class="fa fa-angle-right"></i></span></div>
                <div class="slider-arrow prev"><span><i class="fa fa-angle-left"></i></span></div>
            `;
    slider.style.height = slide[0].offsetHeight + `px`;
    //console.log(slide[0].offsetHeight);
    slide.forEach((elem, index) => {

        if(index === 0){
            elem.style.cssText = 'display:block;opacity:1;';
        } else {
            elem.style.cssText = 'display:none;opacity:0;';
        }

        elem.style.transition = `opacity .5s`;
    });

    slider.style.position = 'relative';
    slider.insertAdjacentHTML('beforeEnd', html);

    const generateDot = () => {
        html = `<ul class="slider-dots"></ul>`;
        slider.insertAdjacentHTML('beforeEnd', html);
        const rootDot = document.querySelector('.slider-dots');
        let elemNew = ``;
        slide.forEach((elem, index) => {
            if(index === 0){
                elemNew += `<li class="slick-active"><button></button></li>`;
            } else {
                elemNew += `<li><button></button></li>`;
            }
        });
        rootDot.insertAdjacentHTML('beforeend', elemNew);
        dots = document.querySelectorAll('.slider-dots li');
    };
    generateDot();

    const prevSlide = (elem, index, strClass=false) => {
        if(strClass === false){
            elem[index].style.opacity = `0`;
            elem[index].style.display = `none`;
            timeOutFirst = setTimeout(() => {

                clearTimeout(timeOutFirst);
            }, 300);
        } else {
            elem[index].classList.remove(strClass);
        }


    };

    const nextSlide = (elem, index, strClass=false) => {
        if(strClass === false){
            elem[index].style.display = `block`;
            timeOutSecond = setTimeout(() => {
                clearTimeout(timeOutSecond);
                elem[index].style.opacity = `1`;
            }, 300);
        } else {
            elem[index].classList.add(strClass);
        }

    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide );
        prevSlide(dots, currentSlide, 'slick-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, );
        nextSlide(dots, currentSlide, 'slick-active');
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

        if(!target.closest('.slider-arrow, .slider-dots li')){
            return;
        }

        prevSlide(slide, currentSlide );
        prevSlide(dots, currentSlide, 'slick-active');
        if(target.closest('.next')){
            currentSlide++;
        } else if(target.closest('.prev')){
            currentSlide--;
        } else if(target.closest('.slider-dots li')){
            dots.forEach((elem, index) => {
                if(elem === target.closest('li')){
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
        nextSlide(slide, currentSlide );
        nextSlide(dots, currentSlide, 'slick-active');
    });
//*
    slider.addEventListener('mouseover', (event) => {
        if(event.target.closest('.slider-dots li, .slider-arrow')){
            stopSlide();
        }

    });

    slider.addEventListener('mouseout', (event) => {
        if(event.target.closest('.slider-dots li, .slider-arrow')){
            startSlide();
        }
    });
//*/
    startSlide();
};
export default gallerySlider;