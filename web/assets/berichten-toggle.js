// templates/UI-elements/berichten-toggle.js
document.addEventListener("DOMContentLoaded", () => {
	const button = document.getElementById("bekijk_meer");
	const cards = document.getElementById("archief-kaarten");
	if (!button || !cards) return;
	const items = cards.querySelectorAll("[data-card-item]");
	const label = button.querySelector("span");
	const setExpanded = (isExpanded) => {
		items.forEach((item, index) => {
			item.classList.toggle("hidden", index >= 4 && !isExpanded);
		});
		button.setAttribute("aria-expanded", String(isExpanded));
		if (label) label.textContent = isExpanded ? "Bekijk minder" : "Bekijk meer";
	};
	setExpanded(false);
	button.addEventListener("click", () => {
		setExpanded(button.getAttribute("aria-expanded") !== "true");
	});
});
