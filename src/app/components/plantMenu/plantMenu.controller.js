export default class {
  constructor($scope, plantService) {

    let self = this;

    self.getStatus = plantService.getPlantStatus;
    self.getRowClass = plantService.getRowClass;

    self.deleteGreenery = function () {
      $scope.$emit('deleteGreenery', {
        _id: self.greenery._id
      });
    };

    self.changePlant = function (plant) {
      $scope.$emit('changePlant', plant);
    };
  }
}
