import s from './Sidebar.module.css'
import cn from 'classnames'
import {DetailedHTMLProps, HTMLAttributes} from 'react'

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
    <div {...props}>
      Sidebar
    </div>
    )
}