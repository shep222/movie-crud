$(document).ready(function() {
$.get('/movies/'+location.search.slice(7)).then(myEditedMovie);

function myEditedMovie (movie) {
  $('.showTitle').append('<h1>'+movie.title+'</h1>')
  $('.showYear').text('Year: '+movie.year)
  $('.showDirector').text('Director: '+movie.director)
  $('.showRating').text('My Rating: '+movie.rating)
  $('.showImg').append('<img class="imageStyle" src="'+movie.url+'" alt="">')

}
})
