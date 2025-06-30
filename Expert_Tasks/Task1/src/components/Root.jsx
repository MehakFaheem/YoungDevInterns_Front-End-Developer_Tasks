import { Outlet } from "react-router-dom";
import Nav from "./Navigation";
import Footer from "./Footer";

const Root = () => {
    return (
        <>
        <Nav />
        {/* Will show our children , e,g about page */}
        <Outlet /> 
        <Footer />
        </>
    )
}
export default Root;