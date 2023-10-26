const button = document.querySelector('button');
const list = document.querySelector('#list');
const input = document.querySelector('#favchap');
let chaptersArray = getChapterList() || [];

// populate the displayed list of chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

//   check if the input is empty, if not, then
//   call displayList with the input.value argument,
//   push the input.value into the chaptersArray,
//   update the localStorage with the new array by calling a function named setChapterList,
//   set the input.value to nothing, and
//   set the focus back to the input. 

button.addEventListener('click', () => {
    if (input.value != '') {  // make sure the input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
        
    }
    else {
        alert("Name must be filled out")
        input.focus();
    } 

});
function displayList(item) { 
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener ('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

    // input.focus();
    // input.value = '';   
}

// // Define the setChapterList function to set the localStorage item . 
// Use JSON.stringify() to stringify the array
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
//Define the getChapterList function to get the localStorage item. No parameter is needed. Since this function returns to an awaiting array, we will need to use JSON.parse on the string.

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// define the deleteChapter function with a parameter named chapter that does three things.
//reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string when we called the deleteChapter function. Use string.slice() method to extract the last character.
  chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
//   redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed.
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
//   Call the setChapterList function to update the localStorage item.
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }

