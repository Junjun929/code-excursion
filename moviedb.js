var movie = [
  {
  title: 'Sing Street',
  rating: 4.5,
  hasWatched: true
},
  {
  title: 'Flipped',
  rating: 4.5,
  hasWatched: true
},
  {
  title: 'The Way He Looks',
  rating: 5,
  hasWatched: true
},
  {
  title: 'I, Tonya',
  rating: 3.5,
  hasWatched: true
},
  {
  title: 'Perfect stranger',
  rating: 3.5,
  hasWatched: false  }
]

var question = prompt('Please type the movie title')

movie.forEach(function(title){
if(movie.hasWatched){
  console.log('You have seen '+ moive.title +' - '+ movie.rating +' stars')
}
else {
console.log('You have not seen '+ movie.title +' - '+ movie.rating+ ' stars' )
}
}
)
