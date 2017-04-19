import tasksView from './views/tasks.html'
let configRouter = function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('view-one', {
            url: '/view-one',
            template: tasksView,
            controller: 'TasksController',
            controllerAs: 'ctrl'
        })
    $urlRouterProvider.otherwise('view-one');
};

export default configRouter;
