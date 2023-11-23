const currentTemp = document.querySelector ('#current-temp'); 
const weatherIcon = document.querySelector ('#weather-icon');
const captionDesc= document.querySelector('figcaption');
const forecastCont = document.querySelector(".forecast");

const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=-1.29&lon=36.82&appid=2aed5d5a23adccd7c990dad86aeec570`
const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=-1.29&lon=36.82&appid=2aed5d5a23adccd7c990dad86aeec570`


async function apiFetch(url) {
    try {
        const response = await fetch (url1)
        const response2 = await fetch(url2)
        if(url= url1) {
            
            if (response.ok) {
                const data = await response.json(); 
                displayResults (data); 
            } 
            else { throw Error (await response.text());
            }
        }
        if(url= url2) {
            if (response2.ok) {
                const data = await response2.json(); 
                displayForecast(data);
            } 
            else { throw Error (await response2.text());
            }
        }
    } 
    catch (error) {
        console.log(error);   
    }  
}


function displayResults (data) {
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src',iconsrc);
    let desc = data.weather[0].description;
    let temp= `${data.main.temp.toFixed(0) } &deg; F`;
    currentTemp.innerHTML = `${temp} - ${desc}`;   
}

function displayForecast(data) {
    const days = []
    const dateNow = new Date();
    const dayNow = dateNow.getDate();
    let dayRange = 0;
    let counter = 0;

    //Source (Shecodes.com)
    data.list.forEach((forecast) => {
        const futureDate = new Date(forecast.dt * 1000);
        const nextDay = futureDate.getDate();
        if(dayNow !== nextDay && dayRange !== nextDay && counter <= 2) {
            counter++;
            dayRange = nextDay;
            days.push(forecast);
        }
    });

    days.forEach((item) => {
        const iconsrc = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        const container = document.createElement("div");
        const date2 = document.createElement("p");
        const temp2 = document.createElement("p");
        const iconWeather = document.createElement("img");
        const weatherDesc = document.createElement("p");
        const newDate = new Date(item.dt * 1000);

        date2.textContent = newDate.toLocaleString('default', {month: "short", day: "numeric"});
        temp2.innerHTML = `${item.main.temp.toFixed(1)}&deg;F`;
        iconWeather.setAttribute("src", iconsrc);
        iconWeather.setAttribute("alt", item.weather[0].main);
        container.append(date2, temp2, iconWeather, weatherDesc);
        forecastCont.append(container);
    });
    
    function calculateWindchill(num1, num2) {
        if (num1 <= 50 && num2 > 3.0) {
            let windChillFactor = 35.74 + (0.6215 * num1) - (35.75 * (num2 ** 0.16)) + ((0.4275 * num1) * (num2 ** 0.16));
            windChill.textContent = windChillFactor.toFixed(2);
        } else {
            windChill.textContent = "N/A";
        }
    }
}


apiFetch(url1);

