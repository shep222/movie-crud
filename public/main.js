$(document).ready(function() {

    $.get('/movies').then(myMovies);

    function myMovies(movies) {
        movies.forEach(function(movie, i) {
            $('.theMovies').append($(`<div class="movieList"><a class="showMe"><h4 class="title">${movie.title}</h4></a><h4 class="director"> ${movie.director}
                </h4><h4 class="year">${movie.year}  </h4><h4 class="rating"> ${movie.rating}
                </h4><button class="delBtn btn btn-primary"type="button" name="button">Delete Movie</button><button class="editBtn btn btn-primary"type="button" name="button">Edit</button></div>`))
        })
    }
    var myNewMovie = {}
    $('.addMovie').on('click', function(event) {
        myNewMovie.title = $('.newTitle').val()
        myNewMovie.year = $('.newYear').val()
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
                window.location.reload()
            })
            .catch(err => {
                console.log(err);
            })
    })

    $('body').on('click', '.delBtn', function() {
        var deleteMovie = $(this).parent().find('.title').text().trim()
        $.ajax({
          url:`/movies/${deleteMovie}`,
          method: 'DELETE',
          crossDomain: true,
          contentType: "application/json; charset=utf-8"
        })
        .then(response => {
            console.log(response);
            window.location.reload()
        })
        .catch(err => {
            console.log(err);
        })
    });

    $('body').on('click', '.editBtn', function() {
      var editTitle = $(this).parent().find('.title').text().trim()
      window.location = "/edit.html?title="+editTitle
    })

    $('body').on('click', '.showMe', function() {
      var editTitle = $(this).parent().find('.title').text().trim()
      window.location = "/show.html?title="+editTitle
    })









})
