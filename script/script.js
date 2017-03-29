var imgCarousel = (function() {
	var carouselImages = [
		{
			index: 0,
			src: "img/tom1.jpg",
			href: "#",
			descr: "Lorem ipsum dolor sit amet",
			title: "Tom"
		},
		{
			index: 1,
			src: "img/khe.jpg",
			href: "#",
			descr: "Lorem ipsum dolor",
			title: "Khe berga"
		},
		{
			index: 2,
			src: "img/what.jpg",
			href: "#",
			descr: "Who cares?",
			title: "Who does?"
		},
		{
			index: 3,
			src: "img/spurdo.png",
			href: "#",
			descr: "Lorem ipsum dolor sit",
			title: "Spurdo face"
		},
		{
			index: 4,
			src: "img/atlas.png",
			href: "#",
			descr: "Lorem ipsum",
			title: "Atlas"
		}
	];

	function scrollLeft() {
		var activeItem = document.getElementsByClassName('active');
		var activeIndex = activeItem[0].childNodes[1].childNodes[1].alt;

		console.log(carouselImages[activeIndex]);
	}

	function scrollRight() {
		var carousel = document.getElementById('imgCarousel');
		var activeItem = carousel.childNodes[9];
		//console.log(activeItem);
		var activeIndex = activeItem.childNodes[1].alt;

		// get the image that will fade and scroll in from the side
		// 
		// swap classes
		// a loop that changes width, height, right, left to match adjacent item's attribs

		// *** // *** //
		// Create a new carousel item.
		var newItem = document.createElement('div');
		newItem.className = 'item';
		newItem.style = 'z-index: 0; right: 75%; width: 20%; height: 55%; opacity: 1;';

		// get the index of an image from the left side of the array -1
		var newImageIndex = activeIndex-3;

		// what happens when the left most item is first (0) in the array (2 images on the left)
		if (newImageIndex < 0) {
			// -1 = new image is the last item in the array, -2 = one before the last...
			// assuming there are more than 3 images in the array
			// !! .length is always 1 > than the last index of an array
			newImageIndex = carouselImages.length+newImageIndex;
		}

		// get the new image object from the array
		var arrImg = carouselImages[newImageIndex];

		// create a new image element and add all necessary attributes
		var newImage = document.createElement('img');
		newImage.src = arrImg.src;
		newImage.alt = arrImg.index;
		newImage.title = arrImg.title;

		// create a new span for image description
		var newImgDescr = document.createElement('span');
		var newImgDescrTxt = document.createTextNode(arrImg.descr);
		newImgDescr.appendChild(newImgDescrTxt);

		// add image and it's description to the new item
		newItem.appendChild(newImage);
		newItem.appendChild(newImgDescr);

		carousel.appendChild(newItem);
		// New item has been added.
		// *** // *** //

		// make the item on the left from the active item an active item (add an <a> tag and "active" class)
		var carousel = document.getElementById('imgCarousel');
		var nextActiveItem = carousel.childNodes[7];
		console.log(nextActiveItem);

		// do the thing that 'moves' all items to the right side while fading in/out outer most items

		// remove the item that faded out

		// I hope this is it...
	}

	function scrollTo(item) {
		// check if clicked item's index is < or > active item's index
		// scroll left/right so many times (if 99 images apart then...)
	}

	return {
		scrollLeft: scrollLeft,
		scrollRight: scrollRight,
		scrollTo: scrollTo
	}
})();