import express from 'express'
import { postStudents } from '../controller/students.js'
import student from '../model/students.js'

const router = express.Router()

router.get('/', )
router.post('/', postStudents)

export default router


