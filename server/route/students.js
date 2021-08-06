import express from 'express'
import { createStudent, getStudentsData, deleteData } from '../controller/students.js'

const router = express.Router()

router.get('/', getStudentsData)
router.post('/', createStudent)
router.delete('/:id', deleteData);

export default router


