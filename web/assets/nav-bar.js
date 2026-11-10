// templates/UI-elements/nav-bar.js
document.addEventListener("DOMContentLoaded", () => {
	const nav = document.querySelector("nav");
	const toggle = document.getElementById("menu-toggle");
	const panel = document.getElementById("mobile-nav-panel");
	if (!nav || !toggle || !panel) return;
	const setMenuState = (isOpen) => {
		const navBar = nav.querySelector("[data-nav-bar]");
		const navBarLine = nav.querySelector("hr");
		const logo = document.getElementById("nav-logo");
		const menuIcon = document.getElementById("menu-icon");
		panel.classList.toggle("hidden", !isOpen);
		panel.classList.toggle("flex", isOpen);
		navBar?.classList.toggle("bg-black", isOpen);
		navBar?.classList.toggle("bg-white", !isOpen);
		navBarLine?.classList.toggle("invert", isOpen);
		logo?.classList.toggle("invert", isOpen);
		menuIcon?.classList.toggle("invert", isOpen);
		document.body.classList.toggle("overflow-hidden", isOpen);
		toggle.setAttribute("aria-expanded", String(isOpen));
		if (!isOpen) panel.querySelectorAll("[data-submenu-toggle]").forEach((submenuToggle) => {
			const submenu = document.getElementById(submenuToggle.getAttribute("aria-controls"));
			submenuToggle.setAttribute("aria-expanded", "false");
			submenu?.classList.add("hidden");
			submenuToggle.querySelector("[data-chevron]")?.classList.remove("rotate-180");
		});
	};
	panel.querySelectorAll("[data-submenu-toggle]").forEach((submenuToggle) => {
		const submenu = document.getElementById(submenuToggle.getAttribute("aria-controls"));
		submenuToggle.addEventListener("click", () => {
			const isExpanded = submenuToggle.getAttribute("aria-expanded") === "true";
			submenuToggle.setAttribute("aria-expanded", String(!isExpanded));
			submenu?.classList.toggle("hidden", isExpanded);
			submenuToggle.querySelector("[data-chevron]")?.classList.toggle("rotate-180", !isExpanded);
		});
	});
	toggle.addEventListener("click", () => {
		setMenuState(toggle.getAttribute("aria-expanded") !== "true");
	});
	panel.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => setMenuState(false));
	});
});
document.addEventListener("DOMContentLoaded", () => {
	const nav = document.getElementById("nav");
	const footer = document.getElementById("footer");
	if (!nav || !footer || !("IntersectionObserver" in window)) return;
	new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			nav.classList.toggle("-translate-y-full", entry.isIntersecting);
			nav.classList.toggle("opacity-0", entry.isIntersecting);
		});
	}, { threshold: .1 }).observe(footer);
});
