// Exercise 6

function palindrome(word){
  let str = word.split('').reverse().join('');

  if(str === word){
    return true;
  }else{
    return false;
  }
 
}
console.log(palindrome("amanhã"));