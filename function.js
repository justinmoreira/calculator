function setButtons() {
    const grid = document.querySelector('#container');
    grid.setAttribute("class", "grid");
    
    const clearBut = document.createElement('div');
    clearBut.setAttribute("class", "clearBut");
    clearBut.textContent = "CLEAR";
    grid.append(clearBut);

    const deleteBut = document.createElement('div');
    deleteBut.setAttribute("class", "deleteBut");
    deleteBut.textContent = "DELETE";
    grid.append(deleteBut);

    for(let i = 7; i <= 9; i++){
        const but = document.createElement('div');
        but.setAttribute("class", "butStyle");
        but.textContent = i;

        grid.append(but);
    }

    const divi = document.createElement('div');
    divi.setAttribute("class", "butStyle");
    divi.textContent = '/';

    grid.append(divi);

    for(let i = 4; i <= 6; i++){
        const but = document.createElement('div');
        but.setAttribute("class", "butStyle");
        but.textContent = i;

        grid.append(but);
    }

    const mult = document.createElement('div');
    mult.setAttribute("class", "butStyle");
    mult.textContent = '*';

    grid.append(mult);

    for(let i = 1; i <= 3; i++){
        const but = document.createElement('div');
        but.setAttribute("class", "butStyle");
        but.textContent = i;

        grid.append(but);
    }

    const min = document.createElement('div');
    min.setAttribute("class", "butStyle");
    min.textContent = '-';

    grid.append(min);

    const zero = document.createElement('div');
    zero.setAttribute("class", "butStyle");
    zero.textContent = 0;

    grid.append(zero);

    const period = document.createElement('div');
    period.setAttribute("class", "butStyle");
    period.textContent = '.';

    grid.append(period);

    const equal = document.createElement('div');
    equal.setAttribute("class", "butStyle");
    equal.textContent = '=';

    grid.append(equal);

    const plus = document.createElement('div');
    plus.setAttribute("class", "butStyle");
    plus.textContent = '+';

    grid.append(plus);
}

setButtons();