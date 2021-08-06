import React,  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const AllStudents = () => {

    const [student, setStudents] = useState([])
 
    const fetchData = async () =>{
        await axios.get("http://localhost:5000/students")
        .then(res => setStudents(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() =>{
        fetchData()
        console.log(student)
    }, [student])

    
     
    return (
        <div className="all-students">
            <table border="0">
                <thead>
                <tr>
                    <th>Registration No</th>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Subject</th>
                    <th>Section</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>123</td>
                    <td>Shuvo</td>
                    <td>2nd</td>
                    <td>Compiler Design, Discrete Math</td>
                    <td>CSE</td>
                    <td className="action"><Link to="/">Edit</Link>
                    <Link to="/">Delete</Link></td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>Shuvo</td>
                    <td>2nd</td>
                    <td>Compiler Design, Discrete Math</td>
                    <td>CSE</td>
                    <td className="action"><Link to="/">Edit</Link>
                    <Link to="/">Delete</Link></td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>Shuvo</td>
                    <td>2nd</td>
                    <td>Compiler Design, Discrete Math</td>
                    <td>CSE</td>
                    <td className="action"><Link to="/">Edit</Link>
                    <Link to="/">Delete</Link></td>
                </tr>
                </tbody>
              
            </table>
        </div>
    )
}

export default AllStudents
