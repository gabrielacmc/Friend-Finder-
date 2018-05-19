var friends = require("../app/friends.js");

module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
  
    app.post("/api/friends", function (req, res) {

        var newFriends = JSON.parse(req.body.data);
    
        friends.push(newFriends);
    
        res.json(newFriends);
    });
    

};

