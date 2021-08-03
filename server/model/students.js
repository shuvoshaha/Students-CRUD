import mongoose from 'mongoose';

const studentModel = mongoose.Schema({
    reg: {
        type: Number,
        required: true,
    },
    name: String,
    grade: String,
    subject: [],
    section: {
        type: String,
        default: "A"
    }

})

const student = mongoose.model("students", studentModel)

export default student;