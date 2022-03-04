// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
//Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCrianças = document.getElementById("crianças");
let inputDuraçao = document.getElementById("duraçao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let crianças = inputCrianças.value;
    let duraçao = inputDuraçao.value;
   

    let qdtTotalCarne = carnepp(duraçao) * adultos + (carnepp(duraçao) / 2 * crianças);
    let qdtTotalCerveja = cervejapp(duraçao) * adultos;
    let qdtTotalBebidas = bebidaspp(duraçao) * adultos + (bebidaspp(duraçao) /2 * crianças)
    
    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} kg de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latinhas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Litros de Agua/Refrigerante </p>`


}

function carnepp(duraçao){   
    if(duraçao >= 6){
        return 650;  
    } else {
        return 400;
    }
}    

function cervejapp(duraçao){   
    if(duraçao >= 6){
        return 2000;  
    } else {
        return 1200;
    }
}  


function bebidaspp(duraçao){   
    if(duraçao >= 6){
        return 1500;  
    } else {
        return 1000;
    }
}  