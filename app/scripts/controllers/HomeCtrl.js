(function() {
  function HomeCtrl(Task) {
    this.tasks = Task.all;


    this.hide = function(task) {
     return task.created < (moment().dayOfYear() - 7) || task.completed == true
    };

    this.addTask = function () {
         if (this.title) {
           this.task.$add({
             title: this.title,
             description: this.description,
             created: moment().dayOfYear(),
             completed: this.completed
           });
           this.title = '';
         }
       };


    // this.addTask = function () {
    //     this.tasks.push({
    //       title: this.task.title,
    //       description: this.description,
    //       created: moment(),
    //       completed: this.completed
    //     });
    //     this.task.title = '';
    // };

    this.expiredTask = function (created) {
      if (created < Date.now() - 604800000) {
        return true;
      }
    }
  }

  angular
    .module('blocitoff')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
