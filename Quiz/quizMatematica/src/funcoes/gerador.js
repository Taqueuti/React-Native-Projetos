function montaPergunta(x, y, operador) {
  if(x > y)
  {
     return x + operador + y;
  }
  else
  {
     return y + operador + x;
  }
};

function cacularResultado(x, y, operador) {
  let resultado;

  let valorA;
  let valorB;

  if (x > y) {
    valorA = x;
    valorB = y;
  } else {
    valorA = y;
    valorB = x;
  }


  if (operador == '+') {
    resultado = valorA + valorB;
  } else if (operador == '-') {
    resultado = valorA - valorB;
  } else if (operador == '/') {
    resultado = valorA / valorB;
  } else if (operador == '*') {
    resultado = valorA * valorB;
  }

  return resultado;
};

function formataResultadoDecimal(resultado) {
  return parseFloat(resultado.toFixed(1));
};


function gerarX() {
  return Math.floor(Math.random() * 99 + 1);
};

function gerarY() {
  return Math.floor(Math.random() * 9 + 1);
};

export function validarResposta(respostaUsuario, resultadoQuestao){
    if(respostaUsuario == resultadoQuestao){
      return true;
    }else{
      return false;
    }
}

export  function gerarPergunta() {
  const operadores = ["+", "-", "*", "/"];
  const gerarOperadores = operadores[Math.floor(Math.random() * operadores.length)];

  const x = gerarX();
  const y = gerarY();


  const pergunta = montaPergunta(x, y, gerarOperadores);
  const resultado = cacularResultado(x, y, gerarOperadores);

  const questao = { Pergunta: pergunta, Resultado: resultado }


  return questao


};
