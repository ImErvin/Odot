 angular.module('starter.services', [])

 /* Single factory called Tasks, Tasks is used in both controllers */
.factory('Tasks',['$http',function($http){
    
    /* Object Array holding the task id, name, details and the added date. This is the main variable of the app, it gets manipulated by all functions. */
   var tasks = {
        data:
        [{
            id: 0,
            name: 'Sample Task',
            taskDetail: 'Sample Detail',
            added: new Date()
        }]       
    };
    
    /* The addTask parses in a taskName and taskDetail from the controller and creates a new object in the array using the .push method.
    id: is set by the length of the object array plus 1, so they will never be identical. The name is parsed in from the controller which is set by a form in the html, the detail is also parsed in from the controller. The added date uses the function Date(). Code is sampled from solution-factories and modified by me. */
    function addTask(taskName, taskDetail) {
        tasks.data.push({id: tasks.data.length+1, name: taskName, taskDetail: taskDetail, added: new Date()});
    }    
    
    /* EditTask function is used to edit the name and details of a task. It parses in 3 variables, an Id, taskName and taskDetails. Similar to the getTask function, it loops through the object array and when the parsed id matches the object id, it sets a new name and details for that current task. */
    function editTask(taskId, taskName, taskDetail){
        for (var i = 0; i < tasks.data.length; i++) {
            if (tasks.data[i].id === parseInt(taskId)) {
                tasks.data[i].name = taskName;
                tasks.data[i].taskDetail = taskDetail;
            }
        }
    }
    
    /* Each factory must have a return statement, here we return all which returns the object array. remove which uses splice to remove an object from the array. It parses in a task which is set by the ion-list/ion-item. The addTask allows the controller to use the addTask function, editTask allows the controller to use the editTask function and getTask is used to display the view of a specific task, as every task has it's own state. */
    return {
        all: function() {
            return tasks.data;
        },
        remove: function(task) {
            tasks.data.splice(tasks.data.indexOf(task), 1);
        },
        addTask: addTask,
        editTask: editTask,  
        getTask: function(taskId) {
            for (var i = 0; i < tasks.data.length; i++) {
                if (tasks.data[i].id === parseInt(taskId)) {
                return tasks.data[i];
                }
            }
            return null;
        }
    };
}])
;
