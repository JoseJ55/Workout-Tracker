const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "exercise type"
    },
    name: {
        type: String,
        trim: true
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
})

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        trim: true,
        required: "Must be a date and time"
    }, 
    exercises: [
        ExerciseSchema
    ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;