// DATABASE CONFIGURATION

// require mongoose
var mongoose = require('mongoose')



//// establish connection to database
if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/cmps_db');
}

//// console log database connection status

const db = mongoose.connection

db.on('error', err => {
  console.error(err),
  console.log("\n\tConnection to Database: Failed \n\t\t> Please confirm database status.\n")
})
db.once('open', () => console.log("\n\tConnection to DataBase: Successful\n"))

// EXPORT MODULE

// export this entire module
module.exports = mongoose
