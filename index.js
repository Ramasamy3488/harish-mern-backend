const express = require('express');
const cors = require('cors');
require('dotenv').config();
const conn = require('./db');

// const {connectToMongoDB} = require('./db');

const app = express();

conn.connectToMongoDB();

// connectToMongoDB();

// app.use(cors({
//   origin: 'http://localhost:3000', // React dev server
//   methods: ['GET','POST','PUT','DELETE'], // allowed HTTP methods
//   credentials: true // if you want to send cookies
// }));

app.use(cors({
  origin: ["http://localhost:3000", "https://ramasamy3488.github.io"], // allow both dev and prod
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true // only if using cookies or auth headers
}));




app.use(express.json());

const traineesRoute = require('./routes/trainees-route')

// const studentsRoute = require('./routes/students-route')

app.use('/api/v1/trainees', traineesRoute);

// app.use('/api/v1/students', studentsRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server connected on port ${process.env.PORT}!!!`);
});


