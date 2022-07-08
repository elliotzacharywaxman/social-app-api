const router = require('express').Router();
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
// go back and edit this to reflect other models
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;