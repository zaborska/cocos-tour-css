const bestDealsEl = document.querySelector(".grid-best-deal-tours");

fetch("./json/best-deals.json")
  .then(function (resp) {
    return resp.json()
  })
  .then(function (deals) {
    deals.forEach(function (oneDeal) {
      bestDealsEl.innerHTML += `
        <div class="paris-tour" style="background-image: url(${oneDeal.photo});background-size: cover;">
          <p class="header-tour">${oneDeal.text}</p>
          <p class="header-tour">$${oneDeal.price}</p>
          <button class="add-to-cart-btn">
            <i class="fas fa-shopping-cart"></i>
            <div class="v-line"></div>
            Add to Cart
          </button>
        </div>
      `;
    });
  });

// Carousel
$('.carousel').carousel({
  interval: 2000
})