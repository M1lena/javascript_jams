describe('Jam', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  describe('player can', function() {

    it('see value of card one after clicking it', function() {
      $('.card:first').click();
      expect($('.card:first')).toHaveText('5');
    });

    it('see value of two cards after clicking them', function() {
      $('.card:first').click();
      $('.card:eq(1)').click();
      expect($('.card:first')).toHaveText('5');
      expect($('.card:eq(1)')).toHaveText('10');
    });

    it('receive confirmation if he clicks on two matching cards', function() {
      $('.card:first').click();
      $('.card:eq(2)').click();
      expect($('.card:first')).toHaveText('5');
      expect($('.card:eq(2)')).toHaveText('5');
      expect($('.card:first')).toHaveClass('matched');
      expect($('.card:eq(2)')).toHaveClass('matched');
    });
  });

  // 'click on 1 card, see value'
  // 'click one 2nd card, see value'
  // "if two cards' values match, have pop up 'good job'"
  // "if two cards' values don't match, change back to ?"

});