const btnVals = ['C','(',')','/',
                 '7','8','9','*',
                 '4','5','6','-',
                 '1','2','3','+',
                 '%','0','.','='];

const btnsEl = document.querySelector('.btn-container');
const inputEl = document.querySelector('.input-container');
const displayEl = document.querySelector('.display-container');

let expression = '';

addButtons();

function addButtons() {
    btnVals.forEach(btnVal => {
        let newEl = document.createElement('div');
        newEl.setAttribute('class','btn');
        if (btnVal === 'C') newEl.setAttribute('class','btn red');
        if (btnVal === '=') newEl.setAttribute('class', 'btn green');
        newEl.innerText = btnVal;
        addListener(newEl);
        btnsEl.appendChild(newEl);
    })
}

function addListener(element) {
    element.addEventListener('click', (event) => {
        updateExpression(event);
    })
}

function updateExpression(e) {
    let char = e.target.innerText;

    switch(char) {
        case '=':
            if (expression.length)
                displayResult(expression);
            break;
        case 'C':
            inputEl.innerText = '';
            expression = '';
            break;
        default:
            if (expression.length <= 15) {
                expression += char;
                inputEl.innerText = expression;
            } 
            else {
                alert('max expression size reached');
            }
            break;
    }
}

function displayResult(expn) {
    try {
        let soln = eval(expn);
        expression = ''+soln;
        inputEl.innerText = expression;
        displayEl.innerText = expn + ' = '+ soln;
    } catch(err) {
        inputEl.innerText = 'enter valid expression';
        expression = '';
    }
}