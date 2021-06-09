import {FunctionComponent, ReactNode} from 'react'
import {Header} from './Header/Header'
import {Sidebar} from './Sidebar/Sidebar'
import {Footer} from './Footer/Footer'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps): JSX.Element => {
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

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return <Layout>
            <Component {...props}/>
        </Layout>
    }
}