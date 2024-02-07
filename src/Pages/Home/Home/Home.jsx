import { Link } from "react-router-dom";
import Ads from "../../Ads/Ads";
// import UpcommingEvents from "../../UpcommingEvents/UpcommingEvents";
import Banner from "../Banner/Banner";
import Partnerslogo from "../Partnerslogo/Partnerslogo";
import './Home.css'


const Home = () => {
    return (
        <div className="container-fluid">
            <div className=" ">
                <div >
                    <div>
                        <Banner></Banner>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Partnerslogo></Partnerslogo>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div style={{ backgroundColor: "gray", borderRadius: "10px", height: "400px", padding: "10px" }} >
                            <Ads></Ads>
                            <div>
                                <Link className="text-details " to="/upcommingevents"><p className="mt-2 ">Upcoming Events</p></Link>
                                <Link className="text-details " to="/gallery"><p className="mt-2 ">Image Gallery</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;