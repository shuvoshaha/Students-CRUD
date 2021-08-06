import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CreateStudents = () => {
    const [stdData, setStdData] = useState({
        reg: '',
        name: '',
        grade: '',
        subject: '',
        section: ''
    })
    const onSubmitHandler = () => {
        axios.post("")
    }

    return (
        <div className="make-student">
            <h2>Registration</h2>
            <form method="post" onSubmit={onSubmitHandler}>
                <input
                    onChange={(e) => setStdData(...stdData, { reg: e.target.value })}
                    placeholder="Registration"
                    type="number"
                    className="text-field"
                    name="reg"
                    value={stdData.reg}
                />
                <input
                    placeholder="Name"
                    type="text" className="text-field"
                    name="fname"
                    value={stdData.fname} />

                <input
                    placeholder="Grade"
                    type="text"
                    className="text-field"
                    name="grade"
                    value={stdData.grade} />
                    
                <input
                    placeholder="Subject"
                    type="text"
                    className="text-field"
                    name="subject"
                    value={stdData.subject} />

                <input
                    placeholder="Sections"
                    type="text"
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
