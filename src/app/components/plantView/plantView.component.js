import controller from './plantView.controller.js';

export default {
  controller: controller,
  bindings: {
    plant: '=plant'
  },
  templateUrl: 'app/components/plantView/plantView.template.html'
}
