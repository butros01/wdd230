const baseURL = "https://butros01.github.io/wdd230/";
const linksURL = "https://butros01.github.io/wdd230/data/links.json";

const card = document.querySelector('.card');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json(); 
    console.log(displayLinks(data.lessons));

  }
  
getLinks();

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        // Create elements to add to the div.cards element
        let week = document.createElement('li'); 

        // Build the li content 
        week.textContent = `Week ${lesson.lesson} || ${lesson.links}`; 

        // Append the section(card) with the created elements
        card.appendChild(week); 
    });
}