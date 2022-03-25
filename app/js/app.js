// document.addEventListener("DOMContentLoaded", () => {});

// Табы для меню

document.querySelectorAll(".tabs-triggers__item").forEach((item) => {
	item.addEventListener("click", (e) => {
		e.preventDefault();

		const id = e.target.getAttribute("href").replace("#", "");

		document
			.querySelectorAll(".tabs-triggers__item")
			.forEach((child) =>
				child.classList.remove("tabs-triggers__item--active")
			);

		document
			.querySelectorAll(".block")
			.forEach((child) => child.classList.remove("block-active"));

		item.classList.add("tabs-triggers__item--active");
		document.getElementById(id).classList.add("block-active");
	});
});

document.querySelector(".tabs-triggers__item").click();
