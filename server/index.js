import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';
const port = process.env.PORT || 5000
const DB = "mongodb://127.0.0.1:27017/students"
const app = express()
import studentRoutes from './route/students.js'

// only support string and limit 20 mb
app.use(bodyParser.json({limit: "20mb", extended: true}));

// it parses incomming request with urlencoded payloads
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

// make request form one website to another website
app.use(cors())

// get route
app.use('/students', studentRoutes)


// connection
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then((res) =>{
    console.log("MongoDB is connect successfully")
})
.catch(err => console.log(err))
app.set("useFindAndModify", false)

app.listen(port, () =>{
    console.log(`node is running on port ${port} `)
})

