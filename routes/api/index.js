const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
// go back and edit this to reflect other models
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;