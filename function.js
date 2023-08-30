//let temp = '';
let a = '';
let b = '';
let operator = '';
let resetNext = false;
//let previousResult;

const numbers = document.querySelectorAll('.num');
const operations = document.querySelectorAll('.oper');
const display = document.querySelector('.results');
const equal = document.querySelector('.equal');
    
equal.addEventListener('click', equals);

numbers.forEach((num) => num.addEventListener('click', () => displayNum(num.id)));

operations.forEach((oper) => oper.addEventListener('click', () => displayOper(oper.id)));

/*for(let i = 0; i < num.length; i++){
    num[i].addEventListener('click', function(){
        temp += this.id;
        display.textContent = temp;
    });
};
for(let i = 0; i < oper.length; i++){
    oper[i].addEventListener('click', function(){
        a = temp;
        operator = this.id;
        display.textContent = operator;
            
        for(let j = 0; j < num.length; j++){
            num[j].addEventListener('click', function(){
                b += this.id;
                display.textContent = b;
            });
        };
    });
};*/
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

    display.textContent = operate(a, b, operator);
    /*previousResult = operate(a, b, operator)
    display.textContent = previousResult;
    temp = previousResult;
    a = '';
    b = '';
    operator = '';*/
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