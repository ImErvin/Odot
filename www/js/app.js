angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  
  /* Decalred Two States, Task and Task Details, Task is the default main page where user can view all tasks and add a new task. Task Details is a sub state of Task, it will display information for each Task(object). The URL will be different for each task. Sampled from the Tabs template for chats. */
  .state('tab.task', {
      url: '/task',
      views: {
        'tab-task': {
          templateUrl: 'templates/tab-task.html',
          controller: 'TaskCtrl'
        }
      }
    })
    .state('tab.task-detail', {
      url: '/task/:taskId',
      views: {
        'tab-task': {
          templateUrl: 'templates/task-detail.html',
          controller: 'TaskDetailCtrl'
        }
      }
    })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/task');

});
