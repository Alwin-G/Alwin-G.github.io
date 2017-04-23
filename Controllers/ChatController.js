app.controller("ChatController", function($scope, $window, ChatData, UserService, ProfileData) {
    $scope.ChatData = ChatData;
    $scope.ProfileData = ProfileData.getProfiles();
    $scope.user = UserService.getUser();
    $scope.chatId = "04";
    $scope.chat;

    var crossProfiles = function(chat){
        chat.forEach(function(message){
            $scope.ProfileData.forEach(function(profile){
                if(message.sender == profile.id)
                { message.prof = profile.name }
            });
        });

        return chat;
    }
    
    $scope.requestedChat = function(id){
        var chat = ChatData.getChat($scope.chatId);

        $scope.chat = crossProfiles(chat);
    }

    $scope.requestedChat(); //initialize onload... perfect way to solve this. finally

    $scope.updateChat = function(message){
        var chat = $scope.ChatData.getChat($scope.chatId);
        
        var temp = {message: message, sender: $scope.user};
        
        chat.push(temp); //push new message to arraylist
        
        $scope.ChatData.updateChat($scope.chatId, chat); //update local storage
        chat = ChatData.getChat($scope.chatId); //reload local storage

        $scope.chat = crossProfiles(chat);
        document.getElementById("input").value = ""; //clears the inputfield
    }
});