// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((d) => d.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}
//getAllDirectors(movies);

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((d) => d.director === director);
  console.log('EXERCISE 2 ->', result);
  return result;
}
//getMoviesFromDirector(movies, 'Quentin Tarantino');

function moviesAverageOfDirector(array, director) {
  let list = array.filter((f) => f.director === director);

  let average = list.reduce((a, f) => a + (f.score || 0), 0) / list.length || 0;

  console.log('EXERCISE 3 ->', parseFloat(average.toFixed(2)));

  return parseFloat(average.toFixed(2));
}
//moviesAverageOfDirector(movies, 'Quentin Tarantino');

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let alphaSort = array
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);

  console.log('EXERCISE 4 ->', alphaSort);
  return alphaSort;
}

//orderAlphabetically(movies);

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let yearSort = array.slice().sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.title.localeCompare(b.title);
  });

  console.log('EXERCISE 5 ->', yearSort);
  return yearSort;
}

// Exercise 6: Calculate the average of the movies in a category

function moviesAverageByCategory(array, genre) {
  let list = array.filter((f) => f.genre.includes(genre));

  let average = list.reduce((a, f) => a + (f.score || 0), 0) / list.length || 0;

  console.log('EXERCISE 6 ->', parseFloat(average.toFixed(2)));

  return parseFloat(average.toFixed(2));
}

//moviesAverageByCategory(movies, 'Crime');
//moviesAverageByCategory(movies, 'Fantasy');
// Exercise 7: Modify the duration of movies to minutes

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
