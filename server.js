const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require('mysql2')


const  dbconnect = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  port:"3306",
  user: "sql6410446", 
  password: "cFQFAnb2xX",
  database: "sql6410446",
  dialect: "mysql",
  multipleStatements: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };
app.use(cors())

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


const studentapi = require('./app/controllers/StudentController')
const  mentorquerydetails = require('./app/controllers/StudentController')

const queryreply = require('./app/controllers/queryreply.controller')



app.post("/api/personaldata", (req, res) => {

  console.log(req.body.values)

  const data = req.body.values;
  const email= data.email
  const proffession = data.proffession
  const organisation=data.organisation
  const experience = data.experience
  const interest1=data.interest1
  const interest2=data.interest2
  const interest3=data.interest3
  const interest4=data.interest4
  const interest5=data.interest5
  const createdAt= new Date()
  const updatedAt= ''

  dbconnect.query(
    "INSERT INTO personaldata (email, proffession, organisation, experience, interest1,interest2,interest3,interest4,interest5,createdAt,updatedAt) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
    [email, proffession, organisation, experience, interest1,interest2,interest3,interest4,interest5,createdAt,updatedAt],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});




app.post('/api/postquerymessage', (req, res) => studentapi.poststudentMessage(req, res, dbconnect))

app.post('/api/get/querydataforreply',(req,res)=>mentorquerydetails.getqueryreply(req,res,dbconnect))
app.put('/api/post/querydataforreply',(req,res)=>queryreply.postqueryreply(req,res,dbconnect))

app.post("/api/get/retrievemessage",(req,res)=>queryreply.getqueryreply(req,res,dbconnect))



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });

  Role.create({
    id: 4,
    name: "student"
  });

  Role.create({
    id: 5,
    name: "mentor"
  });
}
