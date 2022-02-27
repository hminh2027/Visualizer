import React, { useReducer } from 'react'

const initialState = {
    array: [],
    length: 10,
    speed: 1000,
    sortingTab: 0,
    isSorting: false,
    isShowDescription: false,
    lastAnimationIndex: 0,
    animations: [],
    timers: []
}

const store = React.createContext(initialState)
const { Provider } = store

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {

        switch(action.type) {
            case 'SET_ARRAY':
                return {...state, array: action.payload}

            case 'SET_SPEED':
                return {...state, speed: action.payload}

            case 'SET_LENGTH':
                return {...state, length: action.payload}

            case 'SET_SORTING_TAB':
                return {...state, sortingTab: action.payload}
                
            case 'SET_IS_SORTING':
                return {...state, isSorting: action.payload}

            case 'SET_LAST_ANIMATION_INDEX':
                return {...state, lastAnimationIndex: action.payload}

            case 'SET_ANIMATIONS':
                return {...state, animations: action.payload}
                
            case 'SET_TIMERS':
                return {...state, timers: action.payload}

            case 'SET_IS_SHOW_DESCRIPTION':
                return {...state, isShowDescription: action.payload}
    
            default:
                throw new Error()
        }
    }, initialState)
  
    return <Provider value={{state, dispatch}}>{children}</Provider>
  }
  
  export { store, StateProvider }