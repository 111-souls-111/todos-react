import { createRoutesFromElements, createBrowserRouter, Route, Link } from "react-router-dom";

import App from "./App";
import Todolist from "./Todolist";
import TodoAdd from "./TodoAdd";
import { addTodo, getTodos, getTodo, actTodo, register, login, loguot, onlyLoggedOut } from "./api";
import TodoDetal from "./TodoDetail";
import Error404 from "./error404";
import Register from "./Register";
import Login from "./Login";

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
            <Route path="/register" 
            element={<Register/>} 
            loader={onlyLoggedOut}
            action={register}
            />
            <Route path="/login" 
            element={<Login/>} 
            action={login}
            loader={onlyLoggedOut}
            />
            <Route path="/logout"  
            loader={loguot}
            />
        </Route>
    )
)

export default router