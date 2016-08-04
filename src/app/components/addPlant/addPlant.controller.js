export default class {
  constructor($scope) {

    let self = this;

    self.name = 'vazon';
    self.period = 3;
    self.last = new Date;

    self.submitHendler = function () {
      if (self.greenery != undefined) {
        let plant = {
          name: self.name,
          period: self.period,
          history: [self.last]
        };

        self.error = "";

        self.$emit('addPlant', {
          plant: plant
        });
      } else {
        self.error = "Select greenery"
      }
    }
  }
}
