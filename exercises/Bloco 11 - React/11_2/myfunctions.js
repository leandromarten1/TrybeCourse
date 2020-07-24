// Criar 3 funções
// A primeira deve receber uma string e retorná-la em caixa alta.
// A segunda deve também receber uma string e retornar só a primeira letra.
// A terceira deve receber duas strings e concatená-las.

// Utilizado para os Exercicios 4 e 5

const convertToUpperCase = (str) => {
  return str.toUpperCase();
};

// console.log(convertToUpperCase('papai'));

const firstLetter = (str) => {
  const letter = str.split('');
  return letter[0];  
};

console.log(firstLetter('America'));

const concatenation = (stringA, stringB) => {
  return `${stringA} ${stringB}`;
};

// console.log(concatenation('minha mãe', 'é linda'));

module.exports = { convertToUpperCase, firstLetter, concatenation };