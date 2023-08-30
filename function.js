let a = '';
let b = '';
let operator = '';
let resetNext = false;

const numbers = document.querySelectorAll('.num');
const operations = document.querySelectorAll('.oper');
const display = document.querySelector('.results');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const dec = document.querySelector('.dec')
    
equal.addEventListener('click', equals);
clear.addEventListener('click', clearButton);
del.addEventListener('click', backspace);
dec.addEventListener('click', decimals);
window.addEventListener('keydown', keyboard);

numbers.forEach((num) => num.addEventListener('click', () => displayNum(num.id)));

operations.forEach((oper) => oper.addEventListener('click', () => displayOper(oper.id)));

function displayNum(num) {
    if(resetNext){display.textContent = '';}
    resetNext = false;
    display.textContent += num;
}
function displayOper(oper) {
    a = display.textContent;
    operator = oper;
    display.textContent = oper;
    resetNext = true;
}

function equals(){
    b = display.textContent;

    a = +a;
    b = +b;

    let result = operate(a, b, operator);
    result = Math.round(result * 100) / 100;
    display.textContent = result;
}

function operate(a, b, oper){
    if(oper == '+') { return a+b; }
    if(oper == '-') { return a-b; } 
    if(oper == '*') { return a*b; } 
    if(oper == '/') { return a/b; }
}

function resetDisplay(){
    display.textContent = '';
}

function clearButton(){
    a = '';
    b = '';
    operator = '';
    display.textContent = '';
}

function backspace(){
    display.textContent = display.textContent.slice(0,-1);
}

function decimals(){
    display.textContent += '.';
}

function keyboard(e){
    if(e.key >= 0 && e.key <= 9){ displayNum(e.key); }
    if(e.key == ".") { decimals(); }
    if(e.key == "/" || e.key == "*" || e.key == "+" || e.key == "-") { displayOper(e.key) }
    if(e.key == "Enter") { equals() }
    if(e.key == "Backspace") { backspace() }
}