 angular.module('starter.services', [])

.factory('Tasks',['$http',function($http){
   var tasks = {
        data:
        [{
            id: 0,
            name: 'Sample Task',
            taskDetail: 'Sample Detail',
            added: new Date()
        }]       
    };
    
    function addTask(taskName, taskDetail) {
        tasks.data.push({id: tasks.data.length+1, name: taskName, taskDetail: taskDetail, added: new Date()});
    }    

    function editTask(taskId, taskName, taskDetail){
        for (var i = 0; i < tasks.data.length; i++) {
            if (tasks.data[i].id === parseInt(taskId)) {
                tasks.data[i].name = taskName;
                tasks.data[i].taskDetail = taskDetail;
            }
        }

    }

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
        },set:function(key,value){
          return localStorage.setItem(key,JSON.stringify(value));
       },
       get:function(key){
         return JSON.parse(localStorage.getItem(key));
       },
       destroy:function(key){
         return localStorage.removeItem(key);
       },
    };
}])
;
