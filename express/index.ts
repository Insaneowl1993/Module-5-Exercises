import express from 'express'
const app = express()
const port = 3000

const app2 = express()
const port2 = 3001

app.get('/', (_req, res) => {
 res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('This is a test')
})

app2.get('/', (_req, res) => {
    res.send('Hello App 2!')
   })

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`)
})

app2.listen(port2, () => {
    console.log(`Example app listening at http://localhost:${port2}`)
   })


// checked, completion receipt for exercise 1
