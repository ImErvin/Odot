angular.module('starter.controllers', [])

/* I use two controllers, one for each State. 
TaskCtrl parses in a $scope and the factory Tasks. $scope is used to manipulate and call variables and functions from the controllers in the HTML files and the controllers will manipulate and call variables and functions from the Tasks factory.  */
.controller('TaskCtrl', function($scope, Tasks) {
    
    /* Controlled by ng-model in the HTML */
    $scope.data = {
        taskName: "",
        taskDetail: ""
    };
    
    /* Calls Factory to retrieve the object array */
    $scope.tasks = Tasks.all();
    
    /* Makes a function remove that is controlled by ng-click and it parses in the current Item into the factory function */
    $scope.remove = function(task) {
        Tasks.remove(task);
    };

    /* Makes a function to add a task, it's controlled by ng-click and parses in the above data object details into the factory. If/else statements validate the input i.e: If they don't enter a task detail, it will automatically show "No Details" etc.  */
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

/* The TaskDetailCtrl parses in a $scope, $stateParams to work between each task state and the factory Tasks */
.controller('TaskDetailCtrl', function($scope, $stateParams, Tasks) {
    /* Object for new details for the edit function */
    $scope.data = {
        taskName: "",
        taskDetail: ""
    };  
    
    /* Edit function will rename the task name or task details in the object. It parses in the new information to the factory. The If/Else is validation i.e; The user only wants to change the name but not the details. $stateParams allows the edit function to keep the current id of the task as we don't want to edit that. */
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
    
    /* Calls the getTask function and parses in the stateParams for */
    $scope.task = Tasks.getTask($stateParams.taskId);
})
;
