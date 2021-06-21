
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
    debugger
    res.send(todoList)
})

app.post("/toggle",(req,res)=>{
    const id:number = parseInt(req.body.id) 
    fileOperation('todo.json',function(todoList:ITodoData[]){
      return todoList.map((todo:ITodoData)=>{
          if(todo.id === id){
              console.log(id)
              todo.completed = !todo.completed
          }
          return todo
      })
    })
    res.send({
        msg:"ok",
        statusCode:200
    })
})
app.post("/remove",(req,res)=>{
  const id:number = parseInt(req.body.id) 
  fileOperation('todo.json',function(todoList:ITodoData[]){
    return todoList.filter((todo:ITodoData)=>todo.id !== id)
  })
  res.send({
      msg:"ok",
      statusCode:200
  })
})

app.post("/add",(req,res)=>{
  const todo:ITodoData = JSON.parse(req.body.todo);
  fileOperation('todo.json',function(todoList:ITodoData[]){
      const isExist = todoList.find((t:ITodoData)=>t.content===todo.content)
    if(isExist){
        res.send({
            msg:"exist",
            statusCode:100
        })
        return
    }
    let nums:number[] = todoList.map((res:ITodoData)=>res.id)  
    todo.id = Math.max(...nums) + 1 ;    
    todoList.push(todo)
    return todoList;
  })
   
  res.send({
    msg:"ok",
    statusCode:200
  })

})

app.listen(8081,()=>{
    console.log("Listening on port:8081")
})