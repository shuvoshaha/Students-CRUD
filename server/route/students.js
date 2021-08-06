import express from 'express'
import { createStudent, getStudentsData } from '../controller/students.js'

const router = express.Router()

router.get('/', getStudentsData)
router.post('/', createStudent)

export default router


