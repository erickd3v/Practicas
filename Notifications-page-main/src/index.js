let btn = document.getElementById('btn');
let caja = document.querySelectorAll('.n1');
let punto1 = document.querySelectorAll('.punto');
let number = document.getElementById('Number');

function toggleClass(element, className) {
    if (element.classList.contains(className)) {
        
    } else {
        element.classList.add(className);
    }
}

function change() {
    caja.forEach(element => toggleClass(element, 'white'));
    punto1.forEach(element => toggleClass(element, 'white'));
    number.classList.add('white');
}

btn.addEventListener('click', change);