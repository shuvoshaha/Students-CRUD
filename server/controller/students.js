import student from "../model/students.js";

// Create students data
export const createStudent = async (req, res) => {

    const getStudentInfo = req.body;
    const newStudent = new student(getStudentInfo);

    try {
      await newStudent.save();
        res.status.status(201).json(newStudent)
    }
    catch (err) { res.status(404).json({ message: err.message })}
}

// Get all student data
export const getStudentsData = async (req, res) => {
    try {
        const allStudents = await student.find();
        res.status(200).json(allStudents);
    }
    catch (err) { res.status(404).json({ message: err.message })}
}

// Delete studnets using ID
export const deleteData = async (req, res) =>{
    try{
        await student.findOneAndDelete(req.params.id).exec()
        res.status(201).json("Successfully delete data")
    }

    catch(err){
        res.status(404).json({ message: err.message })
    }
}