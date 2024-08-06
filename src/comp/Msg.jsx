import { useContext } from "react"
import { TodoContext } from "../store/Context"

function Msg(){
    const {data}=useContext(TodoContext);
    return <>
         {data.length===0 && <center>Iam hungry</center>}
    </>
}
export default Msg;