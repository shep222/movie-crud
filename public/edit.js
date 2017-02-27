$(document).ready(function() {
$.get('/movies/'+location.search.slice(7)).then(myEditedMovie);

function myEditedMovie (movie) {
  console.log(movie.title);
  $('.editTitle').val(movie.title)
  $('.editYear').val(movie.year)
  $('.editDirector').val(movie.director)
  $('.editRating').val(movie.rating)
  $('.editURL').val(movie.url)

  var editedMovie = {}
  $('.editBtn').on('click', function(event) {
      editedMovie.title = $('.editTitle').val()
      editedMovie.year = $('.editYear').val()
      editedMovie.director = $('.editDirector').val()
      editedMovie.rating = $('.editRating').val()
      editedMovie.url = $('.editURL').val()

      $.ajax({
              url: '/movies/'+location.search.slice(7),
              method: 'PUT',
              crossDomain: true,
              data: JSON.stringify(editedMovie),
              contentType: "application/json; charset=utf-8"
          })
          .then(response => {
              console.log(response);
              window.location = "index.html"
          })
          .catch(err => {
              console.log(err);
          })
  })

}
})
