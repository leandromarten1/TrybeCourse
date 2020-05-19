function palindrome(string) {
  if (string.includes(' ')) return false;
  const reverse = string.split('').reverse().join(''); // separa, inverte, junta
  if (string.toLowerCase() === reverse.toLowerCase()) { // testa de a string é igual ao reverso.
    return true;
  }
  return false;
}

module.exports = palindrome;