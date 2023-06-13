const router = require('express').Router();

router.use('/auth', require('./authRoutes'));
router.use('/money', require('./transactionRoutes'));
router.use('/handle', require('./customerRoutes'));

module.exports = router;
