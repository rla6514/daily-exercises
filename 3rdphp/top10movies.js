


const loadMovies = () => {
  fetch ('http://www.cbp-exercises.test/thirdphp/top10movies.php')
  .then(response => response.json())
  .then(data => {
    let list = document.getElementById('top10movies');
    list.innerHTML = '';

    data.forEach(movie_name => {
      let item = document.createElement('li');
      item.innerHTML = movie_name;

      list.appendChild(item);
    })
  })
}

let button = document.getElementById('load_movies');

button.addEventListener('click', event => {
  loadMovies();
})