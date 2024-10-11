const express = require('express')
const cors = require('cors')
const db = require('./db')
const userSchema = require('./schema/user.schema')

const app = express()
app.use(express.json())
app.use(cors())

app.post('/', async (req, res) => {
    try {
        const res = await userSchema.create(req.body)
        console.log(res)
        
    } catch (error) {
        // res.send('error')
        res.send({message: 'error'})
        
    }
    res.send({message: 'created'})
})

app.get('/', async (req, res) => {
    const { email, password } = req.query
    
    const resp = await userSchema.findOne({email: email, password: password})
    console.log(resp)
    

    if(!resp) {
        res.send({message: 'notFound'})
    } else {
        res.send({message: resp})
    }
})

app.listen(2000, () => {})
