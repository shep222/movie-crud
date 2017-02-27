$(document).ready(function() {

    $.get('/movies').then(myMovies);

    function myMovies(movies) {
        movies.forEach(function(movie) {
            $('.theMovies').append($('<div class="movieList"><h4 class="title">' + movie.title + '</h4><h4 class="title">' + movie.director +
                '</h4><h4 class="title">' + movie.year + '</h4><h4 class="title">' + movie.rating +
                '</h4><button class="delBtn btn btn-primary"type="button" name="button">Delete Movie</button><button class="btn btn-primary"type="button" name="button">Edit</button></div>'))
        })
    }
    var myNewMovie = {}
    $('.addMovie').on('click', function (event) {
       myNewMovie.title = $('.newTitle').val()
       myNewMovie. year = $('.newYear').val()
       myNewMovie.director = $('.newDirector').val()
       myNewMovie.rating = $('.newRating').val()
       myNewMovie.url = $('.newURL').val()
      $.ajax({
        url: '/movies',
        method: 'POST',
        crossDomain: true,
        data: JSON.stringify(myNewMovie),
        contentType: "application/json; charset=utf-8"
      })
      .then(response => {
        console.log(response);
      })
      .catch(err =>{
        console.log(err);
      })
    })

    $('.delBtn').on('click', function (event) {
      
    })








})
