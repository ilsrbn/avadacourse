var slidesOne = document.querySelector('.splide__list__mobile').children;
var prevButtonOne = document.querySelector('.prevButton');
var nextButtonOne = document.querySelector('.nextButton');

var slidesTwo = document.querySelector('.cards__mobile').children;
var prevButtonTwo = document.querySelector('.prevButton2');
var nextButtonTwo = document.querySelector('.nextButton2');

var index1 = 0;

var index2 = 0;

nextButtonOne.onclick = function () {
	index1 = changeSlide('next', slidesOne, index1);	
}

prevButtonOne.onclick = function () {
	index1 = changeSlide('prev', slidesOne, index1);
	
}

nextButtonTwo.onclick = function () {
	index2 = changeSlide('next', slidesTwo, index2);
}

prevButtonTwo.onclick = function () {
	index2 = changeSlide('prev', slidesTwo, index2);
}

function changeSlide(direction, slider, index) {
	console.log(index);
	if (direction == 'next') {
		index++;
		if (index == slider.length) {
			index = 0;
		}
	} else {
		if (index == 0) {
			index = slider.length - 1;
		} else {
			index--;
		}
	}
	for (i = 0; i < slider.length ; i++) {
		slider[i].classList.remove('active-toRight');
		slider[i].classList.remove('active-toLeft')
	}

	if (direction == 'next') {
		slider[index].classList.add('active-toRight');
	} else {
		slider[index].classList.add('active-toLeft');
	}

	console.log(index);

	return index;
}
