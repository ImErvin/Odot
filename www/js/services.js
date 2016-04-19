angular.module('starter.services', [])

.factory('Tasks', function() {
  var tasks = {
  data:
  [{
    id: 0,
    name: 'Buy Milk',
    taskDetail: 'Stop by the shop',
    added: new Date()
  }, {
    id: 1,
    name: 'Wash Car',
    taskDetail: 'Dont forget to hoover',
    added: new Date()  
  }]};
    
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
    }
  };
});
