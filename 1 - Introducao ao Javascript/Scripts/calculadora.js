function calculate() {
    event.preventDefault();

    let n1 = parseFloat(document.getElementById("numeroX").value);
    let n2 = parseFloat(document.getElementById("numeroY").value);

    if (isNaN(n1) || isNaN(n2)) {
      alert("É necessario inserir apenas numeros");
      return;
    }

    let operacao = document.getElementById("operacao").value;

    let resultado;

    switch (operacao) {
      case "+":
        resultado = somar(n1, n2);
        break;
      case "-":
        resultado = subtrair(n1, n2);
        break;
      case "*":
        resultado = multiplicar(n1, n2);
        break;
      case "/":
        resultado = dividir(n1, n2);
        break;
      default:
        alert("Você precisa selecionar uma operação");
        break;
    }

    document.getElementById("result").innerText = resultado
  }

  function somar(n1, n2) {
    return n1 + n2;
  }

  function subtrair(n1, n2) {
    return n1 - n2;
  }
  function multiplicar(n1, n2) {
    return n1 * n2;
  }
  function dividir(n1, n2) {
    if (n2 == 0) {
      return "Não é possível dividir por 0";
    }
    return n1 / n2;
  }