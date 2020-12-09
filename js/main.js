// Back to Top
const backToTopBtn = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 500) {
		backToTopBtn.style.opacity = "0.6";
	} else {
		backToTopBtn.style.opacity = "0";
	}
});

backToTopBtn.addEventListener("click", () => {
	// window.scrollTo(0, 0);
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

// Navbar Menu Button
const navbar = document.querySelector(".navbar");
const closeMenu = document.querySelector(".close-menu");

window.addEventListener("scroll", () => {
	if (!closeMenu.classList.contains("active") && window.pageYOffset > 50) {
		closeMenu.style.opacity = "0";
	} else {
		closeMenu.style.opacity = "1";
	}
});
closeMenu.addEventListener("click", () => {
	closeMenu.classList.toggle("active");
	navbar.classList.toggle("active");
});
