(function() {

  angular
    .module("app")
    .config(function($routeProvider) {
      $routeProvider
        .when("/welcome", {
          template: "<welcome-message></welcome-message>"
        })
        .when("/form", {
          template: "<task-form></task-form>"
        })
        .otherwise({redirectTo: "/welcome"
      });
    });
})();
