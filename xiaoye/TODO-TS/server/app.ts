
import express,{Application} from 'express'
import bodyParser from 'body-parser'
import {readFile,writeFile,fileOperation} from "./utils"
import { ITodoData } from './typings';

const app:Application = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.all('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header("Access-Control-Allow-Methods","POST,GET,PUT,DELETE,OPTIONS");
    next()
})

app.get("/todolist",(req,res)=>{
    const todoList:string = fileOperation('todo.json') as string;
    res.send(todoList)
})
app.post("/toggle",(req,res)=>{

})
app.post("/remove",(req,res)=>{
  const id:number = parseInt(req.body.id) 
  fileOperation('todo.json',function(todoList:ITodoData[]){
    return todoList.filter((todo:ITodoData)=>todo.id !== id)
  })
  res.send({
      msg:"ok",
      statusCode:"200"
  })
})

app.post("/add",(req,res)=>{

})

app.listen(8081,()=>{
    console.log("Listening on port:8081")
})