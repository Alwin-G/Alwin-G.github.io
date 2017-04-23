angular.module('myApp.Filters', [])
    .filter("filterUser", function() {
        return function(data, id)
        {
            var temp = [];

            angular.forEach(data, function(user, counter) {
                if(user.id == id)
                { temp.push(user); }
            });
            return temp;
        };
})
    .filter("filterFriends", function() { //this one is basicly to show you can have multiple filters here
        return function(data, id)
        {
            var temp = [];
            angular.forEach(data, function(friend, counter){
                if(friend.id == id)
                { temp.push(friend); }
            })
            return temp;
        };
    }
);