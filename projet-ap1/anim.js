
const can = document.querySelector('.can');
const buttonLeft = document.querySelector('.decrement');
const buttonRight = document.querySelector('.increment');
buttonLeft.addEventListener('click', decrement);
buttonRight.addEventListener('click', increment);

let X = 0;
let count = 1;

let A = "#FAC976";
let B = "#CEA8FF";
let C = "#9BFFDB";


let Backgroundcolor = 0;
function increment() {
    X = X + 850/2;
    console.log('X:', X);
    can.style.backgroundPosition = X + 'px';
    console.log(can.style.backgroundPosition);
}
function decrement() {
    X = X - 850/2;
    console.log('X:', X);
    can.style.backgroundPosition = X + 'px';  
}

const backgroundcolor = document.querySelector('.body');
const buttonLeftforBackground = document.querySelector('.decrement');
const buttonRightforBackground = document.querySelector('.increment');
buttonLeftforBackground.addEventListener('click', backgrounddecrement);
buttonRightforBackground.addEventListener('click', backgroundincrement);

function backgroundincrement(){
if (count == 1) {
    count=2;
    backgroundcolor.style.backgroundColor = B;
    console.log('count:' ,count);
}else if (count == 2) {
    count=3;
    backgroundcolor.style.backgroundColor = C;
    console.log('count:' ,count);
}else if (count == 3) {
    count=1;
    backgroundcolor.style.backgroundColor = A;
    console.log('count:' ,count);
}
}

function backgrounddecrement(){
if (count == 1) {
    count=3;
    backgroundcolor.style.backgroundColor = C;
    console.log('count:' ,count);
}else if (count == 2) {
    count=1;
    backgroundcolor.style.backgroundColor = A;
    console.log('count:' ,count);
}else if (count == 3) {
    count=2;
    backgroundcolor.style.backgroundColor = B;
    console.log('count:' ,count);
}
}