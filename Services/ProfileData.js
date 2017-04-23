app.service("ProfileData", function(){
    
    var localProfile = JSON.parse(localStorage.getItem("profiles"));

    if(localProfile != undefined && localProfile.length>0) //Basicly reduced this to a storage check
    { this.profiles = localProfile; }

    else {
        var temp = [
            { id: 1526, name: "berserk",      password: "berserk",    age: "31",          gender: "male"},
            { id: 1358, name: "Johnathan",    password: "test",       age: "17",          gender: "male"},
            { id: 2539, name: "Britney",      password: "test",       age: "18",          gender: "female"},
            { id: 1486, name: "Kevin",        password: "test",       age: "7",           gender: "male"},
            { id: 7777, name: "jesus",        password: "holy",       age: "unknown",     gender: "male"},
            { id: 6666, name: "satan",        password: "hell",       age: "unknown",     gender: "unknown"},
            { id: 0001, name: "test",         password: "test",       age: "unknown",     gender: "test"}
        ];
        localStorage.setItem("profiles", JSON.stringify(temp));
    }

    this.getProfile = function (id) {
        
        var profileList = JSON.parse(localStorage.getItem("profiles"));
        var temp;

        profileList.forEach(function(profile)
        {
            if(profile.id == id)
            { temp = profile; }
        });

        return temp;
    }

    this.getProfiles = function() { return JSON.parse(localStorage.getItem("profiles")); }

    this.createProfile = function(newUser) {
        var temp = JSON.parse(localStorage.getItem("profiles"));
        
        temp.push({
            id: newUser.id,
            name: newUser.name,
            password: newUser.password,
            age: newUser.age,
            gender: newUser.gender
        });

        localStorage.setItem("profiles", JSON.stringify(temp));
    }

    this.updateProfile = function(profile) {
        localStorage.setItem("profiles", JSON.stringify(profile));
        this.profiles = profile;
    }

    this.deleteProfile = function(id) {
        var profiles = JSON.parse(localStorage.getItem("profiles"));
        var counter;

        profiles.forEach(function(p, i) {
            if(p.id == id)
            { counter = i; }
        });

        profiles.splice(counter, 1);
        localStorage.setItem("profiles", JSON.stringify(profiles));
    }
});