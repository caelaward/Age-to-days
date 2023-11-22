let age = document.querySelector('[data-age]');
let days = document.querySelector ('[data-days]');
let btn= document.querySelector('[data-btn]');


function convert1() {
    let results = (parseFloat(age.value)*365.25)
    days.value = parseFloat(results.toFixed(2))
}

function convert2() {
    let results = (parseFloat(days.value)/365.25) 
    age.value = parseFloat(results.toFixed(2))
}



age.addEventListener('input', convert1)
days.addEventListener('input', convert2)
btn.addEventListener('click', function(){
    age.value  = '';
    days.value = '';
})