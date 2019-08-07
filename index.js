const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://localhost/playground')
    .then(() => {
        console.log('Connected to Mongodb...');
    }).catch(err => {
        console.log('Error in connecting with mongodb...', err);
    });


// Creating schema using mongoose. Schema is mongoose's concept NOT mongodb's. 
const courseSchema = new mongoose.Schema({
    name: String,
    author: String, 
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// Creating new model
const Course = mongoose.model('Course', courseSchema);

// making instance of created model to be saved into database. 
const course = new Course({
    name: "NodeJS Course",
    author: "Himanshu",
    tags: ['nodejs', 'expressjs'],
    isPublished: true
});

