import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import Header from "../../Pages/Home/Header/Header";



const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;