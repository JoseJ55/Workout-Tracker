const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');

const routes = require('./routes');
const Workout = require('./models/Workout');

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", {useNewUrlParser: true})

Workout.create({name: "Workout"}).then(dbworkout => {
    console.log(dbworkout);
}).catch(({message}) => {
    console.log(message);
})

app.listen(PORT, () => console.log(`Listening at port ${PORT}`))