// give it functionality such that pressing the enter/return key has hte same effect as selecting the Search button.

// Formatting the html

var body = document.querySelector("body");

var header = document.createElement("header")
var h1 = document.createElement("h1");
var recipe = document.createTextNode("Recipe");

// h1.innerHTML = "Recipe"; // NOTE: 'createTextNode' is favorable to 'innerHTML': https://stackoverflow.com/questions/13122760/is-there-any-major-difference-between-innerhtml-and-using-createtextnode-to-fill

h1.appendChild(recipe);
body.appendChild(header);
header.appendChild(h1);

var input = document.createElement("input");
input.setAttribute("placeholder", "Type an ingredient");
header.appendChild(input);

var buttonSearch = document.createElement("button");
var searchText = document.createTextNode("Search For Recipes");
buttonSearch.appendChild(searchText);
header.appendChild(buttonSearch);

var buttonClear = document.createElement("button");
var clearText = document.createTextNode("Reset / Clear Search");
buttonClear.appendChild(clearText);
header.appendChild(buttonClear);

var section = document.createElement("section")
body.appendChild(section);

// Add event listener to button.
buttonSearch.addEventListener('click', function() {
  section.innerHTML = "The event listener is working."
  fetch("https://api.github.com/users/theironyard")
  // Data is fetched and we get a promise.
  .then(
    // The promise returns a response from the server.
    function(response) {
      // We process the response accordingly.
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        console.log("Here is the data:", data);
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  })});



// .then()

// function

// response


// body.appendChild(h1);




// .innerHTML =         (baseElement.querySelector("div span").innerHTML);


// Using the api

// fetch("http://www.recipepuppy.com/api/")
// Data is fetched and we get a promise.
// .then(
