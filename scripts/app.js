let slideIndex = 1;
const slidesToShow = 3;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName('cart--items');
	if (n > slides.length - 2) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length - 2;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < slidesToShow; i++) {
		slides[slideIndex - 1 + i].style.display = 'block';
	}
	if (slideIndex + 2 > slides.length - 1) {
		nextButton.style.display = 'none';
	} else {
		nextButton.style.display = 'block';
	}
	if (slideIndex == 1) {
		prevButton.style.display = 'none';
	} else {
		prevButton.style.display = 'block';
	}
}

prevButton.addEventListener('click', () => {
	plusSlides(-1);
});

nextButton.addEventListener('click', () => {
	plusSlides(1);
});

document.addEventListener(
	'touchstart',
	function (event) {
		touchstartX = event.touches[0].clientX;
		touchstartY = event.touches[0].clientY;
	},
	false
);

document.addEventListener(
	'touchend',
	function (event) {
		touchendX = event.changedTouches[0].clientX;
		touchendY = event.changedTouches[0].clientY;
		handleGesture();
	},
	false
);

document.addEventListener(
	'mousedown',
	function (event) {
		touchstartX = event.clientX;
		touchstartY = event.clientY;
	},
	false
);

document.addEventListener(
	'mouseup',
	function (event) {
		touchendX = event.clientX;
		touchendY = event.clientY;
		handleGesture();
	},
	false
);

function handleGesture() {
	if (touchendX <= touchstartX && nextButton.style.display != 'none') {
		plusSlides(1);
	}
	if (touchendX >= touchstartX && prevButton.style.display != 'none') {
		plusSlides(-1);
	}
}
