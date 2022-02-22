import React, {useRef, useEffect} from 'react'

const outsideClick = (props) => {
    const ref = useRef()

    useEffect(()=>{
        const checkIfClickOutside = e => {
            if(props.state && ref.current && !ref.current.contains(e.target)){
                setTimeout(()=>props.setState(false), 50)
            } 
        }
        document.addEventListener("mousedown", checkIfClickOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickOutside)
        }
    },[props.state])

    return (
        <div style={{width: '100%', height: '100%'}} ref={ref}>
            {props.children}
        </div>
    )
}

export default outsideClick
