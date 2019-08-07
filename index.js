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
// Model's name should be in singular (Course). Mongo will automatically make it plural (Courses).  
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    // making instance of created model to be saved into database. 
    const course = new Course({
        name: "Angular Course",
        author: "Himanshu",
        tags: ['angular', 'angularjs'],
        isPublished: true
    });

    // Saving course instance into db. 
    // save() function is an async function so using await and async. 
    const result = await course.save(); 
    console.log(result);
}

// calling function to create a new course
// createCourse();

// get all the courses
// async function getCourses() {
//     const courses = await Course.find();
//     console.log(courses);
// }

// get all the courses with specific filters
// async function getCourses() {
//     const courses = await Course.find({name: 'Angular Course'});
//     console.log(courses);
// }

// get all the courses with specific filters, limit and sorting.
// 1 means ascending order and -1 for descending order.
// select is used for selecting specific properties. 
async function getCourses() {
    const courses = await Course.find({name: 'Angular Course'}).limit(10).sort({name:1}).select({name : 1, tags : 1}) ;
    console.log(courses);
}

getCourses();



