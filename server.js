const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});
const Workout = require('./models/Workout');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", {useNewUrlParser: true})

app.use(routes)

app.listen(PORT, () => console.log(`Listening at port ${PORT}`))