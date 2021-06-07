import s from './Tag.module.css'
import cn from 'classnames'
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react'

interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm'
    children: ReactNode
    color: 'ghost' | 'red' | 'grey' | 'green' | 'primary'
    href?: string
}

export const Tag = ({children, size = 's', color = 'ghost', href, className, ...props}: PtagProps): JSX.Element => {
    return (
    <div
        className={cn(s.tag, className, {
                [s.s]: size === 's',
                [s.m]: size === 'm',
                [s.ghost]: color === 'ghost',
                [s.red]: color === 'red',
                [s.green]: color === 'green',
                [s.grey]: color === 'grey',
                [s.primary]: color === 'primary',
            }
        )} {...props}
    >
        {href ? <a href={href}>{children}</a> : <>{children}</> }

    </div>
    )
}