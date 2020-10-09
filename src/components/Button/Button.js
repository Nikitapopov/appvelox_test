import React from "react"
import s from './Button.module.sass'
import cn from 'classnames'

let Button = ({children, className}) => {
    return <button className={cn(s.btn, className)}>
        {children}
    </button>
}

export default Button;