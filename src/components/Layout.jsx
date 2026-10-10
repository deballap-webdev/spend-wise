import Nav from "./Nav"
import { Outlet } from "react-router"
import Header from './Header'
import Footer from './Footer'
const Layout = () => {
  return (
    <div className="flex w-full ">
    <Nav/>
    <div className="flex flex-col w-full px-4">
    <Header className="sticky top-0 z-10"/>
<Outlet className="grow"/>
<Footer className="fixed bottom-0 z-10"/>
</div>
    </div>
  )
}

export default Layout