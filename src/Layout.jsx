import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;