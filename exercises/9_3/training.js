// Spread Operator

const arr = [1, 2, 4];
const newArr = [...arr, 6] // O ...(nome do array) copia o array e depois acresce 6, pode ser colocado antes. 

const objArr = [
  {
    nome: 'João',
    idade: 18,
  },
  {
    nome: 'Márcia',
    idade: 40,
  },
  {
    nome: 'Pedro',
    idade: 20,
  }
];

const newObjArr = [...objArr, {nome: 'André', idade: 29,}];
console.log(newObjArr);
//--------------------------------------------------------------------------------------------------

// Parametro REST

// es6 rest parameter 
function fun(...input){ 
	let sum = 0; 
	for(let i of input){ 
		sum+=i; 
	} 
	return sum; 
} 
console.log(fun(1,2)); //3 
console.log(fun(1,2,3)); //6 
console.log(fun(1,2,3,4,5)); //15				 
 //---------------------------------------------------------------------------------------------------

 // Object Destructuring

 const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};


const {today} = HIGH_TEMPERATURES; // {today} - faz referencia a key do obj.
const {tomorrow} = HIGH_TEMPERATURES;

const {today:highToday} = HIGH_TEMPERATURES; // Seta o valor da KEY today para a variavel highToday;
const {tomorrow: highTomorrow} = HIGH_TEMPERATURES;

//----------------------------------------------------------------------------------------------

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

  
const {today: {low:lowToday}} = LOCAL_FORECAST; // qual key quer usar (today), seta o valor da key Low na variavel lowToday.
const {today: {high:highToday}} = LOCAL_FORECAST;
