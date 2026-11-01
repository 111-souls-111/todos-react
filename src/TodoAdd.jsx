import { useState } from "react";

export default function TodoAdd(props){

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')

    const handleImageChange = (evt) => {
        const cFiles = evt.target.files

        if (cFiles.length > 0){
            const fileReader = new FileReader()
            fileReader.onLoad = ( ) => {
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
        const newDeed = {title,desc,image,done:false}
        const date = new Date();
        newDeed.createdAt = date.toLocaleString()
        newDeed.key = date.getTime()
        props.add(newDeed)
        evt.target.reset()
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
                            accept="/image*"
                            onChange={() => handleImageChange}/>
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