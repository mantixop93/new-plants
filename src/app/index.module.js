/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import "angular-translate";

import AddPlantComponent from './components/addPlant/addPlant.component.js';
import AddGreeneryComponent from './components/addGreenery/addGreenery.component.js'
import GreeneryMenuComponent from './components/greeneryMenu/greeneryMenu.component.js';
import PlanrView from './components/plantView/plantView.component.js';
import PlantMenuComponent from './components/plantMenu/plantMenu.component';
import GreeneryController from './states/greenery/greenery.controller';

import dataProvider from './services/greenery-data.provider';
import plantService from './services/plant.service';
import greeneryService from './services/greenery.service';

angular.module('app', ['ngResource', 'ui.router', 'ui.bootstrap', 'pascalprecht.translate'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .component('addPlant', AddPlantComponent)
  .component('addGreenery', AddGreeneryComponent)
  .component('greeneryMenu', GreeneryMenuComponent)
  .component('plantMenu', PlantMenuComponent)
  .component('plantView', PlanrView)
  .controller('GreeneryController',GreeneryController)
  .factory("dataProvider", ['$http', dataProvider])
  .factory("plantService",  plantService)
  .factory("greeneryService", ["plantService", greeneryService]);
