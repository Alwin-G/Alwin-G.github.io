describe("e2e test 1", function(){
    it('should login', function(){
        browser.get("http://localHost:8080/#!/Login");
        
        element(by.id("name")).sendKeys("berserk");
        element(by.id("password")).sendKeys("berserk");
        
        element(by.id("loginbutton")).click();
        var url = browser.driver.getCurrentUrl();
        
        expect(url).toBe("http://localhost:8080/#!/Home");
    });

    it("should not login and give an errormessage", function(){
        browser.get("http://localHost:8080/#!/Login");
        element(by.id("name")).sendKeys("null");
        element(by.id("password")).sendKeys("null");
        element(by.id("loginbutton")).click();

        var alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toBe("User does not exist");
    });
});