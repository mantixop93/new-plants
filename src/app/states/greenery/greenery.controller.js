export default class {
  constructor($scope, dataProvider, greeneryService, $translate) {
    let self = this;
    self.user = "defaultUser";
    self.greeneries = greeneryService.greeneries;
    self.currentPlant = undefined;
    self.currentGreenery = undefined;
    self.status = undefined;

    dataProvider.getGreeneries(self.user, function (response) {
      response.data.forEach(function (current) {
        greeneryService.addGreenery(current);
      });
    });

    $scope.$on("addGreenery", function (event, data) {
      dataProvider.addGreenery(self.user, data.greenery, function (response) {
        greeneryService.addGreenery(response.data);
      });
    });

    $scope.$on("deleteGreenery", function (event, data) {
      dataProvider.deleteGreenery(self.user, data._id, function () {
        greeneryService.removeGreenery(data._id);
      });
    });

    $scope.$on("addPlant", function (event, data) {
      dataProvider.addPlant(self.user, data.greeneryId, data.plant, function (response) {
        greeneryService.updateGreenery(response.data);
      });
    });

    $scope.$on("deletePlant", function (event, data) {
      dataProvider.deletePlant(self.user, data.greeneryId, data.plantId, function () {
        greeneryService.removePlant(data.greeneryId, data.plantId);
      });
    });

    $scope.$on("waterPlant", function (event, data) {
      dataProvider.waterPlant(self.user, self.currentGreenery._id, data.plantId, data.date, function (response) {
        greeneryService.waterPlant( self.currentGreenery._id, data.plantId, response.data);
      });
    });

    $scope.$on("changeGreenery", function (event, data) {
      self.currentGreenery = data;
      self.currentPlant = undefined;
    });


    $scope.$on("changePlant", function (event, data) {
      self.currentPlant = data;
      self.status = 'viewPlant';
    });

    self.changeLang = function (lang) {
      $translate.use(lang);
    }
  }
}
