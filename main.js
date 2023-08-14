const express = require('express')

const app = express()

const port = 5000

var users = [
    {name : "Aziz", age : 10, id:1},
    {name : "Mohamed", age : 200, id:2},
    {name : "Rim",age : 20, id : 3}
]

app.use(express.json())

app.get("/getUsers",(req,res)=>{
    res.send({Msg : "List of users",users})
})

app.post('/addUser',(req,res)=>{
    users = [...users,req.body]
    res.send(users)
})

app.delete('/deleteUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.filter(el=> el.id != id)
    res.send(users)
})

app.put('/updateUser/:id',(req,res)=>{
    const {id} = req.params

    users = users.map(el=> el.id == id ? {...el,...req.body} : el)

    res.send(users)
})

app.listen(port,console.log(`Server is running on the port ${port}`))
