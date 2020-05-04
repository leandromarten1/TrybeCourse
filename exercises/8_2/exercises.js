const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurn = (obj, key, value) => {
  obj[key] = value;
  console.log(obj);  
};
//addTurn(lesson2, 'turno', 'tarde');

// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const allKeys = (obj) => {
  const result = Object.keys(obj);
  console.log(result);
}
//allKeys(lesson1);

// 3 Crie uma função para mostrar o tamanho de um objeto.

const sizeObj = (obj) => {
  const result = Object.keys(obj).length;
  console.log(`O tamanho do Objeto é: ${result}`);
}
//sizeObj(lesson3);

// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const allValues = (obj) => {
  const result = Object.values(obj);
  console.log(result);
}
//allValues(lesson2);

// 5 Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
//console.log(allLessons);

// 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
//console.log(allLessons.lesson1.numeroEstudantes);

function ex6(obj) {
  let total = 0;
  for (let i in obj) {
    //console.log(obj[i]);
    total += obj[i].numeroEstudantes;
  }
  return total;
};
//console.log(ex6(allLessons));

// 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValue = (obj, key) => {

  const output = Object.values(obj);
  console.log(output[key]);
}
//getValue(lesson1, 0);

// 8 Crie uma função que verifique se o par (chave / valor) existem na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verify = (obj, key, value) => {

  const arr = Object.entries(obj);
  for (let i in arr){
    if(arr[i][0] == key && arr[i][1] == value){
      return true;
    }
      return false;

  }
}
console.log(verify(lesson1, 'materia', 'Matemática'));