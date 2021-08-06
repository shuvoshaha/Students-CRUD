import student from "../model/students.js";

export const createStudent = async (req, res) => {

    const getStudentInfo = req.body;
    const newStudent = new student(getStudentInfo);

    try {
      await newStudent.save();
        res.status.status(201).json(newStudent)
    }
    catch (err) { res.status(404).json({ message: err.message }) }
}


export const getStudentsData = async (req, res) => {
    try {
        const allStudents = await student.find();
        res.status(200).json(allStudents);
    }
    catch (err) { res.status(404).json({ message: err.message }) }
}