import { FaFacebookF, FaTwitter,FaGoogle,FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {


    return (


        <div className=" mt-5">
            {/* footer  */}

            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: '#929fba' }}
            >
                {/* grid container  */}
                <div className="container p-5 pb-5">
                    {/* <!-- Section: Links --> */}
                    <section className="">
                        {/* <!--Grid row--> */}
                        <div className="row">
                            {/* <!-- Grid column --> */}
                            <ul className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 mb-2 ">

                                <li className=' link-details mb-2'>
                                    <Link className="text-white text-style ">Quack Hunt</Link>
                                </li>
                                <li className='text-decoration-none mb-2'>
                                    <Link className="text-white text-style ">Social Responsibility</Link>
                                </li>
                                <li className='text-decoration-none '>
                                    <Link className="text-white text-style ">News Letter</Link>
                                </li>

                            </ul>
                            {/* <!-- Grid column --> */}

                            <hr className="w-100 clearfix d-md-none" />

                            {/* <!-- Grid column --> */}
                          
                                <ul className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 mb-2">

                                    <li className='text-decoration-none mb-2'>
                                        <Link className="text-white text-style ">Portfolio</Link>
                                    </li>
                                    <li className='text-decoration-none mb-2'>
                                        <Link className="text-white text-style ">What we do</Link>
                                    </li>
                                    <li className='text-decoration-none '>
                                        <Link className="text-white text-style ">Meet our team</Link>
                                    </li>

                                </ul>
            
                            {/* <!-- Grid column --> */}

                            <hr className="w-100 clearfix d-md-none" />

                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <ul className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 mb-2">

                                    <li className='text-decoration-none mb-2'>
                                        <Link className="text-white text-style ">Blog</Link>
                                    </li>
                                    <li className='text-decoration-none mb-2'>
                                        <Link className="text-white text-style ">Annual Reports</Link>
                                    </li>
                                    <li className='text-decoration-none '>
                                        <Link className="text-white text-style ">Contact Us</Link>
                                    </li>

                                </ul>
                            {/* <!-- Grid column --> */}
                            <hr className="w-100 clearfix d-md-none" />
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                                {/* <!-- Facebook --> */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#3b5998',borderRadius: "50px" }}
                                    href="#!"
                                    role="button"
                                ><FaFacebookF />
                                </a>

                                {/* <!-- Twitter --> */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: ' #55acee', borderRadius: "50px" }}
                                    href="#!"
                                    role="button"
                                ><FaTwitter></FaTwitter></a>

                                {/* <!-- Google --> */}
                                <a
                                    className="btn btn-primary btn-floating m-1"

                                    style={{ backgroundColor: ' #dd4b39', borderRadius: "50px"}}
                                    href="#!"
                                    role="button"
                                ><FaGoogle></FaGoogle></a>

                                {/* <!-- Instagram --> */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: ' #ac2bac', borderRadius: "50px" }}
                                    href="#!"
                                    role="button"
                                ><FaInstagram></FaInstagram></a>

                                {/* <!-- Linkedin --> */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: ' #0082ca', borderRadius: "50px" }}
                                    href="#!"
                                    role="button"
                                ><FaLinkedin></FaLinkedin></a>
                                {/* <!-- Github --> */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: ' #333333',borderRadius: "50px" }}
                                    href="#!"
                                    role="button"
                                ><FaGithub></FaGithub></a>
                            </div>
                        </div>
                        {/* <!--Grid row--> */}
                    </section>
                    {/* <!-- Section: Links --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                >
                    © 2024 Copyright : legoio llc

                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </div>


    );
};

export default Footer;