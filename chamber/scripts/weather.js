const currentTemp = document.querySelector ('#current-temp'); 
const weatherIcon = document.querySelector ('#weather-icon');
const captionDesc= document.querySelector('figcaption');

// Declare a const variable named "url" and assign 
// it a valid URL string as given in the openweathermap api documentation

const url = `https://api.openweathermap.org/data/2.5/weather?lat=1.29&lon=36.82&appid=2aed5d5a23adccd7c990dad86aeec570`

async function apiFetch() {

    try {
    
        const response = await fetch (url);
        
        if (response.ok) {
        
            const data = await response.json(); 
            console.log(data); // testing only
            
            displayResults (data); 
        
        } 
        else { throw Error (await response.text());
        
        }  
    } 
    catch (error) {
        console.log(error);   
    }  
}
apiFetch();



weatherIcon.setAttribute('src',iconsrc);
weatherIcon.setAttribute('alt',desc);
function displayResults (data) {
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src',iconsrc);
    let desc = data.weather[0].description;
    let temp= `${data.main.temp.toFixed(0) } &deg; F`;
    currentTemp.innerHTML = `${temp} - ${desc}`;
}