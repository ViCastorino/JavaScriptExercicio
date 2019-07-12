
let filmes = [
    {titulo : 'Harry Potter', classificacao : 12},
    {titulo : 'As Branquelas', classificacao : 16},
    {titulo : 'Rei Leão', classificacao : 10},
    {titulo : 'Interestelar', classificacao : 10},
    {titulo : 'Ninja Assassino', classificacao : 18},
    {titulo : 'John Wick', classificacao : 16},
    {titulo : 'Velozes e Furiosos', classificacao : 14},
    {titulo : 'Kung Fu Panda', classificacao : 14}
]

//O usuario vai digitar a idade dele, a funcao tem que dizer quais filmes ele pode ver
//dica vcs vão ter que usar laco(for, while)
//pode usar o alert ou o console.log

//let idade = prompt("Digite sua idade: ");
function movies(idade){
for(let i=0;i<filmes.length;i++){
    if(idade >=filmes[i].classificacao){
        console.log('Voce pode ver os seguintes filme'+filmes[i].titulo);
    }else {
        console.log('Nao autorizado');
    }
}
}