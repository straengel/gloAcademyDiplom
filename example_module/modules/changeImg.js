//Наша команда изменение фоток
const changeImg = () => {
    const imgOurCommands = document.getElementById('command');
    let dataImg;
    imgOurCommands.addEventListener('mouseover', (event) => {
        if(event.target.matches('.command__photo')){
            dataImg = event.target.src;
            event.target.src = event.target.getAttribute('data-img');
        }
    });

    imgOurCommands.addEventListener('mouseout', (event) => {
        if(event.target.matches('.command__photo')){
            event.target.src = dataImg;
        }
    });
};
export default changeImg;