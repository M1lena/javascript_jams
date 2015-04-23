$(document).ready(function() {

  var card1 = new Card('5');
  var card2 = new Card('10');
  var card3 = new Card('5');

  flippedCards = []

  function matched(a,b) {

  };

  function checker() {
    if (flippedCards.count === 2) {
      if (flippedCards[0] === flippedCards[1]) {
        matched(flippedCards[0], flippedCards[1]);
      flippedCards = [];
      } else if (flippedCards.count < 2) {
        flippedCards.push($(this).html();)
      }
    }
  };



  $('.card:first').click(function() {
    $(this).html(card1.value);
    checker();
    }
  });

  $('.card:eq(1)').click(function() {
    $(this).html(card2.value);
  });

  $('.card:eq(2)').click(function() {
    $(this).html(card3.value);
  });

});