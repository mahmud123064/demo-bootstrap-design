import { FcDonate } from "react-icons/fc";
import { CiLogin, CiSearch } from "react-icons/ci";
import { FaRegAddressBook } from "react-icons/fa";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="container">
            <nav className="d-none d-md-block">
                <div className="flex1 row ">
                    <div className="col">
                        <h2 className="d-none d-md-block">Platform </h2>
                    </div>
                    <div className="login-donate col d-flex justify-content-end">
                        <Link className="donate me-3"><FcDonate className="pe-1" size={25}></FcDonate>Donate</Link>
                        <Link className="donate me-1"><CiLogin className="pe-1" size={25}></CiLogin>Login</Link> OR
                        <Link className="donate ms-2"><FaRegAddressBook className="pe-1" size={25}></FaRegAddressBook>Registration</Link>
                    </div>
                </div>
            </nav>

            {/* Main header  */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary container ">
                <div className="container-fluid">
                    <a className="navbar-brand d-lg-none" href="#">Platform</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ml-auto px-2 mb-lg-0">
                            {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"></a>
                        </li> */}
                            {/* <li className="nav-item">
                            <a className="nav-link" href="#"></a>
                        </li> */}
                            {/* <li className="nav-item">
                            <a className="nav-link" href="#"></a>
                        </li> */}
                        </ul>
                        <span className="navbar-text ">
                            <ul className="navbar-nav flex justify-content-center mx-auto mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Doctor's Directory</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Magazines</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Resources
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">PDF Book</a></li>
                                        <li><a className="dropdown-item" href="#">Videos</a></li>
                                        <li><a className="dropdown-item" href="#">Guidelines</a></li>
                                        <li><a className="dropdown-item" href="#">Webinars</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Jobs/Career</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        News
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Desk Report</a></li>
                                        <li><a className="dropdown-item" href="#">Literature</a></li>
                                        <li><a className="dropdown-item" href="#">Co-curricular</a></li>
                                        <li><a className="dropdown-item" href="#">Campus</a></li>
                                        <li><a className="dropdown-item" href="#">Conference</a></li>
                                        <li><a className="dropdown-item" href="#">Mourn</a></li>
                                        <li><a className="dropdown-item" href="#">All</a></li>

                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CME</a>
                                </li>
                                <li className="nav-item ">
                                    <div className="search-box">
                                        <form>
                                            <input id="input" type="text" name="" placeholder="Search..." />
                                            <button className="button"><CiSearch></CiSearch></button>
                                        </form>
                                    </div>
                                </li>



                                {/* Button for donate and login  */}

                                <li className="nav-item">
                                    <div className="login-donate d-block d-md-none">
                                        <Link className="donate me-3"><FcDonate className="pe-1" size={25}></FcDonate>Donate</Link>
                                        <Link className="donate me-1"><CiLogin className="pe-1" size={25}></CiLogin>Login</Link> OR
                                        <Link className="donate ms-2"><FaRegAddressBook className="pe-1" size={25}></FaRegAddressBook>Registration</Link>
                                    </div>
                                </li>

                            </ul>
                        </span>

                        <ul>

                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;