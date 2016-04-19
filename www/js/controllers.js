angular.module('starter.controllers', [])

.controller('TaskCtrl', function($scope, Tasks) {

  $scope.data = {
      taskName: "",
      taskDetail: ""
  };
    
  $scope.tasks = Tasks.all();
  $scope.remove = function(task) {
    Tasks.remove(task);
  };
    
  $scope.addTask = function() {
      if($scope.data.taskName === "" && $scope.data.taskDetail === ""){
          console.log("empty");
      }else if ($scope.data.taskName == ""){
          alert("Please specify a task name");
      }else{
          if($scope.data.taskDetail == ""){
              $scope.data.taskDetail = "No Details";
          }else{
      Tasks.addTask($scope.data.taskName, $scope.data.taskDetail);
      
      $scope.data.taskName = "";
   $scope.data.taskDetail = "";
          }
  } 
  }
})

.controller('TaskDetailCtrl', function($scope, $stateParams, Tasks) {
  $scope.data = {
      taskName: "",
      taskDetail: ""
  };  
       
  $scope.editTask = function() {
      Tasks.editTask($stateParams.taskId, $scope.data.taskName, $scope.data.taskDetail)
      $scope.data.taskName = "";
   $scope.data.taskDetail = "";
  }    
      
  $scope.task = Tasks.getTask($stateParams.taskId);
})
;
