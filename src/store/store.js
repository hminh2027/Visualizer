import React, { useReducer } from 'react'

const initialState = {
    array: [],
    length: 10,
    speed: 300,
    sortingTab: 0,
    isSorting: false,
    lastAnimationIndex: 0
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

            case 'SET_SORTING_TAB':
                return {...state, sortingTab: action.payload}
                
            case 'SET_IS_SORTING':
                return {...state, isSorting: action.payload}

            case 'SET_LAST_ANIMATION_INDEX':
                return {...state, lastAnimationIndex: action.payload}

            default:
                throw new Error()
        }
    }, initialState)
  
    return <Provider value={{state, dispatch}}>{children}</Provider>
  }
  
  export { store, StateProvider }