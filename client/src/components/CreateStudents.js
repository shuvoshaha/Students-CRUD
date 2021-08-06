import React, { useState } from 'react'
import axios from 'axios'

const CreateStudents = () => {
    const [stdData, setStdData] = useState({
        reg: '',
        name: '',
        grade: '',
        subject: '',
        section: ''
    })
    const onSubmitHandler = (e) => {
        e.preventDefault() ;
        axios.post(`http://localhost:5000/students`, stdData)
        .then(res => console.log("Data is submited"))
        .catch(err => console.log(err))
    }
   

    return (
        <div className="make-student">
            <h2>Registration</h2>
            <form method="post" onSubmit={onSubmitHandler}>
                <input
                    placeholder="Registration"
                    onChange={(e) => setStdData({...stdData, reg: e.target.value} )}
                    type="number"
                    className="text-field"
                    name="reg"
                    value={stdData.reg}
                />
                <input
                    placeholder="Name"
                    type="text" className="text-field"
                    onChange={(e) => setStdData({...stdData,  name: e.target.value })}
                    name="fname"
                    value={stdData.fname} />

                <input
                    placeholder="Grade"
                    onChange={(e) => setStdData({...stdData,  grade: e.target.value })}
                    type="text"
                    className="text-field"
                    name="grade"
                    value={stdData.grade} />

                <input
                    placeholder="Subject"
                    onChange={(e) => setStdData({...stdData,  subject: e.target.value })}
                    type="text"
                    className="text-field"
                    name="subject"
                    value={stdData.subject} />

                <input
                    placeholder="Sections"
                    type="text"
                    onChange={(e) => setStdData({...stdData,  section: e.target.value })}
                    className="text-field"
                    name="section"
                    value={stdData.section} />

                <input
                    type="submit"
                    value="Create Student"
                    className="submit-btn" />
            </form>
        </div>
    )
}

export default CreateStudents
