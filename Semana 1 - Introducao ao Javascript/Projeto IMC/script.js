const listaPessoas = []

function calcular() {
    event.preventDefault();//capturar o evento de submit do formulário (para)

    // pegar os dados do form
    
    const nome = document.getElementById('nome').value.trim();
    const altura = parseFloat( document.getElementById('altura').value );
    const peso = parseFloat( document.getElementById('peso').value );
    
    if (isNaN(altura) || isNaN(peso) || nome.length == 0 ) {
        alert("É necessário preecher os números corretamente");
        return;
    }

    // calcular o imc
    const imc = calcularImc(altura, peso);
    const situacao = retornaSituacao(imc);
    
    const pessoa = {nome, imc, peso, altura, situacao
    };

    listaPessoas.push(pessoa)

    console.log(pessoa)

    // console.log(nome);
    // console.log(altura);
    // console.log(peso);
    // console.log(imc);
    // console.log(situacao);
    
    // validar se estão preenchidos
    // 4 minutos
}

// return peso / altura ** 2;
//     return peso / (altura * altura);
function calcularImc(altura, peso) {
    return Math.floor(peso / Math.pow(altura, 2));
    
}


/*
    Resultado	        Situação
    Menor que 18.5      Magreza Severa
    Entre 18.5 e 24.99	Peso normal
    Entre 25 e 29.99	Acima do peso
    Entre 30 e 34.99	Obesidade I
    Entre 35 e 39.99	Obesidade II (severa)
    Acima de 40	        Cuidado!!! else
*/

function retornaSituacao(imc) {
    
    if (imc < 18.5) {
        return "Magreza Severa!";
    } else if( imc <= 24.99 ) {
        return "Peso normal";
    } else if( imc <= 29.99 ) {
        return "Acima do peso";
    } else if( imc <= 34.99 ) {
        return "Obesidade I";
    } else if( imc <= 39.99 ) {
        return "Obesidade II";
    } else {
        return "Obesidade III Cuidado!"
    }
}

// https://github.com/MagiLogus/IMC

// https://github.com/juliaathar/imc-javascript

