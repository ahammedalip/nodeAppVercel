const express = require('express')

const app = express()


app.get('/api', (req, res)=>{
    res.send('hello from the server')
})


app.listen(4000,()=>{
    console.log('server is running at port 4000');
})