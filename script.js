@@ -1,47 +1,15 @@
const suits = ['♠', '♥', '♦', '♣'];
const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const kartya = document.getElementById('kartya');

let deck = [];

function createDeck() {
  deck = [];
  suits.forEach(suit => {
    values.forEach(value => {
      deck.push({ suit, value });
    });
  });
  deck.sort(() => Math.random() - 0.5);
}

function drawCard() {
  if (deck.length === 0) return;
  const card = deck.pop();
  const waste = document.getElementById('waste');
  const div = document.createElement('div');
  div.className = 'card';
  div.textContent = card.value + card.suit;
  waste.innerHTML = '';
  waste.appendChild(div);
}

function displayStock() {
  const stock = document.getElementById('stock');
  stock.addEventListener('click', drawCard);
}
kartya.addEventListener('mousedown', function(e) {
  function mozgat(event) {
    kartya.style.left = event.pageX + 'px';
    kartya.style.top = event.pageY + 'px';
  }

function init() {
  createDeck();
  displayStock();
  document.addEventListener('mousemove', mozgat);

  // Tableau oszlopok (6 oszlop pl.)
  const tableau = document.getElementById('tableau');
  for (let i = 0; i < 6; i++) {
    const pile = document.createElement('div');
    pile.className = 'pile';
    const card = deck.pop();
    pile.innerHTML = card.value + card.suit;
    tableau.appendChild(pile);
  }
}
  document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', mozgat);
  }, { once: true });
});

init();

