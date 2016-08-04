export default class {
  constructor($scope, plantService) {

    let self = this;

    self.plantService = plantService;

    self.changeGreenery = function (greenery) {
      $scope.$emit('changeGreenery', greenery);
    }
  }
}
