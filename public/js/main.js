// Step One : Select All elements of Carousel
let slides = document.querySelectorAll(".slide-container"); // Select All Slides
let arrows = document.querySelectorAll("a.arrow"); // Select Arrows
let dots = document.querySelectorAll("li.dot"); // Select All Dots
slides = Array.from(slides); // Convert a Array
arrows = Array.from(arrows); // Convert a Array
dots = Array.from(dots); // Convert a Array

// Step Two : Seleccionamos el dot correspondiente al slide activo

const activeDot = (slide) => {
	let dots = document.querySelectorAll("li.dot"); // Select All Dots
	dots = Array.from(dots); // Create Array from list of dots
	dots.forEach((dot) => dot.classList.remove("active")); // Delete class active of all dots
	let dotToShow = dots.find((dot) => dot.dataset.target == slide); // Select dot based on slide
	dotToShow.classList.add("active"); // Add class active to dot selected
};

// Step Three : Modificamos el next y el preview correspondiente al slide activo
const modArrow = () => {
	const arrowLeft = document.querySelector("#btn-preview"); // Select Arrow Left
	const arrowRight = document.querySelector("#btn-next"); // Select Arrow RIght
	let slides = document.querySelectorAll(".slide-container"); // Select All Slides
	slides = Array.from(slides); // Create Array from list of slides
	let slideActive = slides.find((slide) => slide.classList.contains("active"));
	let numberSlide = parseInt(slideActive.dataset.slide);
	let quantitySlides = slides.length;
	let lastSlide = quantitySlides - 1;
	arrowLeft.setAttribute("data-preview", numberSlide <= 0 ? 0 : numberSlide - 1);
	arrowRight.setAttribute(
		"data-next",
		numberSlide >= lastSlide ? 0 : numberSlide + 1
	);
	console.log("quantity", quantitySlides);
	console.log("current", numberSlide);
	console.log("preview", arrowLeft.dataset.preview);
	console.log("next", arrowRight.dataset.next);
};

// Step Four : Show one slide based in index
const showSlide = (number) => {
	let slides = document.querySelectorAll(".slide-container");
	slides = Array.from(slides);
	slides.forEach((slide) => slide.classList.remove("active"));
	let slideToShow = slides.find((slide) => slide.dataset.slide == number);
	console.clear();
	console.log("slide", slideToShow);
	if (slideToShow) {
		slideToShow.classList.add("active");
		activeDot(number);
		modArrow();
	}
};

showSlide(0);

// Step Five: Add events for clicks arrows
arrows = Array.from(arrows);

arrows.forEach((arrow) => {
	arrow.addEventListener("click", (e) => {
		e.preventDefault();
		let element = e.currentTarget;
		console.clear();
		console.log("element", element.dataset);
		if (element.dataset.next != undefined) {
			showSlide(parseInt(element.dataset.next));
		}
		if (element.dataset.preview != undefined) {
			showSlide(parseInt(element.dataset.preview));
		}
	});
});

// Step FInal: Add events for clicks dot

dots = Array.from(dots);

dots.forEach((dot) => {
	dot.addEventListener("click", (e) => {
		e.preventDefault();
		let element = e.currentTarget;
		console.clear();
		console.log("element", element.dataset);
		showSlide(parseInt(element.dataset.target));
	});
});

// Step Final Alternative: Auto moving

setInterval(() => {
	arrows[1].click();
}, 1000 * 5);
