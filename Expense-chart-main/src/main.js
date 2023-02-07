import data from './data.json' assert{type: 'json'};

let wrapGraphic = document.querySelector('.chart__bars-container');

let values = [];

data.forEach(element => {
    values.push(element.amount)
    wrapGraphic.innerHTML += `
    <div class="chart__bar">
        <div class="chart__bar--label">$${element.amount}</div>
        <div class="chart__bar--day">${element.day}</div>
    </div>`
});

console.log(values)
let alturaMax = 200;
let maxValue = Math.max(...values);
console.log(maxValue);

    /*
    
    52.36 -> 200px
    17.45  x
    
    x = ( 17.45 * 200px ) / 52.36

    x = ( nuevo valor * 200px ) / 52.36

    */

let bars = document.querySelectorAll('.chart__bar');
bars = [...bars]

bars.forEach(bar => {

    let nuevoValor = parseFloat(bar.childNodes[1].innerText.slice(1));
    
    let alturaActual = (nuevoValor * alturaMax) / maxValue

    bar.style.height = `${alturaActual}px`

    // Pintar la barra mas grande de Cyan
    if(nuevoValor == maxValue){
        bar.style.backgroundColor = 'hsl(186, 34%, 60%)';
    }


    bar.addEventListener('mouseover', event=>{
        if(event.target.className == 'chart__bar'){
            let cashElement = event.target.childNodes[1];
            cashElement.style.display = 'block';
        }
    });
    bar.addEventListener('mouseout', event=>{
        if(event.target.className == 'chart__bar'){
            let cashElement = event.target.childNodes[1];
            cashElement.style.display = 'none';
        }
    });
});