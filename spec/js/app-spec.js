(function() {
  describe('TheTruth', function() {
    beforeEach(function() {
      return this.theTruth = new TheTruth;
    });
    return it('is out there', function() {
      return (expect(this.theTruth.isOutThere())).toBeTruthy();
    });
  });
}).call(this);
