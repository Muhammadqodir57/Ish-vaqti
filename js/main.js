let elInput = document.getElementById('input');
let elBtn = document.getElementById('btn');
let elResult = document.getElementById('result');

elBtn.addEventListener('click', ()=> {
    let inputValue = input.value
    if (inputValue >= 8.00){
        elResult.textContent = 'Vaqtida keldingiz'
    } else if (inputValue < 8.00) {
        elResult.textContent = 'kech qoldingiz'
    }
})  


