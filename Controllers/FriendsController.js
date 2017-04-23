app.controller("FriendsController", function($scope, $window, FriendData, UserService) {
    $scope.user = UserService.getUser();
    $scope.friends = FriendData.findFriends($scope.user); //FriendData
    $scope.friendList = FriendData.getFriendList($scope.user); //FriendId's
    $scope.FriendData = FriendData;

    $scope.removeFriend = function(user, id)
    {
        FriendData.deleteFriend(user, id);
        $window.location.reload(); //function that reloads the page after altering the friendlist
    }

    $scope.updateFriends = function(flist)
    {
        $scope.FriendData.updateFriends(flist);
        $window.location.reload();
        console.log("technically this is an update"); //this log will only show when you disable window.location.reload
    }                                                 //this is due to the console reloading as well

    $scope.addFriend = function(user, friend)
    {
        var newFriend = {id: JSON.stringify(user), friend: friend}; //JSON is purely to make user a string value
        
        var exists = false;
        $scope.friendList.forEach(function(f)
        {
            if(f.friend == friend)
            { exists = true; }
        });
        
        if( exists ) { console.log("friend already in list"); }

        else{
            $scope.friendList.push(newFriend); 
            $scope.FriendData.updateFriends($scope.friendList);
            $window.location.reload(); //function that reloads the page after altering the friendlist
        }
    }
});