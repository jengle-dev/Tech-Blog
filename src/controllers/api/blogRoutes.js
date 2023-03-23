// Routes for Get blog info
const blogRouter = require('express').Router();
const Posts = require('../src/models/BlogPosts');
const Comments = require('../src/models/BlogComments');
const { BlogPosts } = require('../../models');

blogRouter.get('/', async (req, res) => {
    const postData = await BlogPosts.findAll().catch((err) => {
        res.json(err);
    });
    const allPosts = postData.map((posts) => posts.get({ plain: true }));
    res.render('all', { allPosts });
});

module.exports = blogRouter;
