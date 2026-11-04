import { useState } from "react";
import { useSubmit } from "react-router-dom";

export default function TodoAdd(){
    const submit = useSubmit()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')

    const handleImageChange = (evt) => {
        const cFiles = evt.target.files

        if (cFiles.length > 0){
            const fileReader = new FileReader()
            fileReader.onload = ( ) => {
                setImage(fileReader.result)
            } 
            fileReader.readAsDataURL(cFiles[0])
        }
        else{
            setImage('')
        }
    }

    const handleFormSubmit = evt => {
        evt.preventDefault();
        const finalTitle = title.trim() !== '' ? title.trim() : "без названия"
        submit({title: finalTitle, desc, image},
            {action:'/add', method: 'post'}
        )
    }

    const handleFormReset = () => {
        setTitle('')
        setImage('')
        setDesc('')
    }

    return (
        <section>
            <h1>Создание нового дела</h1>
            <form onSubmit = {handleFormSubmit} onReset = {handleFormReset}>
                <div className="field">
                    <label className="label">заголовок</label>
                    <div className="control">
                        <input value={title}
                        className="input"
                        onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Описание</label>
                    <div className="control">
                        <textarea value={desc}
                        className="textarea"
                        onChange={(e) => setDesc(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <div className="file">
                        <label className="file-label">
                            <input className="file-input"
                            type = "file"
                            accept="image/*"
                            onChange={(evt) => handleImageChange(evt)}/>
                        <span className="file-cta">
                            <span className="file-label">
                                Граф. иллюстрация
                            </span>
                        </span>
                        </label>
                    </div>
                </div>

                <div className="field is-grouped is-grouped-right">
                    <div className="control">
                        <input type="reset" className="button is-warning is-light" value="сброс"/>
                    </div>
                    <div className="control">
                        <input type="submit" className="button is-primary" value="создать дело"/>
                    </div>
                </div>
            </form>
        </section>
    )
}