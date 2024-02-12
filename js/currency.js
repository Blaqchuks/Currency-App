let amountElement = document.getElementById('amount');
let currencyElement = document.getElementById('currency');
let btnElement = document.getElementById('btn');
let nairaElement = document.getElementById('naira');



function Convert() {
    if (currencyElement.value == 'dollar') {
        nairaElement.textContent = amountElement.value * 1200;
    }
    else (currencyElement.value == 'pound') 
         nairaElement.textContent = amountElement.value * 1200;

    if(currencyElement.value == 'euro') {
        nairaElement.textContent = amountElement.value * 1200;
    }
    else (currencyElement.value == 'yen') 
        nairaElement.textContent = amountElement.value * 1200;             
}
 




btnElement.addEventListener('click', Convert);
