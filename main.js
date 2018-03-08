// give it functionality such that pressing the enter/return key has hte same effect as selecting the Search button.

// Formatting the html

var body = document.querySelector("body");

var h1 = document.createElement("h1");
var recipe = document.createTextNode("Recipe");
h1.appendChild(recipe);
body.appendChild(h1);

var input = document.createElement("input");
input.setAttribute("placeholder", "Type an ingredient");
body.appendChild(input);


var buttonSearch = document.createElement("button");
var searchText = document.createTextNode("Search For Recipes");
buttonSearch.appendChild(searchText);
body.appendChild(buttonSearch);

var buttonClear = document.createElement("button");
var clearText = document.createTextNode("Reset / Clear Search");
buttonClear.appendChild(clearText);
body.appendChild(buttonClear);


// Element.setAttribute(name, value);
// h1.innerHTML = "Recipe"; // NOTE: 'createTextNode' is favorable to 'innerHTML': https://stackoverflow.com/questions/13122760/is-there-any-major-difference-between-innerhtml-and-using-createtextnode-to-fill
body.appendChild(h1);




// .innerHTML =         (baseElement.querySelector("div span").innerHTML);


// Using the api

// fetch("http://www.recipepuppy.com/api/")
  // Data is fetched and we get a promise.
  // .then(
