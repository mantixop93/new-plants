import controller from './addPlant.controller.js';

export default {
  controller: controller,
  bindings: {
    greeneryId: '=greeneryId'
  },
  templateUrl: '/js/src/modules/greeneryList/components/addPlant/addGreenery.AddPlant.GreeneryMenu.plantMenu.plantView.template.html'
}
