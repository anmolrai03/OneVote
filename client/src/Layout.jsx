import { Outlet } from "react-router-dom";
import { Header } from "./components";
import Footer from "./components/Footer/Footer";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Layout;