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