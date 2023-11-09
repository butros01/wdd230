// Declare a const variable named "url" that contains the URL string of 
// the JSON resource provided.
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
// Declare a const variable name "cards" that selects the HTML div element from the document 
// with an id value of "cards".
const cards = document.querySelector('#cards');

// Create a async defined function named "getProphetData" to fetch 
// data from the JSON source url using the await fetch() method.
async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h1'); 
    let portrait = document.createElement('img');
    let dob = document.createElement('p');
    let pob = document.createElement('p');

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
    dob.textContent = `Date of birth: ${prophet.birthdate}`
    pob.textContent = `Place of birth: ${prophet.birthplace}`
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName); 
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(portrait);

    cards.appendChild(card);
    });
  }