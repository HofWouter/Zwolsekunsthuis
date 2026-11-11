document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-request-modal');
    const openButton = document.getElementById('open-product-modal');

    if (!modal || !openButton) {
        return;
    }

    const closeButton = document.getElementById('close-product-modal');
    const closeOverlay = modal.querySelector('[data-close-product-modal]');
    const form = document.getElementById('product-request-form');

    const openModal = () => {
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('overflow-hidden');
    };

    const closeModal = () => {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('overflow-hidden');
    };

    openButton.addEventListener('click', openModal);
    closeButton?.addEventListener('click', closeModal);
    closeOverlay?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    form?.addEventListener('submit', (event) => {
        event.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]');

        if (submitButton) {
            submitButton.textContent = 'Verstuurd';
            submitButton.disabled = true;
        }

        setTimeout(() => {
            closeModal();
            form.reset();

            if (submitButton) {
                submitButton.textContent = 'Verstuur aanvraag';
                submitButton.disabled = false;
            }
        }, 1200);
    });
});
