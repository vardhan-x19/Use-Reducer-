import './App.css'
import Heading from './comp/Heading'
import Add from './comp/Add'
import TodoElements from './comp/TodoElements'
import Msg from './comp/Msg'
import TodoContextProvider from './store/Context'

function App() {

  return (
    <TodoContextProvider>
     <div className='container'>
      <Heading></Heading>
      <Add ></Add>
      <Msg></Msg>
      <TodoElements></TodoElements>
      </div>
    </TodoContextProvider>
  )
}

export default App
