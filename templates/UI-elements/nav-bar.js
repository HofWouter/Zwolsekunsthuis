document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const toggle = document.getElementById('menu-toggle');
    const panel = document.getElementById('mobile-nav-panel');

    if (!nav || !toggle || !panel) return;

    const setMenuState = (isOpen) => {
        const navBar = nav.querySelector('[data-nav-bar]');
        const navBarLine = nav.querySelector('hr');

        panel.classList.toggle('hidden', !isOpen);
        panel.classList.toggle('flex', isOpen);
        navBar?.classList.toggle('bg-black', isOpen);
        navBar?.classList.toggle('bg-white', !isOpen);
        navBarLine?.classList.toggle('invert', isOpen);
        nav.querySelectorAll('img').forEach((image) => {
            if (image.closest('[data-nav-bar]')) image.classList.toggle('invert', isOpen);
        });
        document.body.classList.toggle('overflow-hidden', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
    };

    toggle.addEventListener('click', () => {
        setMenuState(toggle.getAttribute('aria-expanded') !== 'true');
    });

    panel.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuState(false));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    const footer = document.getElementById('footer');

    if (!nav || !footer || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            nav.classList.toggle('-translate-y-full', entry.isIntersecting);
            nav.classList.toggle('opacity-0', entry.isIntersecting);
        });
    }, { threshold: 0.1 });

    observer.observe(footer);
});
