import initialtodos from "./todos";
import { useState } from "react";
import Todolist from "./Todolist";
import TodoAdd from "./TodoAdd";
function App() {


  const [todos, setTodos] = useState(initialtodos)
  
  const add = deep => {
    setTodos([...todos,deep])
  }
  const setDone = key => {
    setTodos(todos.map(item =>
        item.key === key ? { ...item, done: !item.done } : item
      ))
  }

  const del = key => {
    const newTodos = todos.filter(item => item.key !== key)
    setTodos(newTodos)
  }

  return (

   <div className = 'container'>

      <nav className = "navbar is-light">
        <div className = 'navbar-brand'>
            <span className='navbar-item is-uppercase'>
              Todos
            </span>
        </div>
      </nav>

      <main className='content px-6 py-6'>
        <Todolist list = {todos} setDone={setDone} del={del}/>
        <TodoAdd add = {add}/>
      </main>

   </div>
  );
}

export default App;
