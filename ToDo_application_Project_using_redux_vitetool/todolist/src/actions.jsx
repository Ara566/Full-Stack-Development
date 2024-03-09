export function addtodo(todo){   //function acepting todo
    return {type:"addtodo",payload:todo};
}

export function deletetodo(todo){
    return {type:"deletetodo",payload:todo};
}

export function edittodo(id){
    return {type:"edittodo",payload:id};
}