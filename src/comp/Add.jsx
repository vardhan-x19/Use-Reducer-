import { useContext, useRef } from "react";
import { TodoContext } from "../store/Context";
function Add(){
    const itemObj=useContext(TodoContext);
    const addItems=itemObj.addItems;
    const taskValue=useRef();
    const dueDate=useRef();
    function btnFunc(){
        addItems(taskValue.current.value,dueDate.current.value);
        taskValue.current.value="";
        dueDate.current.value="";
    }
    return <div className="row">
    <div className="col-6"><input ref={taskValue} type="text" placeholder='Enter to-do' /></div>
    <div className="col-4"><input ref={dueDate} type="date" /></div>
    <div className="col-2"><button onClick={btnFunc}  class="btn btn-danger">Add</button></div>
</div>
}
export default Add;