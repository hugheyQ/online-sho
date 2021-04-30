function shoppingCartRedirect() {
	location.href = "cart.html";
}

function toggleField(clicked_id) {
	let clickedBtn = document.querySelector("#" + clicked_id);
	let currentParent = clickedBtn.parentNode;

	let currentField = currentParent.querySelector("input");

	if (!currentField.classList.contains("active")) {
		currentField.removeAttribute("disabled");
		currentField.classList.add("active");

		clickedBtn.innerHTML = '<i class="bi bi-save"></i>';
	} else {
		currentField.setAttribute("disabled", "disabled");
		currentField.classList.remove("active");

		clickedBtn.innerHTML = '<i class="bi bi-pencil"></i>';
	}
}

function togglePassword(clicked_id) {
	let clickedBtn = document.querySelector("#" + clicked_id);
	let currentParent = clickedBtn.parentNode;

	let currentField = currentParent.querySelector("input");

	if (currentField.classList.contains("encrypted")) {
		currentField.setAttribute("type", "text");
		currentField.classList.remove("encrypted");

		clickedBtn.innerHTML = '<i class="bi bi-eye-fill"></i>';
	} else {
		currentField.setAttribute("type", "password");
		currentField.classList.add("encrypted");

		clickedBtn.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
	}
}

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
});
