/* JOIN US BANNER */
/* Display banner if day is Monday, Tuesday or Wednesday, it's forcing to hide it instead */
const d = new Date();
let day = d.getDay()
const meetingBanner = document.getElementById("home-meeting-banner")

if(day > 0 && day < 4) {
	meetingBanner.style.display = `block`
}
else {
	meetingBanner.style.display = `none`
}