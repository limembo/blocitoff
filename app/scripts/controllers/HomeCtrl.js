(function() {
    function HomeCtrl(Task) {
      this.tasks = Task.all;
    };

    angular
        .module('blocitOff')
        .controller('HomeCtrl', ['Task',HomeCtrl]);
})();
