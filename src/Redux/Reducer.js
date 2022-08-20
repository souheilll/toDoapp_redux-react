import { Add_Task, Delete_Task, Update_Task, Done_Task } from "./Types";

const initState = [
    { id: 1, text: 'playing footbal', done: false },
    { id: 2, text: 'doing homework', done: false }
]

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case Add_Task: return [...state, action.payload]
        case Delete_Task: return state.filter(el => el.id !== action.payload)
        case Update_Task: return state.map(el => {
            if (el.id === action.payload.id) {
                return { ...el, text: action.payload.textUp }
            }
            else return el
        })
        default: return state

    }
}

export default rootReducer