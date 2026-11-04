import { Link } from "react-router-dom";

export default function Error404(){
    return (
        <section>
            <h1>
                дело не существует
            </h1>
            <p>перейдите на <Link to='/'>главную страницу</Link></p>
        </section>
    )
}