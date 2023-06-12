import data from './data.json' assert {type: 'json'};
localStorage.setItem('Data', JSON.stringify(data));

const cacheData = localStorage.getItem('Data');
const datos = cacheData ? JSON.parse(cacheData) : defaultData;
let score, category, popul;
const res = document.querySelector('.sub');
const btn = document.querySelector('.btn');
console.log(datos);

function init() {
   
    for(let i=0; i < datos.length; i++) {
       category = datos[i].category;
       score = datos[i].score;
       //onsole.log(category);
       //console.log(score);
       popul = 
       `<div class = 'categ'>${category} - ${score}</div>`;
       res.innerHTML += popul;
   }
}

init();


btn.addEventListener('click', function() {
    for(let i=0; i < datos.length; i++) {
        if(datos[i].score > 90) {
            //alert('Hey');
            datos[i].category = 'The best';
            localStorage.setItem('Data', JSON.stringify(data));
            init();
        }
    console.log(datos[i].category);
    }  
})
