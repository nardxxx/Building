// const swiper = new Swiper('.swiper', {
// 	direction: 'vertical',
// 	loop: true,
// 	slidesPerView: 'auto',
// 	autoHeight: true,
// 	effect: 'coverflow',
// 	coverflowEffect: {
// 		rotate: 0,
// 		slideShadows: false,
// 	},
// 	// centeredSlides: true,

// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	breakpoints: {
// 		768: {

// 		}
// 	},
// 	on: {
// 		slideChange: function () {
// 			var activeIndex = this.activeIndex;
// 			var realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
// 			$('.swiper-slide').removeClass('swiper-slide-nth-prev-2 swiper-slide-nth-next-2');
// 			$('.swiper-slide[data-swiper-slide-index="' + realIndex + '"]').prev().prev().addClass('swiper-slide-nth-prev-2');
// 			$('.swiper-slide[data-swiper-slide-index="' + realIndex + '"]').next().next().addClass('swiper-slide-nth-next-2');
// 		},
// 	}
// });
document.querySelector('.wrapper').classList.add('loaded');

//MENU BURGER
// document.querySelector('.icon-menu__item').addEventListener('click', e => {
//   e.classList.toggle('active');
//   document.querySelector('.menu__body').classList.toggle('active');
//   document.querySelector('body').classList.toggle('lock');
// });

//INTERACTIVE BACKGROUND
function ibg() {
  document.querySelectorAll('.ibg').forEach(ibg => {
    if (ibg.querySelector('img')) {
      ibg.style.backgroundImage = `url(${ibg.querySelector('img').getAttribute('src')})`;
    }
  });
}
// ibg();


const tabsContent = document.querySelectorAll('.wedrive__tabs ~ .wedrive__tabs-content'),
  tabsButtons = document.querySelectorAll('.wedrive__tab');



function showTab(i = 0) {
  tabsContent.forEach(e => e.style.display = 'none');
  tabsContent[i].style.display = 'block';
  tabsButtons.forEach(tab => tab.classList.remove('wedrive__tab_active'));
  tabsButtons[i].classList.add('wedrive__tab_active');
}
showTab();

function checkIfIt(e) {
  tabsButtons.forEach((i, k) => {
    if (i == e.currentTarget) {
      showTab(k);
    }
  });
}

tabsButtons.forEach(tab => {
  tab.addEventListener('click', e => {
    checkIfIt(e);
  });
});


const accordions = document.querySelectorAll(".spoiler-answer");

const openAccordion = (accordion) => {
  const content = accordion.querySelector(".spoiler-answer__text");
  accordion.classList.add("spoiler-answer_active");
  content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector(".spoiler-answer__text");
  accordion.classList.remove("spoiler-answer_active");
  content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
  const intro = accordion.querySelector(".spoiler-answer__close");
  const content = accordion.querySelector(".spoiler-answer__text");
  intro.onclick = () => {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      accordions.forEach((accordion) => closeAccordion(accordion));
      openAccordion(accordion);
    }
  };
});





// var $grid = $('.grid').masonry({
//   itemSelector: '.grid-item',
//   // use element for option
//   columnWidth: '.grid-sizer',
//   percentPosition: true,
//   // gutter: 30,
// });
// // layout Masonry after each image loads
// $grid.imagesLoaded().progress(function () {
//   $grid.masonry('layout');
// });

