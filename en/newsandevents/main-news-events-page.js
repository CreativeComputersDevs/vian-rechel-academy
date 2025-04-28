const cards = document.querySelectorAll('.newseventscard');
const showMoreBtn = document.getElementById('exploreMoreBtn');
const cardsPerClick = 6;
let currentVisible = 0;

function showNextCards() {
  for (let i = currentVisible; i < currentVisible + cardsPerClick && i < cards.length; i++) {
    cards[i].style.display = 'flex';
  }

  currentVisible += cardsPerClick;

  if (currentVisible >= cards.length) {
    showMoreBtn.style.display = 'none';
  }
}

// Initially show first 6
showNextCards();

showMoreBtn.addEventListener('click', showNextCards);
