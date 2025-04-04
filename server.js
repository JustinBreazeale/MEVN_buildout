require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
const PORT = process.env.PORT // 5000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static('uploads'));

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('Database connected'))
.catch((err)=> console.log(err));

app.use('/api/post', require('./routes/routes'))

app.listen(PORT, ()=> console.log(`Server running http://localhost:${PORT}`))

