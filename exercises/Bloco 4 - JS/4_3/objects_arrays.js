let person = {
  name: 'Margareth',
  lastName: 'Silva',
  age: 25,
  profession: 'nurse'
}

let colors = ['Red', 'Blue', 'Gray', 'Orange', 'Green'];

function about(){
  for(let i in person){

    console.log(person[i]);

  }
}
console.log(about());