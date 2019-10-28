// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

const friends = require("../data/friends");
const path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // ---------------------------------------------------------------------------
  

    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        // Note the code here. Our "server" will respond to requests.
        // It will do this by sending out the value "true" have a table.
        // req.body is available since we're using the body parsing middleware.
        let Score = 25;
        let bff;

        //loop through friends array  
        for(let i = 0; i < friends.length; i++){

          //Array for matches
          let newArr = [];
        
          for(let j = 0; j < friends[i].scores.length; j++){

          //calculate difference
          newArr.push(Math.abs(friends[i].scores[i] - req.body.scores[j]));
          } 

          let match = newArr.reduce((a, b) => a + b, 0);

            if (match < Score) {
              Score = match;
              bff = friends[i];
            }
        }

        // to user
        res.json(bff);

        // to array
        friends.push(req.body);
          
    });

  


  app.post("/api/friends", function(req, res) {

    // User details
    let user = req.body;

    // convert scores
    for(let i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    let bbf = 0;
    let minimumDifference = 40;

    // loop
        for(let i = 0; i < friends.length; i++) {
    
      let totalDifference = 0;

    //   compare the user and the each friend scores
      for(let j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      if(totalDifference < minimumDifference) {
        bbf = i;
        minimumDifference = totalDifference;
      }
    }

    // push user to friend array
    friends.push(user);

    // display the best friend match

    res.json(friends[bbf]);

  });

}