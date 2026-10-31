export default function Todolist(props){
    return (
        <section>
            <h1>Дела</h1>
                <table className="table is-hoverable is-fullwidth">
                    <tbody>
                        {props.list.map(item => (
                            <tr key={item.key}>
                                <td>
                                    {item.done && <del>item.title</del>}
                                    {!item.done && item.title}
                                </td>
                                <td>
                                    <button className="button in-succes" 
                                    title="выполнено" 
                                    disabled={item.done}>
                                    &#9745;
                                    </button>
                                </td>
                                <td>
                                    <button className="button is-danger"
                                    title="удалить">
                                    &#9746;
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </section>
    )
}