app.service("UserService", function(){

    this.getUser = function()
    { return JSON.parse(localStorage.getItem("currentUser")); } //user defined as a profile id
    
    this.setUser = function(id) { localStorage.setItem("currentUser", JSON.stringify(id)); }
});