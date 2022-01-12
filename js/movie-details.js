const main3 = (() => {
  const movieInfoGrid = document.querySelector(".movie-info");
  const castSection = document.querySelector(".cast-section");

  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const movieId = parseInt(params.get("movieId"));

  const apiKey = "522dd5d5cb843ca37f78d125602c6c02";

  const imgBasePath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  const youtubePath = "https://www.youtube.com/watch?v=";

  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      movieInfoGrid.innerHTML = `
      <img src="${imgBasePath}${data.poster_path}" alt="${data.title} poster pic">
      <div class="text-box">
          <h1> ${data.title} </h1>
          
              <span> Rating: ${data.vote_average} </span> <br>
              <p> ${data.overview} </p>
          
      </div>`;
    })
    .catch((err) => console.log(err));

  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const textBox = document.querySelector(".text-box");
      const trailerObj = data.results[0];
      textBox.innerHTML += `<a target="_blank" href="${youtubePath}${trailerObj.key}">Link to Trailer </a>`;
    })
    .catch((err) => console.log(err));

  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      for (let i = 0; i < 10; i++) {
        const castObj = data.cast[i];
        castSection.innerHTML += `  <div class="cast-grid">
        <img src="${imgBasePath}${castObj.profile_path}" alt="${castObj.name} poster pic">
        <h2>${castObj.name}</h2>
        <h3>${castObj.character}</h3>
        </div>`;
      }
    })
    .catch((err) => console.log(err));
})();
