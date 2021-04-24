$(document).ready(function () {
	$(".homepage-top-carousel").owlCarousel({
		loop: true,
		// margin: 30,
		responsiveClass: true,
		nav: false,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			'<i class="icofont-rounded-left"></i>',
			'<i class="icofont-rounded-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});

	$(".products-carousel").owlCarousel({
		loop: true,
		nav: true,
		margin: 0,
		autoplay: true,
		responsiveClass: true,
		autoplayHoverPause: true,
		dots: false,
		navText: [
			'<i class="icofont-rounded-left"></i>',
			'<i class="icofont-rounded-right"></i>',
		],
		responsive: {
			0: {
				items: 2,
			},
			600: {
				items: 2,
			},
			771: {
				items: 3,
			},
			1000: {
				items: 5,
			},
		},
	});

	$(".categories-carousel").owlCarousel({
		loop: true,
		nav: true,
		margin: 20,
		autoplay: true,
		responsiveClass: true,
		autoplayHoverPause: true,
		dots: false,
		navText: [
			'<i class="icofont-rounded-left"></i>',
			'<i class="icofont-rounded-right"></i>',
		],
		responsive: {
			0: {
				items: 2,
			},
			600: {
				items: 2,
			},
			771: {
				items: 3,
			},
			1000: {
				items: 5,
			},
		},
	});

	const addBtn = document.querySelector("#addQ");
	const subtractBtn = document.querySelector("#subtractQ");

	addBtn.addEventListener("click", () => {
		let productQ = document.querySelector("#productQ").value;

		if (productQ < 100) {
			let newQ = ++productQ;

			document.querySelector("#productQ").value = newQ;
		}
	});

	subtractBtn.addEventListener("click", () => {
		let productQ = document.querySelector("#productQ").value;

		if (productQ >= 2) {
			let newQ = --productQ;

			document.querySelector("#productQ").value = newQ;
		}
	});
});
