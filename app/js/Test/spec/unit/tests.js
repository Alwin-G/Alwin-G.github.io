describe("All/", function(){

    var profileData, filter1, user;
    var localStorageMock = {profiles:[]};

    beforeEach(function(){
        angular.mock.module("myApp");

        angular.mock.inject(['ProfileData', function(data){
            profileData = data;
        }]);

        angular.mock.inject(['UserService', function(data){
            user = data;
        }]);

        angular.mock.inject(function($filter){
            filter1 = $filter("filterUser");
        });

        spyOn(localStorage, 'getItem').and.callFake(function (key) {
            return JSON.stringify(localStorageMock[key]);
        });
    
        spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
            return localStorageMock[key] = JSON.parse(value);
        });

        spyOn(localStorage, 'clear').and.callFake(function () {
            localStorageMock = {profiles:[]};
        });
    });

    describe("Should always work/", function(){
        it("Test1", function() {
         expect(true).toBeTruthy();
        });

        it("Test2", function(){
            expect(false).not.toBe(true);
        });
    });

    describe("Filter/", function(){
        var temp = [{ id: "6666", name: "satan", password: "hell", age: "unknown", gender: "unknown"}];
        
        it("Test filter array", function() {
            expect(filter1(temp, 6666)).toEqual([{ id: "6666", name: "satan", password: "hell", age: "unknown", gender: "unknown"}]);
        });

        it("Test filter undefined id", function(){
            expect(filter1(temp, undefined)).toEqual([]);
        });

        it("Test filter empty database", function(){
            expect(filter1(undefined, 6666)).toEqual([]);
        });
    });

    describe("LocalStorage/", function() {

        afterEach(function () { localStorage.clear(); });

        it("Should be filled", function(){
            profileData.createProfile({ id: 7777, name: "jesus", password: "holy", age: "unknown", gender: "male"});
            expect(localStorageMock.profiles).toEqual([{ id: 7777, name: "jesus", password: "holy", age: "unknown", gender: "male"}])
        });

        it("Should get the value", function(){
            localStorageMock.profiles = [{ id: "6666", name: "satan", password: "hell", age: "unknown", gender: "unknown"}];
            
            expect(profileData.getProfile("6666")).toEqual({ id: "6666", name: "satan", password: "hell", age: "unknown", gender: "unknown"});
        });

        it("Should remove", function(){
            localStorageMock.profiles = [{ id: "6666", name: "satan", password: "hell", age: "unknown", gender: "unknown"}];
            profileData.deleteProfile(6666);
            expect(localStorageMock.profiles).toEqual([]);
        });

        it("Should set the active user", function(){
            user.setUser(7777);
            expect(localStorageMock.currentUser).toBe(7777);
        });

        it("Should return the active user", function(){
            var before = localStorageMock.currentUser;
            user.setUser(7777);
            expect(before).toBe(undefined) && expect(user.getUser()).toBe(7777);
        });
    });
});