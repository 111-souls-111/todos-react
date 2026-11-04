import { createRoutesFromElements, createBrowserRouter, Route, Link } from "react-router-dom";

import App from "./App";
import Todolist from "./Todolist";
import TodoAdd from "./TodoAdd";
import { addTodo, getTodos, getTodo, actTodo } from "./api";
import TodoDetal from "./TodoDetail";
import Error404 from "./error404";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} element={<Todolist />} loader={getTodos}/>
            <Route path="add" element={<TodoAdd />} action = {addTodo}/>
            <Route path=":key" 
            element={<TodoDetal />} 
            loader={getTodo} 
            action={actTodo}
            errorElement={<Error404 />}
            />
        </Route>
    )
)

export default router