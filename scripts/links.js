const baseURL = "https://butros01.github.io/wdd230/";
const linksURL = "https://butros01.github.io/wdd230/data/links.json";

const card = document.querySelector('.card');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json(); 
    displayLinks(data.lessons);

  }
  
getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        // Create elements to add to the div.cards element
        let weekLesson = document.createElement('li'); 

        // Build the li content 
        weekLesson.textContent = `Week ${week.lesson} ||`; 
        // Append the section(card) with the created elements
        let linkList = week.links;
        linkList.forEach((link => {
            const anchor= document.createElement("a"); 
            anchor.setAttribute("href", link.url); anchor.setAttribute("target", "_blank"); 
            anchor.innerHTML = `${link.title} | `; 
            weekLesson.appendChild(anchor);
        }));
        card.appendChild(weekLesson); 
    });
}