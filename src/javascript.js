
// Code to flip the cards on my Kit page
const flipCards = document.querySelectorAll('.flip-card-inner');

flipCards.forEach(function(flipCard) {
  flipCard.addEventListener('click', function() {
    flipCard.classList.toggle('flip');
    console.log("I've flipped");
  });
});


// Code to make my header sticky
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

