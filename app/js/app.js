document.addEventListener("DOMContentLoaded", () => {

	// Tabs menu

	const getId = (link) => link.getAttribute("href").replace("#", "");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					document.querySelectorAll(".nav-list__item-link").forEach((link) => {
						link.classList.toggle(
							"nav-list__item-link--active",
							getId(link) === entry.target.id
						);
					});
				}


			});
		},
		{
			threshold: 0.7,
		}
	);

	document.querySelectorAll(".block").forEach((block) => observer.observe(block));

	document.querySelector(".nav-list").addEventListener("click", (event) => {
		if (event.target.classList.contains("nav-list__item-link")) {
			event.preventDefault();

			window.scrollTo({
				top: document.getElementById(getId(event.target)).offsetTop,
				behavior: "smooth",
			});
		}
	});

	// Burger menu

	let menuBtn = document.querySelector(".menu-btn");
	let menu = document.querySelector(".menu");

	menuBtn.addEventListener("click", function () {
		document.body.classList.toggle("lock");
		menuBtn.classList.toggle("active");
		menu.classList.toggle("active");
	});


	const menuLinks = document.querySelectorAll(
		".burger-list__item-link[data-goto]"
	);

	if (menuLinks.length > 0) {
		menuLinks.forEach((menuLink) => {
			menuLink.addEventListener("click", onMenuLinkClick);
		});

		function onMenuLinkClick(e) {
			const menuLink = e.target;

			if (
				menuLink.dataset.goto &&
				document.querySelector(menuLink.dataset.goto)
			) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);

				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

				if (menuBtn.classList.contains("active")) {
					document.body.classList.remove("lock");
					menuBtn.classList.remove("active");
					menu.classList.remove("active");
				}

				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth",
				});

				e.preventDefault();
			}
		}
	}

});

