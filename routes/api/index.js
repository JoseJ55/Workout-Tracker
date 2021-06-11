const router = require('express').Router();

const home = require('./home');
const exercise = require('./exercise');
const stats = require('./stats');

router.use('/', home);
router.use('/api', exercise);
router.use('/api', stats)

module.exports = router;