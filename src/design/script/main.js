'use strict';

svg4everybody();

// ==================================== mobile menu
const headerMblBtnHamburger = document.querySelector('.header__mobile-btn._hamburger');
const headerMblBtnSearch = document.querySelector('.header__mobile-btn._search');
const navMbl = document.querySelector('.nav-mbl');
const navMblBtnClose = document.querySelector('.nav-mbl__btn-close');
const navMblBody = document.querySelector('.nav-mbl__body');
const headerSearchForm = document.querySelector('.header__search-form');
const headerTop1 = document.querySelector('.header__top-inner-1');
const headerTop2 = document.querySelector('.header__top-inner-2');
const searchBtnBack = document.querySelector('.search__btn-back');
const searchInput = document.querySelector('.search__input');

window.addEventListener('resize', function() {
	if(headerSearchForm && getComputedStyle(headerSearchForm).display != 'none') {
		hideMblMenu();
	}

	if(headerTop2 && getComputedStyle(headerSearchForm).display != 'none') {
		headerTop1.classList.remove('d-none');
		headerTop2.classList.add('d-none');
	}
})

if(headerMblBtnHamburger) {
	headerMblBtnHamburger.addEventListener('click', function(e) {
		showMblMenu();
	});
	navMblBtnClose.addEventListener('click', function() {
		hideMblMenu();
	});
	navMbl.addEventListener('click', function(e) {
		if(e.target.classList.contains('nav-mbl')) {
			hideMblMenu();
		}
	});
	headerMblBtnSearch.addEventListener ('click', function() {
		headerTop1.classList.add('d-none');
		headerTop2.classList.remove('d-none');
		searchInput.focus();
	})
	
	searchBtnBack.addEventListener('click', function() {
		headerTop2.classList.add('d-none');
		headerTop1.classList.remove('d-none');
	})
}


function showMblMenu() {
	document.body.classList.add('overflow-hidden');
	navMbl.classList.remove('d-none');
	setTimeout(function() {
		navMbl.classList.add('_active');
	}, 10);
}

function hideMblMenu() {
	document.body.classList.remove('overflow-hidden');
	navMbl.classList.remove('_active');
	setTimeout(function() {
		navMbl.classList.add('d-none');
	}, 300);
}

// ================================================= modal
// $('[data-mfp-src="#get-discount"]').magnificPopup({
// 	showCloseBtn: false,
// 	midClick: true
// }).magnificPopup('open');


$('[data-mfp-src="#get-discount-2"]').magnificPopup({
	showCloseBtn: false,
	midClick: true 
});

$('[data-mfp-src="#how-it-works"]').magnificPopup({
	showCloseBtn: false,
	midClick: true 
});

$('[data-mfp-src="#reseller-how-it-works"]').magnificPopup({
	showCloseBtn: false,
	midClick: true 
});

$('[data-mfp-src="#not-convinced"]').magnificPopup({
	showCloseBtn: false,
	midClick: true 
});

$('[data-mfp-src="#login"]').magnificPopup({
	showCloseBtn: false,
	midClick: true 
});

$('[data-mfp-src="#premium-file"]').magnificPopup({
	showCloseBtn: false,
	midClick: true 
});

$('[data-mfp-src="#register"]').magnificPopup({
	showCloseBtn: false,
	midClick: true 
});

$('[data-mfp-src="#premium-bundle"]').magnificPopup({
	showCloseBtn: false,
	midClick: true
});

if(typeof examIdAr != 'undefined') {
	for(let i = 0; i < examIdAr.length; i++) {
		let examIdArEl = `[data-mfp-src="#modal-${examIdAr[i]}"]`;

		$(examIdArEl).magnificPopup({
			showCloseBtn: false,
			midClick: true 
		});
	}
}

const modalBtnCloseAr = document.querySelectorAll('[data-btn="close-modal"]');
if(modalBtnCloseAr != null) {
	for(let i = 0; i < modalBtnCloseAr.length; i++) {
		modalBtnCloseAr[i].addEventListener('click', function() {
			$.magnificPopup.close();
		})
	}	
}

const modalBtnCloseAr2 = document.querySelectorAll('[data-btn="close-modal-2"]');
if(modalBtnCloseAr2 != null) {
	for(let i = 0; i < modalBtnCloseAr2.length; i++) {
		modalBtnCloseAr2[i].addEventListener('click', function() {
			$.magnificPopup.close();
		})
	}	
}

// ================================================== trim string
// trimString(".cart-cert__title", 13);

// function trimString(string, stringLength) {
//   $(string).text(function (i, text) {
//     if (text.length >= stringLength) {
//       $(this).addClass('overflow-ellipsis');
//     }
//   });
// }

// ================================================== slider ===
$('.slick-1').slick({
	// lazyLoad: 'progressive',
	dots: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 5,
	prevArrow: '<button type="button" class="slick-arrow slick-prev _orange"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-arrow slick-next _orange"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1700,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}
	]
});


$('.slick-2').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	centerMode: true,
	variableWidth: true,
	prevArrow: '<button type="button" class="slick-arrow slick-prev _grey"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-arrow slick-next _grey"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
});


$('.slick-3').slick({
	dots: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: '<button type="button" class="slick-arrow slick-prev _orange"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-arrow slick-next _orange"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
	]
});

if($('.slick-4 .slider-3__item').length > 1) {
	$('.slick-4').slick({
		dots: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 3,
		prevArrow: '<button type="button" class="slick-arrow slick-prev _orange"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next _orange"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
		centerMode: true,
		centerPadding: '50px',
		responsive: [
			{
				breakpoint: 1510,
				settings: {
					centerPadding: '25px',
				}
			},
			{
				breakpoint: 992,
				settings: {
					centerPadding: '25px',
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					centerMode: false,
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
		]
	});
} else {
	$('.slick-4').slick({

		slidesToShow: 1
	})
}




$('.slick-5').slick({
	dots: false,
	speed: 300,
	slidesToShow: 6,
	slidesToScroll: 6,
	infinite: false, 
	prevArrow: '<button type="button" class="slick-arrow slick-prev _orange"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-arrow slick-next _orange"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1501,
			settings: {
			}
		},
		{
			breakpoint: 1200,
			settings: {
				arrows: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
	]
});



$('.slick-6').slick({
	infinite: false,
	dots: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	waitForAnimate: false,
	prevArrow: '<button type="button" class="slick-arrow slick-prev _orange"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-arrow slick-next _orange"><svg aria-hidden="true"><use xlink:href="../design/img/symbol/sprite.svg#slider-arrow-next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: false,
			}
		},
		{
			breakpoint: 992,
			settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 470,
			settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
	]
});

$('.slick-7').slick({
	dots: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});


// ============================================================== slider-magnific
$('.slider-4__list').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
});

$('.slider-2__list').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
});



// ========================================================= reseller-progress ===
const resProgrLevels = document.querySelectorAll('.res-progr__level');
const resProgrInnerLine = document.querySelector('.res-progr__inner-line');

for(let i = 0; i < resProgrLevels.length; i++) {
	if(resProgrLevels[i].classList.contains('_active')) {
		for(let ii = 0; ii <= i; ii++) {
			resProgrLevels[ii].querySelector('.res-progr__point').classList.add('_orange');
		}

		let innerLineWidht = 25 * i;
		resProgrInnerLine.style.width = innerLineWidht + '%';
	}
}


// ===================================================== input file
let inputFile = document.querySelectorAll('.input-file__input');
Array.prototype.forEach.call(inputFile, function (input) {
	let label = input.nextElementSibling,
	inputFileStatus = label.querySelector('.input-file__status').innerText;

	input.addEventListener('change', function (e) {
		let fileName = '';
		fileName = e.target.value.split('\\').pop();

		let countFiles = '';
		if (this.files && this.files.length >= 1)
			countFiles = this.files.length;

		if (countFiles)
		
			// label.querySelector('.input-file__status').innerText = 'Selected: ' + countFiles;
			label.querySelector('.input-file__status').innerText = fileName;
		else
			label.querySelector('.input-file__status').innerText = inputFileStatus;
	});
});

$('#upload-form').submit(function (e) {
	if (!($('#file-load')[0].files[0].size < 62914560)) { // 60 MB (this size is in bytes)
			alert("File is over 60Mb in size!");
			e.preventDefault();
	}
});


// =================================================== btn-about
$('.btn-about').on('click', function() {
	$(this).prev().addClass('_show');
	$(this).addClass('d-none');
});


// ==================================================== rating star
const starForm = document.querySelector('.star-form');
// const starFormItem = document.querySelectorAll('.star-form__item');
const starFormLabel = document.querySelectorAll('.star-form__label');
const starFormInput = document.querySelectorAll('.star-form__input');


if(starForm) {
	for(let i = 0; i < starFormLabel.length; i++) {
		starFormLabel[i].addEventListener('click', function() {
			for(let i = 0; i < starFormLabel.length; i++) {
				starFormLabel[i].classList.remove('_active');
			}

			for(let ii = 0; ii <= i; ii++) {
				starFormLabel[ii].classList.add('_active');
			}
		})

		starFormLabel[i].addEventListener('mouseenter', function() {
			for(let i = 0; i < starFormLabel.length; i++) {
				starFormLabel[i].classList.remove('_hover');
			}

			for(let ii = 0; ii <= i; ii++) {
				starFormLabel[ii].classList.add('_hover');
			}		
		})

		starFormLabel[i].addEventListener('mouseleave', function() {
			for(let i = 0; i < starFormLabel.length; i++) {
				starFormLabel[i].classList.remove('_hover');
			}
		})
	}	
}


// =================================================== video tab
const slider5List = document.querySelector('.slider-5__list');
const slider5Item2 = document.querySelectorAll('.slider-5__item-2');
const tabS = document.querySelector('.tab-s');
const tabSItems = document.querySelectorAll('.tab-s__item');

const btnOpenTab = document.querySelector('[data-btn="open-tab"]');
if(btnOpenTab) {
	btnOpenTab.addEventListener('click', function() {
		slider5Item2[0].click();
	})
}

for(let i = 0; i < slider5Item2.length; i++) {
	slider5Item2[i].addEventListener('click', function() {
		
		tabS.classList.remove('d-none');
		
		for(let i = 0; i < tabSItems.length; i++) {
			tabSItems[i].classList.add('d-none');
			tabSItems[i].classList.remove('_fade-in');
		}

		tabSItems[i].classList.remove('d-none');
		
		setTimeout(function() {
			tabSItems[i].classList.add('_fade-in');
		},1);
	})
}


// ============================================== hide empty table
// $("table:not(:has(td))").each(function (index) {
// 	$(this).hide();
// });


// =================================================== copy discount
var copyCodeButton = document.querySelector('[data-promo-code="copy"]');

if(copyCodeButton) {
	copyCodeButton.addEventListener('click', onCopyCodeButtonClick);

	function onCopyCodeButtonClick(evt) {
		evt.preventDefault();
		// evt.target.classList.add('button--copy--success');
		evt.target.textContent = 'Copied';
		var range = document.createRange();
		range.selectNode(document.querySelector('[data-promo-code="value"]'));
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
	};
}


// ==================================================== member-nav _mobile
const membNavMobileLink = document.querySelectorAll('.memb-nav-mobile__link');

if(membNavMobileLink) {
	for(let i = 0; i < membNavMobileLink.length; i++) {
		membNavMobileLink[i].addEventListener('click', function() {
			membNavMobileLink[i].classList.toggle('_active');
		})
	}
}

// ===================================================== smooth scroll through anchor links
var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 400);
  return false;
});


// ==================================================== lazy load
const lazyLoadInstance = new LazyLoad({
	elements_selector: ".lazy"
});

// ===================================================== style
const indivCardAr = document.querySelectorAll('.indiv-card');
if(indivCardAr.length) {
	indivCardAr[indivCardAr.length - 1].style.borderColor = 'transparent';
}


// ========================================================= arrow top
$(window).scroll(function () {
	if ($(this).scrollTop() > 1500) {
		// $('.btn-up').fadeIn();
		$('.btn-up').css({"transform": "translateX(0)"});
	} else {
		$('.btn-up').css({"transform": "translateX(100px)"});
	}
});

$('.btn-up').on('click', function () {
	$('body,html').animate({
		scrollTop: 0
	}, 500);
});


// ======================================================= like dislike
$('#likeBtn').on('click', 'a', function () {
	var type, check;
	if ($(this).attr('id') == 'ilike') {
		type = 'like_click';
	}	else {
		type = 'dislike_click';
	}

	check = $(this).attr("class");
	$.ajax({
		type: "POST",
		url: urlVote,
		data: {'action': type, 'check': check, 'exam': fileId},
		cache: false,
		success: function (response) {
			document.location.reload(true)
		}
	});
});

// ============================================================================ btn-scale
const btnScale = document.querySelector('[data-js="btn-scale"]');
if(btnScale) {
	btnScale.addEventListener('click', function() {
		document.querySelector('.slick-current').click();
	})
}

// ======================================================= video player
let videoListOpen = document.querySelectorAll('[data-js="video-list"]');

for (let i = 0; i < videoListOpen.length; i++) {
  videoListOpen[i].addEventListener('click', function(event) {
		let videoListBtnAr = this.querySelectorAll('[data-video-btn="open"]');
		let indexCurrentElement = Number(event.target.getAttribute('data-index')) - 1;
		if(videoListBtnAr.length) {
			openPlayer(makeVideoList(videoListBtnAr), indexCurrentElement);
		}
  })
}

function makeVideoList(videoListBtnAr) {
  let videoList = [];

  for (let i = 0; i < videoListBtnAr.length; i++) {
    let id = videoListBtnAr[i].getAttribute('data-id');
    let title = videoListBtnAr[i].getAttribute('data-title');
    videoList.push(new Object({id: id, title: title}))
  }
  return videoList;
}


function openPlayer(videoList, index) {
  const player = new Plyr('#player', {
    controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']
  });

  $.magnificPopup.open({
    items: {
      src: '#video-popup'
    },
    // closeBtnInside: false,
    type: 'inline',
    callbacks: {
      beforeClose: function() {
        player.destroy();
      }
    }
  }, 0);


  let videoPlayer = document.querySelector('#player');

  let plyrControls = document.querySelector('.plyr__controls');
  let plyrControl = document.querySelector('.plyr__control');

  plyrControls.insertAdjacentHTML('afterbegin', '<div class="player-title"></div>');
  let videoTitle = document.querySelector('.player-title');

  plyrControl.insertAdjacentHTML('beforebegin', '<button type="button" class="plyr-prev"></button>');
  plyrControl.insertAdjacentHTML('afterend', '<button type="button" class="plyr-next"></button>');

  let plyrPrev = document.querySelector('.plyr-prev');
  let plyrNext = document.querySelector('.plyr-next');


  let source = videoPath + videoList[index].id;

  videoPlayer.setAttribute('src', source);
  videoTitle.innerHTML = videoList[index].title;

  checkButtons(videoList, index);


  plyrPrev.addEventListener('click', function() {
    index--;

    source = videoPath + videoList[index].id;

    videoPlayer.setAttribute('src', source);

    videoTitle.innerHTML = videoList[index].title;

    checkButtons(videoList, index);
  });

  plyrNext.addEventListener('click', function() {
    index++;

    source = videoPath + videoList[index].id;

    videoPlayer.setAttribute('src', source);

    videoTitle.innerHTML = videoList[index].title;

    checkButtons(videoList, index);
  });


  function checkButtons(videoList, index) {
    if (index === 0) {
      plyrPrev.setAttribute('disabled', 'disabled');
    } else {
      plyrPrev.removeAttribute('disabled');

    }
    if (index === videoList.length - 1) {
      plyrNext.setAttribute('disabled', 'disabled');
    } else {
      plyrNext.removeAttribute('disabled');
    }
  }
}


// ============================================================ stickFooter
(function () {
	let isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	let stickFooter = function () {
		let FOOTER = document.querySelector('footer');
		let MAIN = document.querySelector('main');
		let BODY = document.querySelector('body');
		let footerHeight = FOOTER.offsetHeight;
		BODY.style.position = 'relative';
		MAIN.style.marginBottom = footerHeight + 'px';
		FOOTER.style.position = 'absolute';
		FOOTER.style.bottom = '0';
		FOOTER.style.left = '0';
		FOOTER.style.width = '100%';
	};

	if (isIE11) {
		stickFooter();
		window.addEventListener('resize', stickFooter);
	}
})();
