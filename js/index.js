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
          <button class="add-to-cart-btn" data-text="${oneDeal.text}" data-price="${oneDeal.price}">
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

function addToCart(event) {
  const cartCountEl = document.querySelector('#cart-count');
  const cartItemsEl = document.querySelector('#cart-items');
  const cartTotalEl = document.querySelector('#cart-total');
  const clickedElData = event.target.dataset;

  const newCount = Number(cartCountEl.innerHTML) + 1;
  const newTotal = Number(cartTotalEl.innerHTML) + Number(clickedElData.price);

  cartCountEl.innerHTML = newCount;

  cartItemsEl.innerHTML += `<tr>
                <th scope="row">${newCount}</th>
                <td>${clickedElData.text}</td>
                <td>$${clickedElData.price}</td>
              </tr>`;

  cartTotalEl.innerHTML = newTotal;
}


// Carousel
$('.carousel').carousel({
  interval: 2000
})