const router = require('express').Router();
const Workout = require('../../models/Workout');

router.get('/exercise', (req, res) => {
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

router.post('/exercise', (req, res) => {
    try{
        // Workout.create()
        console.log(req.body)
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;