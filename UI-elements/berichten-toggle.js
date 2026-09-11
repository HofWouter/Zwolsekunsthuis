document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('bekijk_meer');
    const cards_archief = document.getElementById('archief-kaarten');

    const label = button.querySelector('.button-secondary-content span');

    button.addEventListener('click', () => {
        const isExpanded_archief = cards_archief.classList.toggle('is-expanded');

        button.setAttribute('aria-expanded', String(isExpanded_archief));

        if (label) {
            label.textContent = isExpanded_archief ? 'Bekijk minder' : 'Bekijk meer';
        }
    });
});