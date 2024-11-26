const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.get("/", (req, res) => res.send("Express on Vercel"));
app.use('/api', routes)

const mongoString = "mongodb+srv://zhurakgithub:WfKKbwWJEjGsazrt@bti-secretary.6dpe0.mongodb.net/STAKHIV_DATABASE";

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})