document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-carousel-position').forEach((carousel) => {
        const imageWrapper = carousel.querySelector('.product-image-padding');
        const image = imageWrapper?.querySelector('.product-image');
        const previousButton = carousel.querySelector('.product-image-control:not(.product-image-control-next)');
        const nextButton = carousel.querySelector('.product-image-control-next');

        if (!imageWrapper || !image || !previousButton || !nextButton) return;

        const images = imageWrapper.dataset.carouselImages
            .split(',')
            .map((source) => source.trim())
            .filter(Boolean);

        if (images.length < 2) {
            previousButton.disabled = true;
            nextButton.disabled = true;
            return;
        }

        let currentIndex = images.indexOf(image.getAttribute('src'));
        if (currentIndex < 0) currentIndex = 0;

        const showImage = (index) => {
            currentIndex = (index + images.length) % images.length;
            image.src = images[currentIndex];
        };

        previousButton.addEventListener('click', () => showImage(currentIndex - 1));
        nextButton.addEventListener('click', () => showImage(currentIndex + 1));

        imageWrapper.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
            if (event.key === 'ArrowRight') showImage(currentIndex + 1);
        });
    });
});