// Routes for Get blog info
const blogRouter = require('express').Router();
const Posts = require('../models/BlogPosts');
const Comments = require('../models/BlogComments');
const { BlogPosts, User } = require('../models');

blogRouter.get('/', async (req, res) => {
    const postData = await BlogPosts.findAll({
        include: {
            model: User
        }
    }).catch((err) => {
        res.json(err);
    });
    const allPosts = postData.map((posts) => posts.get({ plain: true }));
    console.log(allPosts);
    res.render('all', { allPosts:allPosts });
});

module.exports = blogRouter;
