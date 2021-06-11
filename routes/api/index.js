const router = require('express').Router();

const home = require('./home');
const exercise = require('./exercise');
const stats = require('./stats');

router.use('/', home);
router.use('/exercise', exercise);
router.use('/workouts', stats)

module.exports = router;