/* DISCOVER - LAST VISIT */

let lastVisit = localStorage.getItem("lastVisit")|| 0;
const lastVisitElement = document.querySelector("#lastVisit span");
let currentDate = new Date();
let previousDate = new Date(lastVisit);
let timeDifference = currentDate.getTime() - previousDate.getTime();
let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// 2Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.

let numVisits = Number(window.localStorage.getItem("numVisits-ls"));

if (differenceInDays <= 1) {
    lastVisitElement.innerText = `Back so soon! Awesome!`;
}
else if(differenceInDays == 1) {
    lastVisitElement.innerText = `You visited this webpage ${differenceInDays} day ago!`;
}
else {
    lastVisitElement.innerText = `You visited this webpage ${differenceInDays} days ago!`;
}
if (numVisits == 0) {
	lastVisitElement.innerText =  `Welcome! Let us know if you have any questions.`;
} 

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

localStorage.setItem("lastVisit", new Date());

