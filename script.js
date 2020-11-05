function goBack() {
    window.history.back()
 }

 function goForward() {
    window.history.forward()
 }

// fetch('https://api.themoviedb.org/3/movie/popular?api_key=481adc0fe1fe4c92d90b3afd667e5e1c')
//   .then(response => response.json())
//   .then(data => console.log(data));

  function fetchData() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=481adc0fe1fe4c92d90b3afd667e5e1c").then(response => {
        console.log(response);
        if (!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    }).then(data => {
        let movies = data.results;
        for (let movie in movies) {
            let cur_movie = movies[movie];
            let div = document.createElement("div");
            div.id = "movie" + movie;
            let img = document.createElement("img");
            const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
         	img.src = IMAGE_URL + cur_movie.poster_path;
            div.appendChild(img);
            document.getElementById("movies").appendChild(div);
        }
        console.log(data.results); 
    }).catch(error => {
        console.log(error);
    });
  }

  fetchData();
  