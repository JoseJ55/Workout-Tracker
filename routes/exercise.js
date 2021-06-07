const router = require('express').Router();

router.get('/', (req, res) => {
    try{
        // res.send("working");
        res.render("exercise")
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;