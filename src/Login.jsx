import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { useFetcher } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState('')
    const fetcher = useFetcher()

    function handleFormSubmit(evt){
        evt.preventDefault()
        fetcher.submit({email, password},
             {action: '/login', method:'post'})
    }

    function handleFormReset(){
        setEmail('')
        setPassword('')
    }

    return (
        <section>
            <h1>Вход</h1>
            <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
                <div className="field">
                    <label className="label">Адрес электронной почты</label>
                    <div className="control">
                        <input value = {email}
                         onChange={(evt) => setEmail(evt.target.value)} 
                         className="input"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Пароль</label>
                    <div className="control">
                        <input value={password} 
                        className="input" 
                        onChange={(evt) => setPassword(evt.target.value)}/>
                    </div>
                </div>
                  <div className="field is-grouped is-grouped-right">
                    <div className="control">
                        <input type="reset" className="button is-warning is-light" value="сброс"/>
                    </div>
                    <div className="control">
                        <input type="submit" className="button is-primary" value="Войти"/>
                    </div>
                </div>
            </form>
        </section>
    )
}