import controller from './addGreenery.controller.js';

export default {
  controller: controller,
  bindings: {
    greeneries: '=greeneries'
  },
  templateUrl: 'app/components/addGreenery/addGreenery.template.html'
}
