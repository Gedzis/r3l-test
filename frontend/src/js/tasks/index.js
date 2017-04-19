import angular from 'angular';
import TasksController from './controllers/tasks.controller';
import TasksService from './services/tasks.service';
import TaskDirective from './directives/task-display.directive';

angular
  .module('app.tasks', [])
  .controller('TasksController', TasksController)
  .service('TasksService', TasksService)
  .directive('taskDisplay', TaskDirective.directiveFactory);
