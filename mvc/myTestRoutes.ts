import express from 'express'

const router = express.Router();

router.get('/test', (req, res) => {
 res.send('Hello World!')
})

router.get('/test2', (req, res) => {
 res.send('Second test')
})

// checked, completion receipt for exercise 2

export default router
