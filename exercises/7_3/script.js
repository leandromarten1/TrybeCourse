
function getRandomCard() {
  const cards = ['cinco-ouros', 'nove-espadas', 'quatro-paus', 'seis-copas', 'sete-espadas', 'sete-paus', 'tres-ouros'];
    let randomCard = Math.floor(Math.random() * cards.length);
    return cards[randomCard]
}

function addCard() {
  let element = document.createElement('div');
  let divMae = document.querySelector('.row');
  let randomCard = getRandomCard();  
  element.classList = 'carta';
  element.classList.add(randomCard);
  divMae.appendChild(element);

}

const baralho = document.querySelector('#baralho');
baralho.addEventListener('click', addCard);

