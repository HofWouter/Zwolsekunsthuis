// templates/UI-elements/product-carousel.js
document.querySelectorAll("[data-product-carousel]").forEach((carousel) => {
	const track = carousel.querySelector("[data-carousel-items]");
	const items = carousel.querySelectorAll("[data-carousel-item]");
	const previousButton = carousel.querySelector("[data-carousel-prev]");
	const nextButton = carousel.querySelector("[data-carousel-next]");
	let activeIndex = 0;
	if (!track || items.length === 0 || !previousButton || !nextButton) return;
	const updateCarousel = () => {
		const offsetPercentage = activeIndex * 100;
		const offsetPixels = activeIndex * 20;
		track.style.transform = `translateX(calc(-${offsetPercentage}% - ${offsetPixels}px))`;
		previousButton.disabled = activeIndex === 0;
		nextButton.disabled = activeIndex === items.length - 1;
	};
	previousButton.addEventListener("click", () => {
		if (activeIndex > 0) {
			activeIndex -= 1;
			updateCarousel();
		}
	});
	nextButton.addEventListener("click", () => {
		if (activeIndex < items.length - 1) {
			activeIndex += 1;
			updateCarousel();
		}
	});
	updateCarousel();
});
