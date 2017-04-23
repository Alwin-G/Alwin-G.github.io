app.controller("LoginController", function($scope, $window, ProfileData, UserService) {
    $scope.profile      = ProfileData.getProfiles();
    $scope.ProfileData  = ProfileData;
    $scope.UserService  = UserService;
    $scope.controller   = this;

    $scope.checkUser = function(name, password) {
        var loggedIn = false;
        $scope.profile.forEach(function(p) {
            if(p.name == name && p.password == password)
            {
                UserService.setUser(p.id);
                loggedIn = true;
                $window.location = "#!/Home"; //relocate to the home screen
            }
        }, this);

        if(!loggedIn)
        { alert("User does not exist"); }
    }

    $scope.createUser = function() {
        $window.location = "#!/CreateUser";
    }
});