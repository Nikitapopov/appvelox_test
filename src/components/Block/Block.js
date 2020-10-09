import React from "react"
import s from './Block.module.sass'
import cn from 'classnames'

let Block = ({children, className}) => {
    return <div className={cn(s.block, className)}>
        {children}
    </div>
}

export default Block;