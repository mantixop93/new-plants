import controller from './greeneryMenu.controller.js';

export default {
  controller: controller,
  bindings: {
    greeneries: "=greeneries"
  },
  templateUrl: 'app/components/greeneryMenu/greeneryMenu.template.html'
}
