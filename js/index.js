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
          <button class="add-to-cart-btn" onclick="">
            <i class="fas fa-shopping-cart"></i>
            <div class="v-line"></div>
            Add to Cart
          </button>
        </div>
      `;
    });

    // buttons are ready
    attachEventsToCartBtns();
  });

function attachEventsToCartBtns() {
  const btns = document.querySelectorAll('.add-to-cart-btn');

  btns.forEach(function (btn) {
    btn.addEventListener('click', addToCart);
  });
}

function addToCart() {
  console.log('ADD');
}


// Carousel
$('.carousel').carousel({
  interval: 2000
})