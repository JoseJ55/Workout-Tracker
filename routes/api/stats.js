const router = require('express').Router();
const Workout = require('../../models/Workout');

router.get('/workouts', async (req, res) => {
    try{
        const workout = await Workout.find({read:true}, (err, found))
        res.send(workout);
        // res.render("stats")
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;