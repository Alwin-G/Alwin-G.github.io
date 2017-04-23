app.controller("CreateUserController", function($scope, $window, ProfileData, UserService) {
    $scope.profiles     = ProfileData.getProfiles();
    $scope.ProfileData  = ProfileData;
    $scope.profile      = [{id: "", name:"", password:"", age:"", gender:""}];
    //the row above is purely meant as a spaceholder for the function newUser()
    $scope.max          = Math.max.apply(Math,$scope.profiles.map(function(p){return p.id;}));
    //the row above gets the maximum id in the profile list

    $scope.newUser = function() {
        $scope.profile.id = $scope.max+1;
        var failed = true;
        
        if($scope.checkTaken())
        {
            ProfileData.createProfile($scope.profile);
            UserService.setUser($scope.profile.id);
            $window.location = "#!/Home";
            alert("User created and logged into the new account");
            var failed = false;
        }
        
        else
        {
            alert("Username already exists");
            document.getElementById("name").innerHTML = "Name taken";
        }
        return failed;
    }

    $scope.checkTaken = function() {
        var taken = true;

        ProfileData.getProfiles().forEach(function(p) {
            if(p.name == $scope.profile.name)
            { taken = false; }
        }, this);
        return taken;
    }
});