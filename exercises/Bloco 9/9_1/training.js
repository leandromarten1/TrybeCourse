const arrayOfValues = [1, 2, 101, 3, 102, 55, 64, 77, 93, 111, 3];
const printValues = arrayOfValues.forEach((element) => {
  console.log(`Elemento do array ${element} x 33 = ${element * 33}`);
});


console.log(printValues);

const biggerthan100 = (e) => e > 100;

console.log(arrayOfValues.find(biggerthan100)); // 101
console.log(arrayOfValues.filter(biggerthan100));// [ 101, 102, 111];

//------------------------------------------------------------

const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

// -----------------------------------------------------------------------------------------------------
// Outra forma de se usar o filter é retornar um array sem o elemento desejado. É preciso remover o Ricardo do objeto agora, já que ele não é mais um estudante.

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => {
  return listStudents.filter((student) => student !== name); // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.
};

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]

// -------------------------------------------------------------------------------------------------------------------
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){ return a - b });
console.log(points); // [1, 5, 10, 25, 40, 100];

//A lógica é a seguinte: a função recebe, da sort, todos os elementos do array, em pares, e vai comparando-os. O formato é meuArray.sort((elemento1, //elemento2) => /* logica da função */). Ou seja: para o array [1, 2, 3, 4], a função receberá (1, 2), (1, 3), …, (3, 4) como parâmetros e ordenará o array com base em seu resultado. Se a operação de elemento1 com elemento2 der resultado negativo, elemento1 vai para trás. Caso contrário, vai para frente, para, de forma decrescente, só inverter elemento1 - elemento2 para elemento2 - elemento1. Novamente, o artigo do MDN é uma excelente fonte de informação para entender melhor.

