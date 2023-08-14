const express = require('express')

const app = express()

const port = 5000

const middleware=(req,res,next)=>{
    console.log("Hello Mohamed")
    next()
}

app.use(middleware)
// // app.get('/aziz',middleware,(req,res)=>{
// //     res.send("Mohamed")
// // })


// app.get('/balise',(req,res)=>{
//     res.send("<h1>Rim</h1>")
// })

// app.get('/gomycode',(req,res)=>{
//     // console.log(__dirname)
//     res.sendFile(__dirname+'/public/Gomycode.html')
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+'/public/style.css')
// })


// app.get("/rim",(req,res)=>{
//     res.sendFile(__dirname+"/public/")
// })

app.use(express.static('public'))


app.listen(port,console.log(`Server is running on the port ${port}`))