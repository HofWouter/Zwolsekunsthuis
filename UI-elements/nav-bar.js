document.addEventListener('DOMContentLoaded', () => {
    const nav_menu = document.querySelector('nav');
    const toggle = document.getElementById('menu-toggle');
    const closeButton = document.getElementById('menu-close');
    const panel = document.getElementById('mobile-nav-panel');

    if (!nav_menu || !toggle || !panel) return;

    const setMenuState = (isOpen) => {
        nav_menu.classList.toggle('menu-open', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
    };

    toggle.addEventListener('click', () => {
        setMenuState(!nav_menu.classList.contains('menu-open'));
    });

    if (closeButton) {
        closeButton.addEventListener('click', () => setMenuState(false));
    }

    panel.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuState(false));
    });
});

const nav_bar = document.getElementById('nav');
const footer = document.getElementById('footer');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      nav_bar.classList.add('hide');
    } else {
      nav_bar.classList.remove('hide');
    }
  });
}, {
  rootMargin: '0px',
  threshold: 0.1
});

observer.observe(footer);

