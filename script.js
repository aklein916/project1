//pseudocode//
//introduce the deck of cards//
//have about 20 cards laid out at once, face-down.
//when one card is clicked the card flips over and displays the image or value of the card. The player clicks another card to turn that one over. when a second card is clicked it flips over. If the two cards are the same then they disappear off the page/ or stay flipped over/ or show a photo on them that says they match. The points of the palyer increase with each match. The player continues clicking in pairs 3of two. If the cards are not a match they are flipped back, face-down, so the player can still click on those cards again to find a match. the number of tries of the palyer increases with each guess, and the number correct increases with each correct pair discovered.
//when all pairs have been correctly identified the player gets a message that they won. The message tells them how many guesses it took them to identify the ten pairs correctly.  each time the game is played the cards should be shuffled into a random order

//define the variables//
var card = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'];
var pairs; //store memory of matches//
var lastThingClicked;
cardPickOne= null;
cardPickTwo = null
var numberOfMatches;
//randomize the carts--can see it in console but doesn't shuffle the cards//
card.sort(function() {
  if (Math.random() > 0.5) return 1;
  else { return -1;
  }
});
//click on the cards//
var clickCard = document.querySelectorAll(".card");
console.log(clickCard);
//check for a match between the two picks by adding a class ".front" when the card is clicked. if the two cards are the same, there is a match. if not the cards flip back over//
for(var i= 0; i<clickCard.length; i++){
  clickCard[i].addEventListener("click", function(){
    if (cardPickOne == null){
      cardPickOne=this.getAttribute("name");
      console.log("Your first pick is " + cardPickOne);
      this.classList.add("front");
      lastThingClicked = this
    } else {
      cardPickTwo=this.getAttribute("name");
      console.log("Your second pick was " + cardPickTwo);
      this.classList.add("front");
      if(cardPickOne === cardPickTwo){
        alert("You have a match!");
      } else{
        alert("Try again!");
        this.classList.remove("front");
        lastThingClicked.classList.remove("front");
      }
      cardPickOne=null;
      cardPickTwo=null;
    }
  });
}
//when the number of class ".card" is the same as class ".front", the game finishes//
function countGuesses(){
  var numberOfMatches = document.querySelectorAll(".front");
  if (numberOfMatches.length == card.length) {
    alert("You have finished the game!");
  };
}
countGuesses();
