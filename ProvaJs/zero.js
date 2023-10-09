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