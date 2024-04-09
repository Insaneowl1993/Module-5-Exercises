import express from 'express'
import calculatorRoutes from './calculatorRoutes'

const app = express()
const port = 3005

//router middleware
app.use('/calculator', calculatorRoutes)
//use the public directory for static assets
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// checked, completion receipt for exercises 3, 5 and 6
