describe('Given a user noob123', function(){
  describe('When noob123 has only ever sent one blast', function() {
    var scope = {};
    beforeEach(function(){
      module('MasterBlaster');
      inject(function($controller){
        $controller('BlastController', {$scope : scope});
      });
      scope.addBlaster({"Username" : "noob123", "Blasts" : 1});
      it('Then he should not recieve a gold star.', function(){
        expect(scope.starColor('noob123').toBe('none');
      });
  });
});
