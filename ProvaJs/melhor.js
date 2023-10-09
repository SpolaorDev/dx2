var quantidade;
var norepeat = false

function quant(){
    var quantidade = document.getElementById('quant').value;

    if(norepeat){
        document.getElementById('alunos').innerHTML = `<p></p>`
        norepeat = false
    }
    var j = 0
    while(j < quantidade){
    document.getElementById('alunos').innerHTML += `<p>Digite o nome do(a) ${j + 1}º aluno(a) <input id="nom${j}" placeholder="Nome do(a) aluno(a)"> e a sua nota <input id="notas${j}" placeholder="Nota"></p>`
    j++;

    }

    document.getElementById('alunos').innerHTML += `<button onclick="resultado()">Calcular</button>`
    

    norepeat = true;
    
}



function resultado(){
    var nomes = [];
    var notas = [];
    var quantidade = document.getElementById('quant').value;
    var maior = -Infinity;
    var maiori;

    for(var i = 0; i < quantidade; i++){
    var nome = document.getElementById(`nom${i}`).value;
    nomes.push(nome)
    var nota = parseInt(document.getElementById(`notas${i}`).value);
    notas.push(nota)
    }

    for(var i = 0; i < quantidade; i++){

        if(notas[i] > maior){
            maior = notas[i];
            maiori = i;
        }
    }

    if(nomes[maiori] != ""){
    document.getElementById('resultado').innerHTML = `<p>A maior nota ( ${maior} ) foi do(a) "${nomes[maiori]}".</p>`
    }

    else{
        document.getElementById('resultado').innerHTML = `<p>A maior nota ( ${maior} ) foi a do(a) ${maiori + 1}º aluno(a).</p>`
    }
}