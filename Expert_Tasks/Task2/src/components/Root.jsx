import { Outlet } from "react-router-dom";
import Nav from "./Navigation";
import Footer from "./Footer";

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <Nav />
        
        {/* Will show our children , e,g about page */}

        <main className="flex-grow">
        <Outlet />
        </main>
        
        <Footer />
        </ div>
    )
}
export default Root;