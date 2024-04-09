import express from 'express'
import testRoutes from './myTestRoutes'

const app = express()
const port = 3000

app.use('/mytest', testRoutes);

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`)
})
