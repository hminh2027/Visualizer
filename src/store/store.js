import React, { useReducer } from 'react'

const initialState = {
    array: [],
    length: 100,
    speed: 300
}
const store = React.createContext(initialState)
const { Provider } = store

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {

        switch(action.type) {
            case 'UPDATE_ARRAY':
                return {...state, array: action.payload}

            case 'UPDATE_SPEED':
                return {...state, speed: action.payload}

            case 'UPDATE_LENGTH':
                return {...state, length: action.payload}

            default:
                throw new Error()
        }
    }, initialState)
  
    return <Provider value={{state, dispatch}}>{children}</Provider>
  }
  
  export { store, StateProvider }