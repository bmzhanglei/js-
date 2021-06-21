import { readFileSync,writeFileSync } from 'fs';
import { resolve } from 'path';
import { ITodoData } from './typings';

export function readFile(path:string){
    return readFileSync(resolve(__dirname,path),'utf8')
}
export function writeFile<T>(path:string,data:T){
     writeFileSync(resolve(__dirname,path),JSON.stringify(data) )
}

export function fileOperation(path:string,fn?:any):string|void{
    let todoList:ITodoData[] = JSON.parse(readFile('todo.json') || '[]');
    if(!fn){
        return JSON.stringify(todoList)
    }
    todoList = fn(todoList)
    writeFile<ITodoData[]>(path,todoList); 
}