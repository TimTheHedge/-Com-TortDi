const burgerButton = document.querySelector(".burger-button");
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__container").cloneNode(1);
const body = document.body;

headerMenu.classList.add("header__open-menu");

burgerButton.addEventListener("click", burgerActive);

function burgerActive(e) {
	e.preventDefault();
	header.classList.toggle("header-open");
	header.appendChild(headerMenu);
	burgerButton.classList.toggle("burger-button-active");
	body.classList.toggle('noScroll');
}

function headerOpenRender() {
	header.appendChild(headerMenu);
}