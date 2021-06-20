
import $ from 'jquery'
import { ITodoData } from './typings'

export function getTodoList(
    target:any,
    methodName:string,
    descriptor:PropertyDescriptor
){
//   console.log(target,methodName,descriptor)  
   const _origin = descriptor.value
   descriptor.value = function(todoData:ITodoData[]){
       $.get("http://localhost:8081/todolist").then((res:string)=>{
           if(!res){
               return
           }
           todoData = JSON.parse(res)
       }).then(()=>{
           console.log(this)
           _origin.call(this,todoData)
       })
   }
}