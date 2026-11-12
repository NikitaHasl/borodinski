document.addEventListener("DOMContentLoaded", () => {
	const reviewsViewport = document.querySelector(".reviews__viewport");

	// Инициализируем слайдер только на странице, где он нужен
	if (reviewsViewport) {
		try {
			new Swiper(".reviews__viewport", {
				wrapperClass: "reviews__list", // Список слайдов
				slideClass: "reviews__item", // Слайд

				loop: true,
				slidesPerView: 1,
				spaceBetween: 0,

				// Стрелки
				navigation: {
					nextEl: ".reviews__arrow_next",
					prevEl: ".reviews__arrow_prev",
				},

				// Пагинация
				pagination: {
					el: ".reviews__pagination",
					clickable: true,
					bulletClass: "reviews__dot",
					bulletActiveClass: "reviews__dot_current",
				},
			});
		} catch (error) {
			console.log(error);
		}
	}
});
