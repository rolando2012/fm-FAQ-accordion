const accordions = [...document.querySelectorAll('.accordion__btn')];

accordions.forEach((btn, index) => {
    btn.addEventListener('click', changeAcc);
    btn.addEventListener('keydown', (e) => handleKey(e, index));
}); 

function changeAcc(e){
    const btn = e.currentTarget;
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    const icon = btn.querySelector('.accordion__icon');

    if( !panel || !icon) return;

    btn.setAttribute('aria-expanded', String(!isOpen));
    panel.setAttribute('aria-hidden', String(isOpen));

    if(isOpen){
        icon.setAttribute('src', './assets/images/icon-plus.svg');
    }else{
        icon.setAttribute('src', './assets/images/icon-minus.svg');
    }  
}

function handleKey(e, index){
    switch (e.key) {
        case 'ArrowDown':
            const nextIndex = (index + 1) % accordions.length;
            accordions[nextIndex].focus();
            e.preventDefault();
            break;
        case 'ArrowUp':
            const prevIndex = (index - 1 + accordions.length) % accordions.length;
            accordions[prevIndex].focus();
            e.preventDefault();
            break;
        case 'Home': accordions[0].focus();
            e.preventDefault();
            break;
        case 'End': accordions[accordions.length-1].focus();
            e.preventDefault();
            break; 
    }
}