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
                {
                    student.map((data, key) =>{
                        return(
                            <tr key={key}>
                                <td> {data.reg} </td>
                                <td> {data.name} </td>
                                <td> {data.grade} </td>
                                <td> {data.subject} </td>
                                <td> {data.section} </td>
                                <td className="action"><Link to= {`/edit/${data._id}`} >Edit</Link>
                                    <Link to= {`/delete/${data._id}`} >Delete</Link></td>
                            </tr>
                        )
                    })
                }
                </tbody>
              
            </table>
        </div>
    )
}

export default AllStudents
