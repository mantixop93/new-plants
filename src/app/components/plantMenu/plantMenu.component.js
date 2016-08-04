import controller from './plantMenu.controller';

export default {
  controller: controller,
  bindings: {
    greenery: "=greenery"
  },
  templateUrl: 'app/components/plantMenu/plantMenu.template.html'
}
