const infoURL = "https://butros01.github.io/wdd230/scoots/data/prices.json";
const table = document.querySelector("#table");
const names = document.querySelectorAll(".names");

async function fecthDocument(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayInfo(data);
        } else {
        throw Error(await response.text());
        }
    } catch (error) {
        alert(error);
    }   
}

function displayInfo(data) {
    data.vehicles.forEach((vehicle) => {
        const row = document.createElement("tr");
        const vehType = document.createElement("td");
        const maxCapa = document.createElement("td");
        const priceHalf = document.createElement("td");
        const priceFull = document.createElement("td");
        const halfPrice = document.createElement("td");
        const fullPrice = document.createElement("td");

        vehType.innerHTML = vehicle.type;
        maxCapa.innerHTML = vehicle.capacity;
        vehicle.prices.forEach((price) =>{
                if(price.reservation) {
                    priceHalf.innerHTML = price.reservation.halfDay;
                    priceFull.innerHTML = price.reservation.fullDay;
                } else {
                    halfPrice.innerHTML = price.walkIn.halfDay;
                    fullPrice.innerHTML = price.walkIn.fullDay;
                }
            }
        )

        row.append(vehType, maxCapa, priceHalf, priceFull, halfPrice, fullPrice);
        table.append(row);
    });
    
    
}

fecthDocument(infoURL);