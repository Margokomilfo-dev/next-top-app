import {ReactNode} from 'react'
import {Header} from './Header/Header'
import {Sidebar} from './Sidebar/Sidebar'
import {Footer} from './Footer/Footer'

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
    <>
        <Header/>
        <div>
            <Sidebar/>
            <div>
                {children}
            </div>
        </div>
        <Footer/>

    </>
    )
}