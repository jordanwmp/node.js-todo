const express = require('express')
//const bodyParser = require('body-parser')
//const exphbs = require('express-handlebars')
const { engine } = require('express-handlebars')

const app = express()
const conn = require('./db/conn')

const taskRoutes = require('./routes/taskRoutes')

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
app.use(express.static('public'))

const Task = require('./models/Task')

app.use('/', taskRoutes)

conn
    .sync()
    .then(()=>{
        app.listen(3000)
    })
    .catch((err)=>{
        console.log('Error on sync database ', err)
    })
