let apiKey = "c191349a1e1543d79b374e997e7a00fe";
let random = `https://api.spoonacular.com/recipes/random?number=${24}&apiKey=${apiKey}`;

// axios.get(random).then(showRandom);

let search = document.querySelector("form");
search.addEventListener("submit", Recipie);

function Recipie(event) {
  event.preventDefault();
  rec = document.querySelector(".form-control");
  rec = rec.value;
  let url = `https://api.spoonacular.com/recipes/complexSearch?query=${rec}&number=${12}&apiKey=${apiKey}`;
  axios
    .get(url)
    .then(showRecipe)
    .catch((error) => {
      alert(`Enter a valid recipie name`);
    });
}

function showRecipe(response) {
  console.log(response.data);
  let i,
    arr = [],
    img = [];
  let result = document.querySelector(".craving");
  result.classList.remove("text-center");
  result.classList.remove("p-5");
  result.classList.add("ms-5");
  result.classList.add("mt-3");
  result.innerHTML = `<div class="text-left"><h1>Results for ${rec}</h1></div>`;
  for (i = 0; i < 12; i++) {
    let image = response.data.results[i].image;
    if (image === undefined) {
      i--;
    } else {
      let id = response.data.results[i].id;
      arr[i] = id;
      img[i] = image;
    }
  }
  display(arr, img);
}

function display(ar, img) {
  let info = `https://api.spoonacular.com/recipes/${ar[0]}/information?apiKey=${apiKey}`;
  axios.get(info).then(function (response) {
    cuisines = response.data.cuisines[0];
    if (cuisines === undefined) {
      cuisines = "Not Specified";
    }

    let cards = document.querySelector(".c1");
    cards.innerHTML = `<div class="col mt-4">
        <div class="card">
            <img src=${img[0]} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${response.data.title}</h5>
                <hr>
                <p class="card-text">
                Cusine: ${cuisines}
                <br>
                Time: ${response.data.readyInMinutes}
                <br>
                Servings: ${response.data.servings}
                <br>
                Source: ${response.data.sourceName}
                </p>
                <a href=${response.data.sourceUrl} class="btn btn-primary" target="_blank">Checkout Recipie</a>
            </div>
        </div>
       </div>`;
  });

  info = `https://api.spoonacular.com/recipes/${ar[1]}/information?apiKey=${apiKey}`;
  axios.get(info).then(function (response) {
    cuisines = response.data.cuisines[0];
    if (cuisines === undefined) {
      cuisines = "Not Specified";
    }

    let cards = document.querySelector(".c2");
    cards.innerHTML = `<div class="col mt-4">
        <div class="card">
            <img src=${img[1]} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${response.data.title}</h5>
                <hr>
                <p class="card-text">
                Cusine: ${cuisines}
                <br>
                Time: ${response.data.readyInMinutes}
                <br>
                Servings: ${response.data.servings}
                <br>
                Source: ${response.data.sourceName}
                </p>
                <a href=${response.data.sourceUrl} class="btn btn-primary" target="_blank">Checkout Recipie</a>
            </div>
        </div>
       </div>`;
  });

  info = `https://api.spoonacular.com/recipes/${ar[2]}/information?apiKey=${apiKey}`;
  axios.get(info).then(function (response) {
    cuisines = response.data.cuisines[0];
    if (cuisines === undefined) {
      cuisines = "Not Specified";
    }

    let cards = document.querySelector(".c3");
    cards.innerHTML = `<div class="col mt-4">
        <div class="card">
            <img src=${img[2]} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${response.data.title}</h5>
                <hr>
                <p class="card-text">
                Cusine: ${cuisines}
                <br>
                Time: ${response.data.readyInMinutes}
                <br>
                Servings: ${response.data.servings}
                <br>
                Source: ${response.data.sourceName}
                </p>
                <a href=${response.data.sourceUrl} class="btn btn-primary" target="_blank">Checkout Recipie</a>
            </div>
        </div>
       </div>`;
  });

  info = `https://api.spoonacular.com/recipes/${ar[3]}/information?apiKey=${apiKey}`;
  axios.get(info).then(function (response) {
    cuisines = response.data.cuisines[0];
    if (cuisines === undefined) {
      cuisines = "Not Specified";
    }

    let cards = document.querySelector(".c4");
    cards.innerHTML = `<div class="col mt-4">
        <div class="card">
            <img src=${img[3]} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${response.data.title}</h5>
                <hr>
                <p class="card-text">
                Cusine: ${cuisines}
                <br>
                Time: ${response.data.readyInMinutes}
                <br>
                Servings: ${response.data.servings}
                <br>
                Source: ${response.data.sourceName}
                </p>
                <a href=${response.data.sourceUrl} class="btn btn-primary" target="_blank">Checkout Recipie</a>
            </div>
        </div>
       </div>`;
  });

  info = `https://api.spoonacular.com/recipes/${ar[4]}/information?apiKey=${apiKey}`;
  axios.get(info).then(function (response) {
    cuisines = response.data.cuisines[0];
    if (cuisines === undefined) {
      cuisines = "Not Specified";
    }

    let cards = document.querySelector(".c5");
    cards.innerHTML = `<div class="col mt-4">
        <div class="card">
            <img src=${img[4]} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${response.data.title}</h5>
                <hr>
                <p class="card-text">
                Cusine: ${cuisines}
                <br>
                Time: ${response.data.readyInMinutes}
                <br>
                Servings: ${response.data.servings}
                <br>
                Source: ${response.data.sourceName}
                </p>
                <a href=${response.data.sourceUrl} class="btn btn-primary" target="_blank">Checkout Recipie</a>
            </div>
        </div>
       </div>`;
  });

  info = `https://api.spoonacular.com/recipes/${ar[5]}/information?apiKey=${apiKey}`;
  axios.get(info).then(function (response) {
    cuisines = response.data.cuisines[0];
    if (cuisines === undefined) {
      cuisines = "Not Specified";
    }

    let cards = document.querySelector(".c6");
    cards.innerHTML = `<div class="col mt-4">
        <div class="card">
            <img src=${img[5]} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${response.data.title}</h5>
                <hr>
                <p class="card-text">
                Cusine: ${cuisines}
                <br>
                Time: ${response.data.readyInMinutes}
                <br>
                Servings: ${response.data.servings}
                <br>
                Source: ${response.data.sourceName}
                </p>
                <a href=${response.data.sourceUrl} class="btn btn-primary" target="_blank">Checkout Recipie</a>
            </div>
        </div>
       </div>`;
  });

  info = `https://api.spoonacular.com/recipes/${ar[6]}/information?apiKey=${apiKey}`;
  axios.get(info).then(function (response) {
    cuisines = response.data.cuisines[0];
    if (cuisines === undefined) {
      cuisines = "Not Specified";
    }

    let cards = document.querySelector(".c7");
    cards.innerHTML = `<div class="col mt-4">
        <div class="card">
            <img src=${img[6]} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${response.data.title}</h5>
                <hr>
                <p class="card-text">
                Cusine: ${cuisines}
                <br>
                Time: ${response.data.readyInMinutes}
                <br>
                Servings: ${response.data.servings}
                <br>
                Source: ${response.data.sourceName}
                </p>
                <a href=${response.data.sourceUrl} class="btn btn-primary" target="_blank">Checkout Recipie</a>
            </div>
        </div>
       </div>`;
  });

  info = `https://api.spoonacular.com/recipes/${ar[7]}/information?apiKey=${apiKey}`;
  axios.get(info).then(function (response) {
    cuisines = response.data.cuisines[0];
    if (cuisines === undefined) {
      cuisines = "Not Specified";
    }

    let cards = document.querySelector(".c8");
    cards.innerHTML = `<div class="col mt-4">
        <div class="card">
            <img src=${img[7]} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${response.data.title}</h5>
                <hr>
                <p class="card-text">
                Cusine: ${cuisines}
                <br>
                Time: ${response.data.readyInMinutes}
                <br>
                Servings: ${response.data.servings}
                <br>
                Source: ${response.data.sourceName}
                </p>
                <a href=${response.data.sourceUrl} class="btn btn-primary" target="_blank">Checkout Recipie</a>
            </div>
        </div>
       </div>`;
  });

  info = `https://api.spoonacular.com/recipes/${ar[8]}/information?apiKey=${apiKey}`;
  axios.get(info).then(function (response) {
    cuisines = response.data.cuisines[0];
    if (cuisines === undefined) {
      cuisines = "Not Specified";
    }

    let cards = document.querySelector(".c9");
    cards.innerHTML = `<div class="col mt-4">
        <div class="card">
            <img src=${img[8]} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${response.data.title}</h5>
                <hr>
                <p class="card-text">
                Cusine: ${cuisines}
                <br>
                Time: ${response.data.readyInMinutes}
                <br>
                Servings: ${response.data.servings}
                <br>
                Source: ${response.data.sourceName}
                </p>
                <a href=${response.data.sourceUrl} class="btn btn-primary" target="_blank">Checkout Recipie</a>
            </div>
        </div>
       </div>`;
  });

  info = `https://api.spoonacular.com/recipes/${ar[9]}/information?apiKey=${apiKey}`;
  axios.get(info).then(function (response) {
    cuisines = response.data.cuisines[0];
    if (cuisines === undefined) {
      cuisines = "Not Specified";
    }

    let cards = document.querySelector(".c10");
    cards.innerHTML = `<div class="col mt-4">
        <div class="card">
            <img src=${img[9]} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${response.data.title}</h5>
                <hr>
                <p class="card-text">
                Cusine: ${cuisines}
                <br>
                Time: ${response.data.readyInMinutes}
                <br>
                Servings: ${response.data.servings}
                <br>
                Source: ${response.data.sourceName}
                </p>
                <a href=${response.data.sourceUrl} class="btn btn-primary" target="_blank">Checkout Recipie</a>
            </div>
        </div>
       </div>`;
  });

  info = `https://api.spoonacular.com/recipes/${ar[10]}/information?apiKey=${apiKey}`;
  axios.get(info).then(function (response) {
    cuisines = response.data.cuisines[0];
    if (cuisines === undefined) {
      cuisines = "Not Specified";
    }

    let cards = document.querySelector(".c11");
    cards.innerHTML = `<div class="col mt-4">
        <div class="card">
            <img src=${img[10]} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${response.data.title}</h5>
                <hr>
                <p class="card-text">
                Cusine: ${cuisines}
                <br>
                Time: ${response.data.readyInMinutes}
                <br>
                Servings: ${response.data.servings}
                <br>
                Source: ${response.data.sourceName}
                </p>
                <a href=${response.data.sourceUrl} class="btn btn-primary" target="_blank">Checkout Recipie</a>
            </div>
        </div>
       </div>`;
  });

  info = `https://api.spoonacular.com/recipes/${ar[11]}/information?apiKey=${apiKey}`;
  axios.get(info).then(function (response) {
    cuisines = response.data.cuisines[0];
    if (cuisines === undefined) {
      cuisines = "Not Specified";
    }

    let cards = document.querySelector(".c12");
    cards.innerHTML = `<div class="col mt-4">
        <div class="card">
            <img src=${img[11]} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${response.data.title}</h5>
                <hr>
                <p class="card-text">
                Cusine: ${cuisines}
                <br>
                Time: ${response.data.readyInMinutes}
                <br>
                Servings: ${response.data.servings}
                <br>
                Source: ${response.data.sourceName}
                </p>
                <a href=${response.data.sourceUrl} class="btn btn-primary" target="_blank">Checkout Recipie</a>
            </div>
        </div>
       </div>`;
  });
}

// function showRandom(response) {
//   let random = document.querySelector(".random");
//   let n = 4,
//     i = 0;
//   let cards = ` <div class="row cards p-5">`;
//   for (i = 0; i < n; i++) {
//     let recipie = response.data.recipes[i].title;
//     let image = response.data.recipes[i].image;
//     let Cuisine = response.data.recipes[i].cuisines[0];
//     if (Cuisine === undefined) {
//       Cuisine = "Not Specified";
//     }
//     let servings = response.data.recipes[i].servings;
//     let source = response.data.recipes[i].sourceName;
//     let time = response.data.recipes[i].readyInMinutes;
//     if (image === undefined) {
//       i--;
//     } else {
//       cards =
//         cards +
//         `<div class="col mt-4">
//         <div class="card">
//             <img src=${image} class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${recipie}</h5>
//                 <hr>
//                 <p class="card-text">
//                 Cusine: ${Cuisine}
//                 <br>
//                 Time: ${time}
//                 <br>
//                 Servings: ${servings}
//                 <br>
//                 Source: ${source}
//                 </p>
//                 <a href=${response.data.recipes[i].sourceUrl} class="btn btn-primary" target="_blank">Checkout Recipie</a>
//             </div>
//         </div>
//        </div>`;
//     }
//   }
//   cards = cards + `</div>`;
//   random.innerHTML = cards;
// }
