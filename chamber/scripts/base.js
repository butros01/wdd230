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
const h2 = document.querySelector('h2')
const p = document.querySelector('section')

checkbox.addEventListener("click", () => {
	if(checkbox.checked) { 
		body.style.backgroundColor = "#0A050F";
		main.style.backgroundColor = "#0A050F";
		main.style.Color = "#FFFFFF";
		h2.style.color = "#FFFFFF";

	}
	else {
		body.style.backgroundColor = "#FFFFFF";
		main.style.backgroundColor = "#FFFFFF";
		h2.style.color = "#0A050F";

	}
});
