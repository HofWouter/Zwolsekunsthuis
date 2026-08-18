        document.addEventListener('DOMContentLoaded', () => {
            const nav = document.querySelector('nav');
            const toggle = document.getElementById('menu-toggle');
            const closeButton = document.getElementById('menu-close');
            const panel = document.getElementById('mobile-nav-panel');

            if (!nav || !toggle || !panel) return;

            const setMenuState = (isOpen) => {
                nav.classList.toggle('menu-open', isOpen);
                document.body.classList.toggle('menu-open', isOpen);
                toggle.setAttribute('aria-expanded', String(isOpen));
            };

            toggle.addEventListener('click', () => {
                setMenuState(!nav.classList.contains('menu-open'));
            });

            if (closeButton) {
                closeButton.addEventListener('click', () => setMenuState(false));
            }

            panel.querySelectorAll('a').forEach((link) => {
                link.addEventListener('click', () => setMenuState(false));
            });
        });