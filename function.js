function operate(a, b, oper){
    if(oper == '+') { return a+b; }
    if(oper == '-') { return a-b; } 
    if(oper == '*') { return a*b; } 
    if(oper == '/') { return a/b; }
}



function letsPlay(){
    let temp = '';
    let a = '';
    let b = '';
    let operator = '';

    const num = document.querySelectorAll('.num');
    const oper = document.querySelectorAll('.oper');
    const output = document.querySelector('.results');
    const display = document.createElement('div');
    output.append(display);
    const equal = document.querySelector('.equal');
    
    for(let i = 0; i < num.length; i++){
        num[i].addEventListener('click', function(){
            temp += num[i].id;
            display.textContent = temp;
        });
    };
    for(let i = 0; i < oper.length; i++){
        oper[i].addEventListener('click', function(){
            a = temp;
            operator = oper[i].id;
            display.textContent = operator;
            for(let j = 0; j < num.length; j++){
                num[j].addEventListener('click', function(){
                    b += num[j].id;
                    display.textContent = b;
                });
            };
        });
    };
    equal.addEventListener('click', function(){
        display.textContent = operate(a, b, operator);
    });
    
    
    /*for(let j = 0; j < oper.length; j++){
        while(!oper[j].addEventListener('click', function() {
            operator = oper[j].id;
            display.textContent = operator;
            but[i].addEventListener('click', function() {
                    b += but[i].id;
                    display.textContent = b;
            });
        })){
            for(let i = 0; i < but.length; i++){
                a += but[i].id;
                display.textContent = a;
            };
        }
    }*/
    
}

letsPlay();