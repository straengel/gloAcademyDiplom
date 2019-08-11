const clubSelect = () => {
    const   clubSelect = document.querySelector('.club-select'),
            clubSelectUl = document.querySelector('.club-select ul');
    clubSelect.addEventListener('click', (event) => {
        let target = event.target;
        if(target.matches('p')){
            if(clubSelectUl.style.display === 'none' || clubSelectUl.style.display === ''){
                clubSelectUl.style.display = 'block';
            } else {
                clubSelectUl.style.display = 'none';
            }
        }
    });
};
export default clubSelect;