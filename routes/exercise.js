const router = require('express').Router();

const Workout = require('../models/Workout');

router.get('/', (req, res) => {
    try{
        // res.send("working");
        const workout = Workout.find({}, (err, result) => {
            if (err) {
                console.log(err);
              } else {
                // res.json(result);
                console.log(result);
                res.render("exercise");
            }
        });
        // console.log(workout)
        
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;