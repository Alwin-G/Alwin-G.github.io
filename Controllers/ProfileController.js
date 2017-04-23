app.controller("ProfileController", function($scope, $window, ProfileData, UserService) {
    $scope.user = UserService.getUser();
    $scope.profile = ProfileData.getProfiles();
    $scope.ProfileData = ProfileData;

    $scope.deleteProfile = function(user)
    {
        $scope.ProfileData.deleteProfile(user);
        $window.location = "#!/Login";
    }
});