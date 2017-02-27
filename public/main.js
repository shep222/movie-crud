$(document).ready(function() {

    $.get('/movies').then(myMovies);

    function myMovies(movies) {
        movies.forEach(function(movie, i) {
            $('.theMovies').append($(`<div class="movieList "><h4 class="title movie${i}"> ${movie.title} </h4><h4 class="director">  ${movie.director}
                </h4><h4 class="year"> ${movie.year}  </h4><h4 class="rating">  ${movie.rating}
                </h4><button id=${i} class="pick${i} delBtn btn btn-primary"type="button" name="button">Delete Movie</button><button class="editBtn btn btn-primary"type="button" name="button">Edit</button></div>`))
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
            })
            .catch(err => {
                console.log(err);
            })
            window.location.reload()
    })

    $('.delBtn').click(function() {
        $('.delBtn').html('<button id="btnNew">Add Button</button>');
    });

    $('body').on('click', '.delBtn', function() {
        var id = this.id
        var myClass = ".movie" + id
        var deleteMovie = $(myClass).text().trim()
        $.ajax({
          url:`/movies/${deleteMovie}`,
          method: 'DELETE',
          crossDomain: true,

          contentType: "application/json; charset=utf-8"
        })
        window.location.reload()

    });






    $('.editBtn').on('click', function(event) {

    })








})
