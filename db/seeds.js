// CONFIGURATION

//// require model exports
const Models = require('./models.js')

//// require seed data
const UserSeedData = require('./seedsUser.json') //By convention I would have this be userSeedData

// SEEDING
// grab individial models that were exported
const User = Models.User

// clear models
User.remove({})

// clear collections
User.collection.remove({}) //This is redundant since "Models have a static remove method available for removing all documents matching conditions."  http://mongoosejs.com/docs/models.html the conditional is null or {}, so it removes all instances of User documents in the currently connected database

// insert seed data into model collection
User.collection.insert(UserSeedData) //consider attaching a promise here to disconnect from the database with mongoose.disconnect(). you'll have to require mongoose for this purpose see here: https://stackoverflow.com/questions/19371821/do-i-need-to-manually-close-a-mongoose-connection
