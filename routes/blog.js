const express  = require('express');
const router = express.Router();
const blogControllers = require("../controllers/blog");
const blogModel = require('../models/blog')


// To rende htmlof all the blog page.
router.get('/', (req, res) => {
    res.redirect("/blogs");
})

// Actual route to get all blogs.
router.get('/blogs', blogControllers.getAllBlogs)

// get route to render New html form;
router.get("/blogs/new", (req, res) => {
    res.render("new");
})
//Create Route
router.post("/blogs",blogControllers.createBlog)

//Show route
router.get("/blogs/:id",blogControllers.blogOne)

//EDIT ROUTE
router.get('/blogs/:id/edit', blogControllers.editBlog)

//UPDATE ROUTE
router.put('/blogs/:id', blogControllers.updateBlog)

//DELETE
router.delete('/blogs/:id', blogControllers.deleteBlog)

module.exports = router;