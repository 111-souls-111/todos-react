const date1 = new Date(2024, 6, 18, 10, 24)
const date2 = new Date(2024, 6, 19, 14, 47)

const todos = [
    {
        title: 'Помыть пол',
        desc: 'быстро',
        image: '',
        done: false,
        crearedAt: date1.toLocaleString(),
        key: 2,
    },
    {
        title: 'Помыть посуду',
        desc: 'быстро',
        image: '',
        done: false,
        crearedAt: date2.toLocaleString(),
        key: 1,
    },
]

export default todos