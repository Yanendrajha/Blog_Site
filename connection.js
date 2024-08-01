const mongoose = require('mongoose')
require('dotenv').config();

const url = "mongodb+srv://"+process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@cluster0.ayi7fwq.mongodb.net/blogs"

async function connectionMongoDB() {
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  }).then(() => {
        console.log("Connected to MongoDB")
    })
}

module.exports = connectionMongoDB;