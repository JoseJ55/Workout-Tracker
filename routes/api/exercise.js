// ---------------------------------------------------
// need to look into why heroku can't render the page.
// ---------------------------------------------------
const router = require('express').Router();
const Workout = require('../../models/Workout');

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

router.post('/', (req, res) => {
    try{
        // console.log(req.body)
        // Workout.insertOne()
        // console.log(req.body)
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;