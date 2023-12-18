const banner = document.querySelector("#maxTemp");
const button = document.querySelector("#close-maxTemp");

button.addEventListener("click", () => {
    banner.classList.add("maxTemp-hide");
    banner.classList.remove("maxTemp-show");
})