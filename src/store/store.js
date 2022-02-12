import React, { useReducer } from 'react'

const initialState = {
    array: [],
    length: 100
}
const store = React.createContext(initialState)
const { Provider } = store

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {

        switch(action.type) {
            case 'UPDATE_ARRAY':
                const newState = {...state, array: action.payload}
                return newState

            default:
                throw new Error()
        }
    }, initialState)
  
    return <Provider value={{state, dispatch}}>{children}</Provider>
  }
  
  export { store, StateProvider }