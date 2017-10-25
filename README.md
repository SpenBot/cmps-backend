# cmps-backend

- Christian
- Melley
- Patrick
- Spenser

## Express Repo for CMPS Project 3

>> Clone this down
  > run '$ npm install'
  > in new terminal window, run '$ mongod'
  > in new terminal window, run '$ mongo'
  > in mongo, run 'show dbs' to see databases
  > then run '$ use cmps_db' to create local database
  <!-- Mongoose will actually do this for you when you connect to a database with .connect() -->
  <!--   mongoose.connect('mongodb://localhost/cmps_db') will create the db cmps_db if it doesn't exist already -->
  > in project directory (not mongo), run '$ node db/seeds.js' to seed database, CTRL-C to escape
  > run 'nodemon' to start server in project root


>> NOTE:
  > We can optionally make a 'controllers' folder and have controllers for each model, which index.js then refers to in the routes. But this might be over-kill for us.


>> TO-DO's
  > look into embedded models, for Movie ShowTimes

>> ISSUES
  > do you need to redirect on the backend for delete routes?
  > wait, do you need to respond with json data for delete, update, and create? Shouldn't that be done on front end?
