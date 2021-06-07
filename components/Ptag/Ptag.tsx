import s from './Ptag.module.css'
import cn from 'classnames'
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react'

interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: '14px' | '16px' | '18px'
    children: ReactNode
}

export const Ptag = ({children, size = '16px', className, ...props}: PtagProps): JSX.Element => {
    return (
    <p
        className={cn(s.p, className, {
                [s.p14]: size === '14px',
                [s.p18]: size === '18px'
            }
        )} {...props}
    >
        {children}
    </p>
    )
}