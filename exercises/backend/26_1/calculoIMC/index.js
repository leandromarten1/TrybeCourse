// O script deve calcular o IMC de uma pessoa e exibi-lo na tela.

// const readline = require("readline-sync");

//modifique o script para que ele utilize o pacote inquirer
//para solicitar as informações ao usuário no terminal.

const inquirer = require("inquirer");

function calculaIMC(peso, altura) {
  const imc = (peso / Math.pow(altura, 2)).toFixed(2);
  console.log("Seu IMC é: %s", imc);
  return imc;
}

inquirer
  .prompt([
    {
      type: "input",
      name: "peso",
      message: "Qual é o seu peso?",
      validate: function(value) {
          let pass = value.match(/^\d+.\d{2}$/);
          if (pass) {
              return true;
          }     
          return "Digite um peso válido - Ex > 70.00"     
      }
    },
    {
      type: "input",
      name: "altura",
      message: "Qual sua altura? ",
      validate: function(value) {
        let pass = value.match(/^\d+.\d{2}$/);
        if (pass) {
            return true;
        }     
        return "Digite uma altura válido - Ex > 1.80"     
    }
    },
  ])
  .then((answers) => {
    const { peso, altura } = answers;
    result(peso, altura);
  });

function result(peso, altura) {
//   const peso = readline.questionFloat("Qual seu peso? ");
//   const altura = readline.questionFloat("Qual sua altura? ");

  const imc = calculaIMC(peso, altura);

  // Agora, modifique o script acima para que ele informe se a pessoa,
  // cujo IMC foi calculado, possui algum nível de obesidade.

  if (imc < 18.5) {
    console.log("Abaixo do peso (magreza)");
    return;
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso Normal");
    return;
  } else if (imc >= 25 && imc <= 29.9) {
    console.log("Acima do peso (sobrepeso)");
    return;
  } else if (imc >= 30 && imc <= 34.9) {
    console.log("Obesidade grau I");
    return;
  } else if (imc >= 35 && imc <= 39.9) {
    console.log("Obesidade grau II");
    return;
  } else {
    console.log("Obesidade grau III e IV");
    return;
  }
}

// result();
