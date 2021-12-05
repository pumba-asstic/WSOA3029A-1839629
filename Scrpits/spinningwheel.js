let theta = Math.PI / 4.0;
let newTheta = 0.0;
let newX = 0.0;
let newY = 0.0;
let wheelRadius = 200.00;
let wheelTheta= 0.0;

const cards = document.querySelectorAll('.card');
const wheel = document.querySelector('.wheel');

const center ={
     x:  parseFloat (getComputedStyle(cards[0]).left),
     y: parseFloat (getComputedStyle(cards[0]).top)

}

cards.forEach((card, index) => 
{   newTheta = theta *index;

    newX= (Math.cos(newTheta) * wheelRadius);
    newY= ( -1.0 * Math.sin(newTheta) * wheelRadius);

    card.style.left = `${ (center .x + newX)}px`;
    card.style.top = `${ (center .y + newY)}px`;
});

document.addEventListener('wheel', event => 
{
let scroll_speed = event.deltaY * 0.002;
wheelTheta =wheelTheta + scroll_speed;

document.querySelector('.wheel').style.transform = ` translate(-50%, -50%) rotate(${wheelTheta * (180/Math.PI)}.deg)`;
});