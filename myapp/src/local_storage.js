const NOTEPAD_STATE = "NOTEPAD_STATE"

//load state
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(NOTEPAD_STATE)
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    }   catch(err) {
        return undefined
    }
}

//save state
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(NOTEPAD_STATE, serializedState)
    } catch(err) {
        console.log("Error saving data:"+err)
    }
}