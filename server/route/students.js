import express from 'express'
import { postStudents } from '../controller/students.js'

const router = express.Router()

router.get('/', postStudents)

export default router


