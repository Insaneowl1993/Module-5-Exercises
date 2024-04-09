import express from 'express'
import { addNumbers } from './controllers/calculatorController'
import { subtractNumbers } from './controllers/calculatorController'
import { divideNumbers } from './controllers/calculatorController'
import { multiplyNumbers } from './controllers/calculatorController'

const router = express.Router()

// new route for adding two numbers
router.get('/add', addNumbers)

router.get('/subtract', subtractNumbers)

router.get('/divide', divideNumbers)

router.get('/multiply', multiplyNumbers)

export default router
