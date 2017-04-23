app.controller("ChatController", function($scope, $window, ChatData, UserService, ProfileData) {
    $scope.ChatData = ChatData;
    $scope.ProfileData = ProfileData;
    $scope.user = UserService.getUser();
});