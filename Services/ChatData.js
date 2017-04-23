app.service("ChatData", function(){

    this.createChat = function() { localStorage.setItem(); }
    
    var localChats;

    if(localChats != undefined && localChats.length>0)
    { this.chats = localChats; }
    
    else
    {
        this.chats = [
            {key: "04"},
            {user1: "1526", user2: "1358", user3: "2539", user4: "7777", user5: "6666"},
            {message: "Yo", sender: "1526"},
            {message: "Hey man, whatsup?", sender: "1358"},
            {message: "Not much, you?", sender: "1526"},
            {message: "School man, not exactly my favourite", sender: "1358"},
            {message: "I can imagine man", sender: "1526"},
            {message: "What did they do this time?", sender: "1526"}
        ];
        
        localStorage.setItem("chat"+this.chats[0].key, JSON.stringify(this.chats));
    }

    this.getChats = function() {return this.chats; }

    //this.addChat = localStorage.setItem(, JSON.stringify(profile));
});