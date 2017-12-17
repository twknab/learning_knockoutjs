// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
  // Renamed `this` to mimic more angular styling:
  var $scope = this;

  $scope.firstName = ko.observable("Bert");
  $scope.lastName = ko.observable("Bertington");

  // Gather full name (combine fields):
  $scope.fullName = ko.computed(function() {
      return $scope.firstName() + " " + $scope.lastName();
  }, $scope);

  // Create a button to capitalize a name:
  $scope.capitalizeLastName = function() {
      var currentVal = $scope.lastName();
      $scope.lastName(currentVal.toUpperCase());
  };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
