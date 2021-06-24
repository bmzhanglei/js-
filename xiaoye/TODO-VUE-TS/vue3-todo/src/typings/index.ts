interface ITodo{
    id:number,
    content:string,
    status:TOTO_STATUS
}

interface IState{
    list :ITodo[]
}

enum TOTO_STATUS{
    WILLDO = "willdo",
    DOING = "doing",
    FINISHED = "finished"
}

export {
    ITodo,
    IState,
    TOTO_STATUS
}