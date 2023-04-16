module.exports = {
	addAwesome: function (str) {
		return str + ' Awesome!';
	},
};

// module.exports = {
// 	cart: function () {
// 		function changeAmountItem() {
// 			document.querySelector('.cart-right').addEventListener('click', e => {
// 				if (
// 					e.target.classList.contains('counter__btn--increment') ||
// 					e.target.classList.contains('counter__btn--decrement')
// 				) {
// 					if (e.target.classList.contains('counter__btn--increment')) {
// 						const counter = e.target.closest('.counter');
// 						+counter.querySelector('.counter__input').value++;
// 					}

// 					if (e.target.classList.contains('counter__btn--decrement')) {
// 						const counter = e.target.closest('.counter');
// 						+counter.querySelector('.counter__input').value--;

// 						if (
// 							e.target.closest('.cart-right__list') &&
// 							counter.querySelector('.counter__input').value < 1
// 						) {
// 							e.target.closest('.cart-right__item').remove();
// 							updateCartItemsCount();
// 						}
// 					}
// 				}

// 				if (e.target.classList.contains('cart-item__remove')) {
// 					e.target.closest('.cart-right__item').remove();
// 					updateTotal();
// 					updateCartItemsCount();
// 				}

// 				if (e.target.classList.contains('counter__btn')) {
// 					updateTotal();
// 				}
// 			});
// 		}

// 		function updateTotal() {
// 			const cartItems = document.querySelectorAll('.cart-right__item');
// 			const subtotalPriceEl = document.querySelector('.subtotal-price');
// 			const shippingEl = document.querySelector('.shipping-price');
// 			const taxEl = document.querySelector('.tax-price');
// 			const totalPriceEl = document.querySelector('.total-price');

// 			let subtotalPrice = 0;

// 			cartItems.forEach(item => {
// 				const itemAmount = item.querySelector('.counter__input');
// 				const itemPrice = item.querySelector('.cart-item__price span');
// 				const currentPrice = +itemAmount.value * +itemPrice.innerText;
// 				subtotalPrice += currentPrice;
// 			});

// 			subtotalPriceEl.textContent = subtotalPrice;

// 			totalPriceEl.textContent = +shippingEl.innerText + +taxEl.innerText + subtotalPrice;

// 			if (!cartItems.length) {
// 				shippingEl.innerText = 0;
// 				taxEl.innerText = 0;
// 				subtotalPriceEl.innerText = 0;
// 				totalPriceEl.innerText = 0;
// 			}
// 		}

// 		function updateCartItemsCount() {
// 			const cartItems = document.querySelectorAll('.cart-right__item');
// 			const cartCount = document.querySelector('.cart-btn .count');
// 			cartCount.innerText = cartItems.length;
// 		}

// 		changeAmountItem();

// 		(function showMenu() {
// 			if (window.matchMedia('(max-width: 991px)').matches) {
// 				const menuBtn = document.querySelector('.cart-btn');
// 				const menu = document.querySelector('.cart-right');
// 				const body = document.querySelector('body');

// 				if (menuBtn && menu) {
// 					menuBtn.addEventListener('click', e => {
// 						menu.classList.toggle('active');
// 						body.classList.toggle('no-scroll');
// 						menuBtn.classList.toggle('active');
// 					});
// 				}
// 			}
// 		})();
// 	},
// };

// alert('aaaa')
