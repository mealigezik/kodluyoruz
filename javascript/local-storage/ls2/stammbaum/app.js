// Aile bireylerinin kartlarını oluşturuyoruz
function createCards() {
    for (let i = 0; i < 15; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
  
      // Ön yüz
      let cardFront = document.createElement("div");
      cardFront.classList.add("card-front");
      card.appendChild(cardFront);
  
      // Arka yüz
      let cardBack = document.createElement("div");
      cardBack.classList.add("card-back");
      card.appendChild(cardBack);
  
      // Bilmece
      let riddle = document.createElement("p");
      riddle.textContent = "Ben kim miyim?";
      cardFront.appendChild(riddle);
  
      // Kimlik
      let identity = document.createElement("p");
      identity.textContent = "Ben [isim]'im.";
      cardBack.appendChild(identity);
  
      // Kartı ekrana ekliyoruz
      document.querySelector(".card-container").appendChild(card);
    }
  }
  
  // Kartlara tıklanma olayı
  document.querySelector(".card").addEventListener("click", function() {
    // Kartın arka yüzünü gösteriyoruz
    this.querySelector(".card-back").style.display = "block";
  });
  
  // Sayfayı yüklendiğinde kartları oluşturuyoruz
  window.onload = createCards;
  