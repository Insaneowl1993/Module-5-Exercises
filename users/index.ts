import express from 'express'
import userRoutes from './userRoutes'

const app = express()
const port = 3000

app.use(express.json());


//router middleware
app.use('/calculator', userRoutes);
//use the public directory for static assets
app.use(express.static('public'));

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`)
})
