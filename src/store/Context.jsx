import { createContext, useContext } from "react";
export const TodoContext=createContext([]);
import { useReducer } from "react";

function elementsReducer(curValues,action) {
    let updatedValues=curValues;
    if(action.type==="ITEM_CHANGE"){
      updatedValues=[...curValues,{task:action.payload.taskItem,due:action.payload.duedate}];
    }else if(action.type==="DELETE_ITEM")
    {
      updatedValues=curValues.filter((item)=>item.task!==action.payload.itemName);
    }
    return updatedValues;
}

const TodoContextProvider=({children})=>{
   
  let defValue=[{
    task:"getmilk",
    due:"1/23/2024",
   },
   {
    task:"getFood",
    due:"1/23/2024",
   },
   {
    task:"getBed",
    due:"1/23/2024",
   }
  ]

 const[todoItems,despachItems]=useReducer(elementsReducer,[]);

 const addItems=(taskItem,duedate)=>{
  const changeItems={
    type:"ITEM_CHANGE",
    payload:{
       taskItem,
       duedate
    }
  }
  despachItems(changeItems);
 }

 const delItem=(itemName)=>{ 
  const changeItems={
    type:"DELETE_ITEM",
    payload:{
      itemName
    }
  }
  despachItems(changeItems);
 }

 return (
    <TodoContext.Provider value={{data:todoItems,addItems:addItems,delItem:delItem}}>
    {children}
    </TodoContext.Provider>
 )
}

export default TodoContextProvider;