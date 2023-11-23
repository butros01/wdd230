const currentTemp = document.querySelector ('#current-temp'); 
const weatherIcon = document.querySelector ('#weather-icon');
const captionDesc= document.querySelector('figcaption');
const currentTemp1 = document.querySelector ('#current-temp1'); 
const weatherIcon1 = document.querySelector ('#weather-icon1');
const captionDesc1= document.querySelector('figcaption1');
const currentTemp2 = document.querySelector ('#current-temp2'); 
const weatherIcon2 = document.querySelector ('#weather-icon2');
const captionDesc2= document.querySelector('figcaption1');
const currentTemp3 = document.querySelector ('#current-temp3'); 
const weatherIcon3 = document.querySelector ('#weather-icon3');
const captionDesc3= document.querySelector('figcaption3');
// const card = document.querySelector('#weather') 
// Declare a const variable named "url" and assign 
// it a valid URL string as given in the openweathermap api documentation

const url = `https://api.openweathermap.org/data/2.5/weather?lat=-1.29&lon=36.82&appid=2aed5d5a23adccd7c990dad86aeec570`
const urlForcast = `https://api.openweathermap.org/data/2.5/forecast?lat=-1.29&lon=36.82&appid=2aed5d5a23adccd7c990dad86aeec570`
async function apiFetch() {

    try {
    
        const response = await fetch (url);
        const response2 = await fetch(urlForcast)
        
        if (response.ok) {
            const data = await response.json(); 
            displayResults (data); 
        } 
        else { throw Error (await response.text());
        }
        if (response2.ok) {
            const data2 = await response2.json(); 
            console.log(data2);
            console.log(displayResults2(data2)); 
        } 
        else { throw Error (await response2.text());
        }
    } 
    catch (error) {
        console.log(error);   
    }  
}
apiFetch();

function displayResults (data) {
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src',iconsrc);
    let desc = data.weather[0].description;
    let temp= `${data.main.temp.toFixed(0) } &deg; F`;
    currentTemp.innerHTML = `${temp} - ${desc}`;   
}

function displayResults2 (data2) {
    Array.from(data2.list, lists => {
        let iconsrc1 = `https://openweathermap.org/img/w/${lists.weather[0].icon}.png`;
        weatherIcon1.setAttribute('src',iconsrc1);
        // weatherIcon2.setAttribute('src',iconsrc);
        // weatherIcon3.setAttribute('src',iconsrc);
        let date = lists.dt_txt
        let desc = lists.weather[0].description;
        let temp = `${lists.main.temp.toFixed(0) } &deg; F`;
        forcast = `${date} ${temp} - ${desc}`
        currentTemp1.innerHTML = `${date} ${temp} - ${desc}`; 
        currentTemp2.innerHTML = `${date} ${temp} - ${desc}`; 
        currentTemp3.innerHTML = `${date} ${temp} - ${desc}`; 
        
    });
    card.append(forcastlist);
}