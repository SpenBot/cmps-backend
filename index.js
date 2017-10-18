// If you like the symmetical appearance of comment delimiters, use the format below:
/* SERVER CONFIGURATION */


/* require external module dependencies */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// require models from models.js
const Models = require('./db/models.js')

// require database connection module
const mongoose = require('./db/connection.js')

// run app as an express application
const app = express();

//enable use of static files, which is in a folder named public
app.use(express.static(__dirname + '/public'))

// handles json post requests (needed for AJAX requests with JSON bodies)
app.use(bodyParser.json({ extended: true }))

// use cors
app.use(cors())

// RUN SERVER

app.listen(process.env.PORT || 4000, () => {
    console.log("\n\tServer active. Listening on port 4000\n")
})

// ROUTES

// grab each model, from exported models
const User = Models.User

//Neither of these models are being used for queries, so I think you could remove them for the time being, especially since the models aren't being exported, and the values below will be undefined
const Theater = Models.Theater
const Movie = Models.Movie

// USERS ROUTES

// get all users
app.get('/api/users', (req, res) => {
  User.find()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      console.log(err)
    })
})

// get one user
app.get("/api/users/:username", (req, res) => {
  User.findOne({username: req.params.username}).then(function(user){
    res.json(user)
  });
});

// create user
app.post("/api/users", (req, res) => {
  User.create(req.body).then(user => {
    console.log("post api/users", req.body);
    console.log("user:", user)
    res.json('/users/'+ user.username) //remove this, there should only be one possible response from an express router handler method
    res.json(user)

  });
});

// update user
app.put('/api/users/:username', (req, res) => {
  User.findOneAndUpdate({username: req.params.username}, req.body, {new: true}).then(user => {
    res.json(user)
  })
  console.log(`Put method called ${req}`)
})

// delete user

//I'd consider removing /delete from the path, since only a delete request will trigger this route, it's redundant

app.delete("/api/users/:username/delete", (req, res) => { //I added a leading / here, the route was not functional without it
  User.findOneAndRemove({username: req.params.username})
    .then(() => { //I'd recommend passing in `user` to the parameter of this anonymous function and then responding with the deleted user. That way, on your front-end you could extract information from the response to display a message like `${username} was deleted`, should you have the need to. Otherwise, see comment below
    console.log(thing);
      res.json("/users") //not a valid JSON response, could also {success: true}
    })
})
