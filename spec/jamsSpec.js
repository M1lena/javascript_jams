describe('Card', function() {
  var card;



  describe('has a value', function () {

    it('has value of 8', function () {
      card = new Card();
      expect(card.value).toEqual('8');
    });
  });

});