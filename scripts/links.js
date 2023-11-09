const baseURL = "https://butros01.github.io/wdd230/";
const linksURL = "https://butros01.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
getLinks();

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        // Create elements to add to the div.cards element
        let ul = document.createElement('ul');
        let week = document.createElement('li'); 

        // Build the li content 
        week.textContent = `${lesson.lesson} ${lesson.links}`; 

        // Append the section(card) with the created elements
        ul.appendChild(week); 
    });
}