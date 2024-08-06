import { createContext, useContext } from "react";
import { TodoContext } from "../store/Context";

function List1({item}){
    const itemObj=useContext(TodoContext);
    const delItem=itemObj.delItem;
    return <div className="row">
    <div className="col-6">{item.task}</div>
    <div className="col-4">{item.due}</div>
    <div className="col-2"><button onClick={()=>delItem(item.task)} type="button" class="btn btn-primary">Delete</button></div>
</div>
}
export default List1;