const mongoose = require('mongoose')
const Schema = mongoose.Schema

var blogSchema = new Schema({
    title: String,
    image: String,
    content: {
        type : String,
        required : true},
    Created: { type: Date, default: Date.now }
})

var Blog = mongoose.model("Blog", blogSchema);


module.exports = Blog;