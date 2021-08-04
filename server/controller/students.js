import express from 'express'

const router = express.Router()

router.get('/', async(req, res) =>{
    res.send(200).json("router is working")
})

export default router


