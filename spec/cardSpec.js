describe('Card', function () {
  var card;



  describe('can have a value', function () {

    it('of 8', function () {
      card = new Card('8');
      expect(card.value).toEqual('8');
      });
    });

    it('of 10', function () {
      card = new Card('10');
      expect(card.value).toEqual('10');
    });
});