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