console.log('Hello World!')

let nameRequest = prompt ('Type here Your name');
let surnameRequest = prompt ('Type here Your surname');
let colorRequest = prompt ('Type here Your favourite color');
let mysticSecurityNumber = '22';

document.getElementById('generatedPassword').innerHTML = nameRequest + surnameRequest + colorRequest + mysticSecurityNumber;