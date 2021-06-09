import s from './Footer.module.css'
import cn from 'classnames'
import {DetailedHTMLProps, HTMLAttributes} from 'react'

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({...props}: FooterProps): JSX.Element => {
    return (
    <div {...props}>
       Footer
    </div>
    )
}