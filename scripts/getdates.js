/* VARIABLES */
// Declare and instantiate a variable to hold the current year
let currentYear = 2023

// Place the value of the current year variable into the HTML file

document.querySelector('#year').textContent = currentYear

// Declare and instantiate a variable to hold the last modified date

let lastModified = new Date(document.lastModified)
// Place the value of the last modified date variable into the HTML file

document.querySelector('#lastModified').textContent = `Last Modification:  ${lastModified}`;
