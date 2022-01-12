const main2 = (() => {
  const movieGrid = document.querySelector(".movie-grid");

  const apiKey = "522dd5d5cb843ca37f78d125602c6c02";

  const imgBasePath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";

  fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      data.results.map((movie, index) => {
        if (index < 18) {
          movieGrid.innerHTML += ` <a href="movie-details.html?movieId=${movie.id}">
        <div id=${movie.id} class="movie-box">
        
        <img src=${imgBasePath}${movie.poster_path} alt="${movie.title} poster pic">
                
                
                <div>
                <h2>${movie.title} </h2>
                <span>Rating: ${movie.vote_average} </span> <br>
                <span>Released on ${movie.release_date} </span>
                <p>${movie.overview} </p>
                 </div>
                 
                 
            </div>
            
          </a>
            `;
        }
      });
    })
    .catch((err) => console.log(err));
})();
