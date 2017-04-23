app.service("FriendData", function(ProfileData){
    
    var localFriends = JSON.parse(localStorage.getItem("friends"));

    if(localFriends != undefined && localFriends.length>0)
    { this.friends = localFriends; }

    else
    {
        var temp = [
            {id: "1526", friend: "1358"},
            {id: "1526", friend: "7777"},
            {id: "1526", friend: "6666"},
            {id: "6666", friend: "7777"}
        ];
        localStorage.setItem("friends", JSON.stringify(temp));
    }

    this.getFriendList = function(user)
    {
        var friendlist = [];
        var friends = JSON.parse(localStorage.getItem("friends"));
        friends.forEach(function(friend)
        {
            if(friend.id == user)
            { friendlist.push(friend); }
        });

        return friendlist;
    }

    this.findFriends = function(user) {
        
        var returnvalue = [];
        var friendlist = [];
        var friends = JSON.parse(localStorage.getItem("friends"));
        
        friends.forEach(function(friend)
        {
            if(friend.id == user)
            { friendlist.push(friend); }
        });

        //at this point friendlist has a list of friends of the current user

        var profileList = ProfileData.getProfiles();
        
        profileList.forEach(function(p){    //get profile list
            friendlist.forEach(function(f){ //get friend list of current user
                if(p.id == f.friend)        //compare profile id to friend id
                { returnvalue.push(p); }    //return profile data
            });
        });
        
        return returnvalue;
    }

    this.updateFriends = function(friends) { localStorage.setItem("friends", JSON.stringify(friends)); }

    this.deleteFriend = function(user, id) {
        var friends = JSON.parse(localStorage.getItem("friends"));
        var counter;

		friends.forEach(function(f, i) {
			if(f.id == user && f.friend == id)
            { counter = i; }
		});

		friends.splice(counter, 1);
        localStorage.setItem("friends", JSON.stringify(friends));
    }
});