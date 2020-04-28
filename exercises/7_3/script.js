
function addCard() {
  let element = document.createElement('div');
  let divMae = document.querySelector('.row');
  element.classList = 'carta';
  divMae.appendChild(element);

}

const baralho = document.querySelector('#baralho');
baralho.addEventListener('click', addCard);

