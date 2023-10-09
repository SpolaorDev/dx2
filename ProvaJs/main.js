function zeroum(){
    const numeros = document.querySelector('#zeroum').value;
    const resultado = document.querySelector('#ganhador');
    

    if(numeros == "100"){
        resultado.innerHTML = "A";
    }
    else if(numeros == "011"){
        resultado.innerHTML = "A";
    }
    else if(numeros == "101"){
        resultado.innerHTML = "B";
    }
    else if(numeros == "010"){
        resultado.innerHTML = "B";
    }
    else if(numeros == "001"){
        resultado.innerHTML = "C";
    }
    else if(numeros == "110"){
        resultado.innerHTML = "C";
    }

    else{
        resultado.innerHTML = "Por favor digite números de apenas 3 algarimos compostos por 0 ou 1";

    }


}

function quadra(){
    var d = document.querySelector('#quadra').value;
    const resultado = document.querySelector('#fora')
    var [x, y] = d.split(' ').map(Number);

    if(x >= 0 && x <= 432 && y >= 0 && y <= 468){
        resultado.innerHTML = "Dentro."
    }
    else{
        resultado.innerHTML = "Fora."
    }

}

function vice_lider(){
    var d = document.querySelector('#competidores').value;
    const resultado = document.querySelector('#vencedor')
    var [ma1, ma2, ma3] = d.split(' ').map(Number);

    if(ma1 > ma2 && ma1 < ma3 || ma1 > ma3 && ma1 < ma2){
        resultado.innerHTML = ma1
    }
    else if(ma2 > ma1 && ma2 < ma3 || ma2 > ma3 && ma2 < ma1){
        resultado.innerHTML = ma2
    }
    else if(ma3 > ma1 && ma3 < ma2 || ma3 > ma2 && ma3 < ma1){
        resultado.innerHTML = ma3
    }

    else if(ma2 == ma1 || ma2 == ma3 || ma3 == ma1){
        resultado.innerHTML = "Não houveram empates, digite os valores corretamente."
    }

}


function quant(){
    var quantidade = document.getElementById('quant').value;

    if(norepeat){
        document.getElementById('musgas').innerHTML = `<p></p>`
        norepeat = false
    }

    var j = 0
    while(j < quantidade){
    document.getElementById('musgas').innerHTML += `<p>Digite o nome da ${j + 1}º música <input id="nom${j}" placeholder="Nome da música"> e a quantidade de views <input id="view${j}" placeholder="Quant views"></p>`
    j++
    }

    document.getElementById('musgas').innerHTML += `<button onclick="resultado()">Calcular</button>`
    
    norepeat = true;
}

function resultado(){
    var nomes = [];
    var views = [];
    var quantidade = document.getElementById('quant').value;
    var maior = -Infinity;
    var maiori;

    for(var i = 0; i < quantidade; i++){
    var nome = document.getElementById(`nom${i}`).value;
    nomes.push(nome)
    var view = parseInt(document.getElementById(`view${i}`).value);
    views.push(view)
    }

    for(var i = 0; i < quantidade; i++){

        if(views[i] > maior){
            maior = views[i];
            maiori = i;
        }
    }

    if(nomes[maiori] != ""){
    document.getElementById('resultado').innerHTML = `<p>A música com o maior número de views ( ${maior}👁 ) foi a "${nomes[maiori]}".</p>`
    }

    else{
        document.getElementById('resultado').innerHTML = `<p>A música com o maior número de views ( ${maior}👁 ) foi a ${maiori + 1}º música.</p>`
    }
}


// Alternar claro/escuro
const checkbox = document.getElementById('checkbox');
 
function introAboutLogoTransition() {
  $("#about-quad").css("top", "70%");
  $("#about-quad").css("opacity", "1");
}

function checkDarkMode(){
  if (localStorage.getItem("tourism_website_darkmode") !== null && localStorage.getItem("tourism_website_darkmode") === "true") {
    document.body.classList.add('dark');
    checkbox.checked = true;
  }
};
checkDarkMode();

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  document.body.classList.contains('dark') ?
    localStorage.setItem("tourism_website_darkmode", true) :
    localStorage.setItem("tourism_website_darkmode", false);
});

// botão de rolagem
 
let mybutton = document.getElementById("upbtn");
 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
}
