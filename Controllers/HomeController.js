app.controller("HomeController", function($scope, ChatData, UserService) {
    $scope.chats    = ChatData.getChats();
    $scope.user     = UserService.getUser();
});