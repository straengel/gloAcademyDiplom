import animateCSS from "./animateCss";
const servicesSlider = () => {
    const   slide = document.querySelectorAll('.services-slider .slide'),
            slider = document.querySelector('.services-slider'),
            html = `
                <div class="slider-arrow next"><span><i class="fa fa-angle-right"></i></span></div>
                <div class="slider-arrow prev"><span><i class="fa fa-angle-left"></i></span></div>
            `;
    let prevArr,
        nextArr,
        numFirstSlide = 0,
        numLastSlide = 5;
    slider.style.position = `relative`;
    slider.insertAdjacentHTML('beforeEnd', html);

    slide.forEach((elem, index) => {
        if(index > 4){
            elem.style.display = `none`;
        }
    });

    nextArr = slider.querySelector('.slider-arrow.next');
    prevArr = slider.querySelector('.slider-arrow.prev');


    const prevSlide = () => {
        if(numFirstSlide >= 1){
            numLastSlide--;
            numFirstSlide--;
            animateCSS(slide[numFirstSlide], 'fadeInLeft', slide[numFirstSlide].style.display = 'block');
            slide[numLastSlide].style.display = 'none';
            console.log(numFirstSlide, numLastSlide);
        }
    };

    const nextSlide = () => {
        if(numLastSlide < slide.length){
            animateCSS(slide[numLastSlide], 'fadeInRight', slide[numLastSlide].style.display = 'block');
            slide[numFirstSlide].style.display = 'none';
            numLastSlide++;
            numFirstSlide++;
            console.log(numFirstSlide, numLastSlide);
        }


    };
    slider.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest('.slider-arrow.next')){
            nextSlide();
        }
        if(target.closest('.slider-arrow.prev')){
            prevSlide();
        }
    });
};
export default servicesSlider;