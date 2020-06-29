// Selecting the body tag.
var body = document.querySelector("body");

// Creating the elements
var divSearch = document.createElement("div");
var title = document.createElement("h3");
var searchField = document.createElement("input");
var searchButton = document.createElement("button");
var clearButton = document.createElement("button");

var container = document.createElement("div");

// Appending the elements
divSearch.appendChild(title);
body.appendChild(divSearch);
divSearch.appendChild(searchField);
divSearch.appendChild(searchButton);
divSearch.appendChild(clearButton);

body.appendChild(container);

// Add attributes
// TODO: add attributes so that the site conforms to a11y.
divSearch.setAttribute("id", "divSearchID");
searchField.setAttribute("id", "searchFieldID");
// searchField.setAttribute("value", "Name");
searchField.setAttribute("onfocus", "this.value=''");

// searchField.setAttribute("onkeydown", "if (event.keyCode == 13){document.getElementById('searchFieldID').click()}");
searchField.setAttribute("onkeydown", "enterKeyFunction()");

searchButton.setAttribute("onClick", "searchFunction()");
clearButton.setAttribute("onClick", "clearFunction()");
// clearButton.setAttribute("onClick", "clearField()");


container.setAttribute("id", "containerID");

// Add text.
title.innerHTML = "Recipe Search";
searchButton.innerHTML = "Search";
clearButton.innerHTML = "Clear";

// Functions
// NOTE: this may not be working as expected.
function searchFunction(){
  console.log(document.getElementById('searchFieldID').value);
  searchPhrase = document.getElementById('searchFieldID').value;

  fetch("https://crossorigin.me/https://www.recipepuppyproxy.herokuapp.com/api/?q=" + searchPhrase)
  .then(
    function(response){
      console.log("The response status is: ", response.status);
      response.json().then(function(data) {
        console.log(data.results);

        for(var i = 0; i<data.results.length; i++){

        // Creating the elements
        var divResponse = document.createElement("div");
        var h3 = document.createElement("h3");
        var paragraph = document.createElement("p");
        var image = document.createElement("img");

        // Appending the elements
        container.appendChild(divResponse);
        divResponse.appendChild(h3);
        divResponse.appendChild(paragraph);
        divResponse.appendChild(image);

        // Add attributes
        // TODO: add attributes so that the site conforms to a11y.
        // TODO: have a default image for when one is not available.
        if(data.results[i].thumbnail==""){
          image.setAttribute("src", "./images/mcdonalds.jpg");
        } else {
          // NOTE: added the lines below to address this error: "net::ERR_CERT_COMMON_NAME_INVALID"
          // if(data.results[i].thumbnail.charAt(4) != "s"){
          //   var newURL = data.results[i].thumbnail.slice(0,4)+"s"+data.results[i].thumbnail.slice(4,37);
          //   console.log(data.results[i].thumbnail);
          //   // console.log(typeof(data.results[i].thumbnail));
          //   // console.log(data.results[i].thumbnail.charAt(4));
          //   console.log(newURL);
          //   // console.log(typeof(newURL));


          //   image.setAttribute("src", newURL);
          // } else {
            image.setAttribute("src", data.results[i].thumbnail);
          // }
        }

        divResponse.setAttribute("id", "divResponse");

        // Add text.
        h3.innerHTML = data.results[i].title;
        paragraph.innerHTML = data.results[i].ingredients;
        }
      });
    }
  )
  .catch(
    function(err){
      console.log("The fetch error: ", err);
    }
  );
}

function clearFunction(input){
  console.log("Clear was performed.");
  document.getElementById('searchFieldID').value = '';
  document.getElementById('searchFieldID').focus();
}

// NOTE: this may not be working as expected.
// TODO: refactor this so that enterKeyFunction() is not needed.
function enterKeyFunction(){
  if (event.keyCode == 13){
    console.log("Enter Key hit");
    searchFunction();
    }
}