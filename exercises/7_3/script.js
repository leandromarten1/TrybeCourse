
function getRandomCard() {
  const cards = ['cinco-ouros', 'nove-espadas', 'quatro-paus', 'seis-copas', 'sete-espadas', 'sete-paus', 'tres-ouros'];
    let randomCard = Math.floor(Math.random() * cards.length);
    return cards[randomCard]
}

function getRandomAnimation() {
  const animations = ['rotate', 'flipx', 'flipy', 'scale'];
  let randomAnimation = Math.floor(Math.random() * animations.length);
  return animations[randomAnimation];
}

function addCard() {
  let element = document.createElement('div');
  let divMae = document.querySelector('.row');
  let randomCard = getRandomCard();
  let randomAnim = getRandomAnimation(); 
  element.classList = 'carta';
  element.classList.add(randomCard);
  element.classList.add(randomAnim);
  divMae.appendChild(element);
}

const baralho = document.querySelector('#baralho');
baralho.addEventListener('click', addCard);

