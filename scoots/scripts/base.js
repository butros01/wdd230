/* HAMBURGER BUTTON */
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// const modeButton = document.querySelector('checkbox')[0];
var checkbox = document.getElementsByName("checkbox")[0];
const main = document.querySelector("main");
const body = document.querySelector('body')

checkbox.addEventListener("click", () => {
	if(checkbox.checked) { 
		body.style.backgroundColor = "#0A050F";
		main.style.backgroundColor = "#0A050F";
	}
	else {
		body.style.backgroundColor = "#FFFFFF";
		main.style.backgroundColor = "#FFFFFF";
	}
});
