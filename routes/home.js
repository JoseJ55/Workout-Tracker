const router = require('express').Router();

router.get('/', async (req, res) => {
    try{
        // res.send("working");
        res.render('home')
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;