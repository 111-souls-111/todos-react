const date1 = new Date(2024, 6, 18, 10, 24)
const date2 = new Date(2024, 6, 19, 14, 47)

const todos = [
    {
        title: 'Помыть пол',
        desc: 'быстро',
        image: '',
        done: true,
        crearedAt: date1.toLocaleString(),
        key: date1.getTime,
    },
    {
        title: 'Помыть посуду',
        desc: 'быстро',
        image: '',
        done: false,
        crearedAt: date2.toLocaleString(),
        key: date2.getTime,
    },
]

export default todos