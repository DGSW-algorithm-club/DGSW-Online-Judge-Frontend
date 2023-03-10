import routes from './routes'
import { Route, Routes } from 'react-router-dom'
import Nav from '../components/common/nav/index'
import Footer from '../components/common/footer/index'
const Router = () => {
    return (
        <>
            <Nav />
            <Routes> 
                {
                    routes.map(element => {
                        return <Route path={element.path} element={element.component} key={element.path}/>
                    })
                }
            </Routes>
            <Footer />
        </>
    )

}
export default Router