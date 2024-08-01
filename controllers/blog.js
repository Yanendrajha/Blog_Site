const blogModel = require('../models/blog')

// Getting all Blogs
const getAllBlogs = async (req, res) => {
    const allBlogs = await blogModel.find({})
    res.render('index', { blogs: allBlogs })
}

// Creating Blog
const createBlog  = async (req, res) => {
    console.log(req.body)
    const newBlog = new blogModel({
        title : req.body.blog.title,
        image : req.body.blog.image,
        content : req.body.blog.content
    });
    await newBlog.save()
    res.redirect("/blogs")
}

// Show one Blog
const blogOne = async (req, res) => {
    try {
        const foundBlog = await blogModel.findById(req.params.id)
        res.render("show", { blog: foundBlog })
    }
    catch (err) {
        res.redirect("/blogs")
    }
}

// Edit blog
const editBlog = async (req, res) => {
    try {
        const foundBlog = await blogModel.findById(req.params.id)
        res.render("edit", { blog: foundBlog })
    }
    catch (err) {
        res.redirect("/blogs")
    }
}
// Update blog
const updateBlog = async (req, res) => {
    try {
       const updateData = await blogModel.findByIdAndUpdate(req.params.id, req.body.blog)
       res.redirect("/blogs/" + req.params.id)
    } catch{
        console.log("Error");   
    }
}

// delete blog
const deleteBlog = async (req, res) => {
    try {
        const removeBlog = await blogModel.findOneAndDelete(req.params.id)
        res.redirect("/blogs")
    }
    catch (err) {
        res.redirect("/blogs")
    }
}
    
module.exports = {
    getAllBlogs,
    createBlog,
    blogOne,
    editBlog,
    updateBlog,
    deleteBlog
}