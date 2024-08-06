import List1 from "./List1";
import { useContext } from "react";
import { TodoContext } from "../store/Context";
function TodoElements() { 
  const todoObj=useContext(TodoContext);
  const todoItems=todoObj.data;
    return <>
    {
      todoItems.map((item)=>(
        <List1 item={item}></List1>
      ))
    } 
    </>
}
export default TodoElements;