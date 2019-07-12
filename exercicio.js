let idade = Number(prompt("Digite sua idade: "));
let valor = Number(prompt("Digite o valor para Empréstimo: "));
let salario = Number(prompt("Digite seu salario: "))
let parcelas = Number(prompt("Digite a qtde de parcelas(3 a 20): " ));
let M = 0;
let abc = 0;
let conta = 0;

function operação (idade,valor,salario,parcelas){
conta = Math.ceil(salario*15);
if (idade <=22 || idade >=55 || valor<1000 || valor>conta){
    console.log('Emprestimo Negado: Valor Insulficiente');
    }else{
        console.log('Emprestimo Aceito');
        M = valor * ((1+0.08)**parcelas);
        M = M.toFixed(2);
        abc = Math.ceil(M/parcelas);
        abc = abcM.toFixed(2); 
        console.log(`Emprestimo aceito, valor total =  ${M}  valor da parcela = ${abc}`);
    }      
}


 