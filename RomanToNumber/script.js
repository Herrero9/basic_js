const form = document.getElementById('form');
const numInput = document.getElementById('number');
const result = document.getElementById('output');

const romanNumbers = [];

const romanToNumber = (num) => {
    let number = num;
    
    return number;
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = numInput.value;
    result.innerHTML = romanToNumber(num);
    result.classList.toggle('hidden');
});