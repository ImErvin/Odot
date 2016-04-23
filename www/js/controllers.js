angular.module('starter.controllers', [])

/* I use two controllers, one for each State. 
TaskCtrl parses in a $scope and the factory Tasks. $scope is used to manipulate and call variables and functions from the controllers in the HTML files and the controllers will manipulate and call variables and functions from the Tasks factory.  */
.controller('TaskCtrl', function($scope, Tasks) {
    
    /*  */
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
                
                Tasks.addTask($scope.data.taskName, $scope.data.taskDetail);
                
                $scope.data.taskName = "";
                $scope.data.taskDetail = "";
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

        if($scope.data.taskName === "" && $scope.data.taskDetail === ""){

        }
        else if($scope.data.taskName === ""){
            $scope.data.taskName = Tasks.getTask($stateParams.taskId).name;
            
            Tasks.editTask($stateParams.taskId, $scope.data.taskName, $scope.data.taskDetail)
            
            $scope.data.taskName = "";
            $scope.data.taskDetail = "";
        }else if($scope.data.taskDetail === ""){
            $scope.data.taskDetail = Tasks.getTask($stateParams.taskId).taskDetail;
            
            Tasks.editTask($stateParams.taskId, $scope.data.taskName, $scope.data.taskDetail)
            
            $scope.data.taskName = "";
            $scope.data.taskDetail = "";
        }else{
            Tasks.editTask($stateParams.taskId, $scope.data.taskName, $scope.data.taskDetail)
            
            $scope.data.taskName = "";
            $scope.data.taskDetail = "";
        }

    }  

    $scope.task = Tasks.getTask($stateParams.taskId);
})
;
