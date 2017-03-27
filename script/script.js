var imgCarousel = (function() {
	var carouselImages = [
		{
			index: 0,
			src: "img/tom1.jpg",
			href: "#",
			descr: "Lorem ipsum dolor sit amet",
			alt: "Tom"
		},
		{
			index: 1,
			src: "img/khe.jpg",
			href: "#",
			descr: "Lorem ipsum dolor",
			alt: "Khe berga"
		},
		{
			index: 2,
			src: "img/what.jpg",
			href: "#",
			descr: "Who cares?",
			alt: "Who does?"
		},
		{
			index: 3,
			src: "img/spurdo.png",
			href: "#",
			descr: "Lorem ipsum dolor sit",
			alt: "Spurdo face"
		},
		{
			index: 4,
			src: "img/atlas.png",
			href: "#",
			descr: "Lorem ipsum",
			alt: "Atlas"
		}
	];

	function scrollLeft() {
		var activeItem = document.getElementsByClassName('active');
		var activeIndex = activeItem[0].childNodes[1].childNodes[1].title;

		console.log(carouselImages[activeIndex]);

		// get the image that will fade and scroll in from the side
		// 
		// swap classes
		// a loop that changes width, height, right, left to match adjacent item's attribs

	}

	function scrollRight() {
		var activeItem = document.getElementsByClassName('active');
		var activeIndex = activeItem[0].childNodes[1].childNodes[1].title;


	}

	function scrollTo(item) {
		// check if clicked item's index < or > active item's index
		// scroll left/right so many times (if 99 images apart then...)
	}

	return {
		scrollLeft: scrollLeft,
		scrollRight: scrollRight,
		scrollTo: scrollTo
	}
})();