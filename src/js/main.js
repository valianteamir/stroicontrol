'use strict';

const modalBtn = document.querySelectorAll('.button');
const modal    = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal__close');
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-button');

menuBtn.addEventListener('click', function(){
	header.classList.toggle('header_active');
	menuBtn.classList.toggle('menu-button_active');
});

modalBtn.forEach((item) => {
	item.addEventListener('click', function(){
		modal.classList.add('modal-bg_active');
	});
});

modalClose.addEventListener('click', function(){
	modal.classList.remove('modal-bg_active');
});

const swiper = new Swiper('.why-slider', {
	autoHeight: true,
  pagination: {
    el: '.why-slider__pagination',
		clickable: true,
  },
	navigation: {
    nextEl: '.swiper-button-next',
  },
});
