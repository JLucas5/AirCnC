const express =  require('express')
const cors = require('cors')
const mongoose =  require('mongoose')
const routes =  require('./routes')
const path = require('path')

const app = express()

mongoose.connect('mongodb+srv://oministack:oministack@oministack-f1kph.mongodb.net/teste?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(express.json())
app.use(routes)

app.listen(3333)
