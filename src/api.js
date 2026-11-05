import { redirect } from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword ,onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"
import firebaseApp from "./firebase";
import { ref, push, set, query, get, remove, getDatabase} from 'firebase/database'

const auth = getAuth(firebaseApp)
const database = getDatabase(firebaseApp)

export function onlyLoggedOut(){
    if (getUserid()){
        return redirect('/')
    }
    else{
        return null
    }
}

function getUserid(){
    if (auth.currentUser)
        return auth.currentUser?.uid
    else
        return window.localStorage.getItem('user-id')
}

export async function getTodos(){
    const currentUserId = getUserid()
    if (!currentUserId){
        return redirect('/login')
    }
    const r = ref(database, `users/${currentUserId}/todos`)
    const q = query(r)
    const s = await get(q)
    const res = []
    s.forEach((doc) => {
        const __todo = doc.val()
        __todo.key = doc.key
        res.push(__todo)
    })

    return res

}

export async function login({request}){
    const fd = await request.formData()
    try{
        const cr = await signInWithEmailAndPassword(auth, fd.get('email'), fd.get('password'))
        window.localStorage.setItem('user-id', cr.user.uid)
        return redirect('/')
    }
    catch (err){
        return err.code
    }
}

export async function loguot(){
    await signOut(auth)
    window.localStorage.removeItem('user-id')
    return redirect('/login')

}


export async function getTodo({ params }){
   const currentUserId = getUserid()
   if (!currentUserId){
        return redirect('/login')
    }
   const r = ref(database, `users/${currentUserId}/todos/${params.key}`)
   const q = query(r)
   const s = await get(q)
   if (!s.exists()){
      throw new Error()
   }
   return s.val()

}

export function setStateChangeHandler(func){
    return onAuthStateChanged(auth, func)
}

export async function register({request}){
    const fd = await request.formData()
    try{
        const cr = await createUserWithEmailAndPassword(
            auth,
            fd.get('email'), fd.get('password')
        )
        window.localStorage.setItem('user-id', cr.user.uid)
        return redirect('/')
    }
    catch (err){
        console.error("Firebase error details:", err.response?.data?.error?.message || err.message);
        return err.code
    }
}


export async function actTodo({ params, request }){
    const currentUserId = getUserid()
    if (!currentUserId){
        return redirect('/login')
    }
    const method = request.method
    if (method === "DELETE"){
        const r = ref(database, `users/${currentUserId}/todos/${params.key}`)
        await remove(r)
    }
    else if (method === "PATCH"){
        const r = ref(database, `users/${currentUserId}/todos/${params.key}/done`)
        await set(r, true)
    }
    return redirect('/login')
}

export async function addTodo({request}) {
    const currentUserId = getUserid()
    if (!currentUserId){
        return redirect('/login')
    }
    const fd = await request.formData()
    const date = new Date()
    const newTodo = {
        title: fd.get('title'),
        desc: fd.get('desc'),
        image: fd.get('image'),
        done: false,
        createdAt: date.toLocaleString(),
    }
    const db = ref(database, `users/${currentUserId}/todos`)
    const r = await push(db)
    await set(r, newTodo)
    return redirect('/')
}