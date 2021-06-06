import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react'
import s from './Button.module.css'
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

//import svg -
// 1) из public <img src="/image.svg">
// 2) добавить в вебпак поднадстройку (создать next.config.ts) и текст в next-env.d.ts, + yarn add @svgr/webpack

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode;
    appearance: 'primary' | 'ghost'
    arrow?: 'right' | 'down' | 'none'
}

//props className- если мы нашему Button решим задать какой-то класс снаружи
//sn - function, 1 - сам модульный класс, {условия  зависимости от пропсов}

export const Button = ({children, arrow = 'none', appearance, className, ...props}: ButtonProps): JSX.Element => {
    return <button
        className={ cn (s.button, className, {
            [s.primary]: appearance === 'primary',
            [s.ghost]: appearance === 'ghost'
        })}{...props} >

        {children}
        {arrow !== 'none' && <span className={cn(s.arrow, {[s.down]: arrow === 'down', [s.right]: arrow === 'right'})}>
            {/*!!!!!!SVG!*/}
            <ArrowIcon/>
        </span>}
    </button>
}