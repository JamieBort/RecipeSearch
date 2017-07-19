let recipeBox = document.querySelector(".box")
let recipes = document.querySelector(".list")
let content = document.querySelector("#wrapper");
let button = document.querySelector("#button");
let search = document.querySelector("#search");

button.addEventListener("click", function() {
  fetch("http://crossorigin.mehttp://www.recipepuppy.com/api/?q=search-term=${search.value}")
    // Data is fetched and we get a promise.
    .then(
      // The promise returns a response from the server.
      function(response) {
        // We process the response accordingly.
        if (response.status !== 200) {
          console.log(response.status);
          return response.json();
        }
      })
    .then(function(data) {
      let results = data.results;
      for (var i = 0; i < results.length; i++) {
        recipes.innerHTML += `
          <div class="">
        <img src=${results[i].thumbnail}>
        <a href=${results[i].href}><h2 class="title">${results[i].title}</h2></a>
        </div>
`
      }
    })

    .catch(function(error) {
      //   // Do something with your JSON.
      //   // For example, a 'for' loop.
      console.error(error.message);
    });
})


// response.json().then(function(data) {
//   // Do something with your JSON.
//   // For example, a 'for' loop.
//
//     console.error(error.message);
//   });
// })
