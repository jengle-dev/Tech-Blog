const router = require('express').Router();
const { BlogComments } = require('../../models');

router.get('/', async (req, res) => {
  // find all comments
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // find a single comment by the id
router.get('/:id', async (req, res) => {
  try {
    const commentData = await BlogComments.findByPk(req.params.id);

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with that id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new comment

  try {
    const commentData = await BlogComments.create(req.body);
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a comment by the id

  try {
    const commentData = await BlogComments.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if (!commentData[0]) {
      res.status(404).json({ message: 'No comment with this id!' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete one comment by its id
  try {
    const commentData = await BlogComments.destroy({
      where: {
        id: req.params.id,
      },
    });
  
    if (!commentData) {
      res.status(404).json({ message: 'No comment found with that id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;