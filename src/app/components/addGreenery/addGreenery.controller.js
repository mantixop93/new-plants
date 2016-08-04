export default class {
  constructor($scope) {

    let self = this;

    self.name = 'Plants';
    self.isActive = false;

    self.changeState = function () {
      self.isActive = !self.isActive;
    };

    self.submitHendler = function () {
      $scope.$emit('addGreenery', {
        greenery: self.name
      });
      self.changeState();
    }
  }
}
