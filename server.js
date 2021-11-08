const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT
const app = express();
//middleware
app.use(cors({ credentials: true }))
app.use(express.json())
// app.use(express.urlencoded({extended:true}));
// app.use(express.static('public'))

const nyLogsController = require('./controller/ny-logs')
app.use('/', nyLogsController)


//listener
app.get('/', (req, res) => {
    res.redirect('/ny-logs');
})

app.listen(PORT, () =>  {
    console.log(`I'm listening`);
})

mongoose.connect(process.env.MONGODB_URI, () => {
    console.log('connected to mongod');
});
