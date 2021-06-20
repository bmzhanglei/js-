
import express,{Application} from 'express'
import bodyParser from 'body-parser'
import {readFile} from "./utils"

const app:Application = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.all('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header("Access-Control-Allow-Methods","POST,GET,PUT,DELETE,OPTIONS");
    next()
})

app.get("/todolist",(req,res)=>{
    const todoList:string = readFile('todo.json');
    res.send(todoList)
})
app.post("/toggle",(req,res)=>{

})
app.post("/remove",(req,res)=>{

})

app.post("/add",(req,res)=>{

})

app.listen(8081,()=>{
    console.log("Listening on port:8081")
})