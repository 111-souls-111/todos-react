import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

export default function Register(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPasswordConfirm, setErrorPasswordConfirm] = useState('')
    const fetcher = useFetcher()


    useEffect(() => {
        if (fetcher.state === 'submitting') {
            resetErrorMessage()
        }
    }, [fetcher.state])

    useEffect(() => {
        if (fetcher.data) {
            resetErrorMessage();
            if (fetcher.data === 'auth/email-already-in-use') {
                setErrorEmail('почетитель с таким адресом электоронной почты уже есть')
            }
            else if (fetcher.data === 'auth/weak-password'){
                setErrorPassword('слишком простой пароль')
            }
        }
    }, [fetcher.state, fetcher.data])


    function handleFormSubmit(evt){
        evt.preventDefault()
        if (validate()){
            fetcher.submit({email, password},
             {action: '/register', method:'post'})
        }
          
    }

    function resetErrorMessage(){
        setErrorEmail('')
        setErrorPassword('')
        setErrorPasswordConfirm('')
    }

    const validate = () =>{
        resetErrorMessage()
        if (!email){
            setErrorEmail('адрес электронной почты не указан')
            return false
        }
        if (!password){
            setErrorPassword('пароль не указан')
            return false
        }
        if (!passwordConfirm){
            setErrorPasswordConfirm('повтор пароля не указан')
            return false
        }
        if (password !== passwordConfirm){
            setErrorPasswordConfirm("Пароли не совпадают")
        }
        return true
        

    }

    function handleFormReset(){
        setEmail('')
        setPassword('')
        setPasswordConfirm('')
    }

    return (
        <section>
            <h1>Регистрация</h1>
            <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
                <div className="field">
                    <label className="label">Адрес электронной почты</label>
                    <div className="control">
                        <input value = {email}
                         onChange={(evt) => setEmail(evt.target.value)} 
                         className="input"/>
                    </div>
                    {errorEmail && (
                        <p className="help is-danger">
                        {errorEmail}
                         </p>
                    )}
                </div>
                <div className="field">
                    <label className="label">Пароль</label>
                    <div className="control">
                        <input value={password} 
                        className="input" 
                        onChange={(evt) => setPassword(evt.target.value)}/>
                    </div>
                    {errorPassword && (
                        <p className="help is-danger">
                        {errorPassword}
                         </p>
                    )}
                </div>
                <div className="field">
                    <label className="label">Повтор пароля</label>
                    <div className="control">
                        <input value={passwordConfirm} 
                        className="input" 
                        onChange={(evt) => setPasswordConfirm(evt.target.value)}/>
                    </div>
                    {errorPasswordConfirm && (
                        <p className="help is-danger">
                        {errorPasswordConfirm}
                         </p>
                    )}
                </div>
                  <div className="field is-grouped is-grouped-right">
                    <div className="control">
                        <input type="reset" className="button is-warning is-light" value="сброс"/>
                    </div>
                    <div className="control">
                        <input type="submit" className="button is-primary" value="Зарегистрироваться"/>
                    </div>
                </div>
            </form>
        </section>
    )
}