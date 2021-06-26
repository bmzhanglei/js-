import { IState, ITodo, TOTO_STATUS } from '../typings';
import { SET_TODO, SET_TODO_LIST,REMOVE_TODO ,SET_TODO_STATUS,SET_DOING_STATUS} from './actionTypes';
export default {
    [SET_TODO](state: IState, todo: ITodo): void {
        // state.list.unshift(todo);
        state.list = [todo,...state.list]    
    },
    [SET_TODO_LIST](state: IState, todoList: ITodo[]): void {
        state.list = todoList;
    },
    [REMOVE_TODO](state: IState, id: number): void {
        state.list = state.list.filter((item:ITodo)=>item.id!==id);
        console.log(state.list)
    },
    [SET_TODO_STATUS](state: IState, id: number): void {
        state.list = state.list.map((item:ITodo)=>{
            if(item.id === id){
                switch(item.status){
                    case TOTO_STATUS.FINISHED:
                        item.status = TOTO_STATUS.WILLDO;
                        break;
                    case TOTO_STATUS.WILLDO:
                    case TOTO_STATUS.DOING:
                        item.status = TOTO_STATUS.FINISHED;
                        break;                   
                    default:
                        break;
                }               
            }
            return item
        })       
    },
    [SET_DOING_STATUS](state: IState, id: number): void {
        state.list = state.list.map((item:ITodo)=>{
            if(item.id !== id){
                if(item.status === TOTO_STATUS.DOING){
                    item.status = TOTO_STATUS.WILLDO
                }
            }else{
                item.status = item.status === TOTO_STATUS.WILLDO 
                ? TOTO_STATUS.DOING
                : TOTO_STATUS.WILLDO;
            }
            return item
        })
    },
}