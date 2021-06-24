import { SET_TODO } from './actionTypes';
import { IState, ITodo } from "@/typings";
import {Commit} from 'vuex'
interface ICtx{
    commit:Commit,
    state:IState
}

export default{
    [SET_TODO]({commit}:ICtx,todo:ITodo):void{
       commit(SET_TODO,todo);
    }
}