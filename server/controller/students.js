
export const postStudents = async (req, res) => {

    const getStudentInfo = req.body;
    const newStudent = new student(getStudentInfo);

    try {
        await newStudent.save();
    }
    catch (err) { res.status(404).json({ message: err.message }) }
}


export const getStudentsData = async (req, res) => {
    try {
        const allStudents = student.find();
        res.status(200).json(allStudents);
    }
    catch (err) { res.status(404).json({ message: err.message }) }
}