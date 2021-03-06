angular.module('starter.controllers', [])

.run(function($rootScope) {
  $rootScope.totalQuantity = 0;
})

.controller('quantityCtrl', function($scope, $rootScope) {
  $scope.quantity = 0;
  $scope.increment = function(num) {
    // deal with quantity of individual card 
    if ($scope.quantity == 0 && num == -1) {
      return;
    }
    else {
      $scope.quantity += num;
      $rootScope.totalQuantity += num;
    }

    // deal with displaying checkout if any card has quantity >= 1
    if ($rootScope.totalQuantity == 0) {
      document.getElementById('checkoutBarImg').style.opacity = "0.8";
      document.getElementById('checkoutBar').style.opacity = "0.8";
    }
    else if ($rootScope.totalQuantity == 1) {
      document.getElementById('checkoutBarImg').style.opacity = "1.0";
      document.getElementById('checkoutBar').style.opacity = "1.0";
    }
  }
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ProfileCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})