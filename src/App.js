import todos from "./todos";
import Todolist from "./Todolist";
function App() {
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
        <Todolist list = {todos}/>
        
      </main>

   </div>
  );
}

export default App;
