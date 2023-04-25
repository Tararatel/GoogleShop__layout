const swiper = new Swiper('.swiper', {
	slidesPerView: 3,
	// freeMode: true,
	centeredSlides: true,
	spaceBetween: 23,
	grabCursor: true,
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 23,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		// when window width is >= 640px
		1001: {
			slidesPerView: 6,
			spaceBetween: 23,
		},
	},
});

const burgerButton = document.querySelector('.header__navigation__burger');
const closeButton = document.querySelector('.header__navigation__links_close');
const menu = document.querySelector('.header__navigation__links');

burgerButton.addEventListener('click', (e) => {
	if ((menu.style.display = 'none')) {
		menu.style.display = 'flex';
	}
});

closeButton.addEventListener('click', (e) => {
	if ((menu.style.display = 'flex')) {
		menu.style.display = 'none';
	}
});
