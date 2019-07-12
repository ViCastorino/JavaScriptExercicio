//  function dizeroi(){
//      alert('oi');
//  }

// let dizerOi = function(){
//      alert('oi');
// }
// let n1=10;
// let n2=20;
// // let maior = n1>n2?n1:n2;
// function escolherMaior(){
//     let maior;

//     if(n1>n2){
//         maior = n1;
//     }else{
//         maior = n2
//     }
//     return maior;
// }

// console.log("ffff")

let palavras =['beatriz','barbara','fernando'];


function verificar(vetor, palavraBuscada){
    for(let vetor of palavras){
        if(palavras === palavraBuscada){
            return true;
        }
    }
    return false;
}

const aleatorio = function (min, max){
    return Math.floor(Math.random()*(max - min +1)) + min;
}

function parOuImpar(a){
    if( a % 2==0){
        return 'É par';
    }
    return 'É impar';
}











