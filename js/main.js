let slider = document.getElementById('price-slider');
let views = document.getElementById('views');
let dollars = document.getElementById('dollars');
let discount = document.querySelector('.discount');

let prices = [8, 12, 16, 24, 36];
let totalViews = ['10K', '50K', '100K', '500K', '1M'];

views.innerText = totalViews[2];
dollars.innerText = prices[2].toFixed(2);
slider.style.background = 'linear-gradient(to right, #10d5c2 50%, #eaeefb 50%)';
slider.style.borderRadius = '8px';

function totalPrice() {
  views.innerText = totalViews[slider.value - 1];

  if (discount.checked) {
    dollars.innerText = (0.75 * prices[slider.value - 1]).toFixed(2);
  } else {
    dollars.innerText = prices[slider.value - 1].toFixed(2);
  }
}

function sliderColor() {
  let range = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background =
    'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' +
    range +
    '%, #eaeefb ' +
    range +
    '%, #eaeefb 100%)';
}

slider.addEventListener('input', totalPrice);
slider.addEventListener('input', sliderColor);
discount.addEventListener('click', totalPrice);
