(function() {
  var welcomeMessage = {
    templateUrl: "partials/welcomeMessage.html"
  };
  angular.module("app")
    .component("welcomeMessage", welcomeMessage)
})();
