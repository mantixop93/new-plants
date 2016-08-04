export default class {
  constructor($scope) {
    let self = this.plant;

    self.deletePlant = function () {
      $scope.$emit('deletePlant', {
        greeneryId: self.greeneryId,
        plantId: self.plant._id
      });
    };

    self.waterPlant = function () {
      $scope.$emit('waterPlant', {
        plantId: self._id,
        date: new Date
      });
    };
  }
}
