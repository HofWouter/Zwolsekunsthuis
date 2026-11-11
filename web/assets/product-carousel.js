// templates/UI-elements/product-carousel.js
document.querySelectorAll("[data-product-carousel]").forEach((carousel) => {
	const track = carousel.querySelector("[data-carousel-items]");
	const items = carousel.querySelectorAll("[data-carousel-item]");
	const previousButton = carousel.querySelector("[data-carousel-prev]");
	const nextButton = carousel.querySelector("[data-carousel-next]");
	let activeIndex = 0;
	if (!track || items.length === 0 || !previousButton || !nextButton) return;
	const updateCarousel = () => {
		const firstItem = items[0];
		const gap = Number.parseFloat(getComputedStyle(track).gap || "0");
		const slideWidth = firstItem ? firstItem.getBoundingClientRect().width : track.clientWidth;
		const offset = activeIndex * (slideWidth + gap);
		track.style.transform = `translateX(-${offset}px)`;
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
	window.addEventListener("resize", updateCarousel);
	updateCarousel();
});
