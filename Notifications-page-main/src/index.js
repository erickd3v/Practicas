var btn = document.getElementById('btn');
var caja = document.getElementById('n1');
var caja2 = document.getElementById('n2');
var caja3 = document.getElementById('n3');
var punto1 = document.getElementById('punto1');
var punto2 = document.getElementById('punto2');
var punto3 = document.getElementById('punto3');
var number = document.getElementById('Number');
var contador = 0;


function change() {
    if(contador == 0){
        punto1.classList.add('white');
        punto2.classList.add('white');
        punto3.classList.add('white');
        caja.classList.add('white');
        caja2.classList.add('white');
        caja3.classList.add('white');
        number.classList.add('white');
        contador = 1;
    } else() => {}
}


btn.addEventListener('click',change,true);