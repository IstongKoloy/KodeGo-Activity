import { Link } from "react-router-dom";

function Header() {
    return(
            <nav className="navbar sticky-top navbar-expand-lg bg-info">
                <div className="container myNavbar">
                    <Link className="navbar-brand fs-1" to="/">
                        <span className="text-light">Wonder</span><span className="text-danger fst-italic">Phil</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-4">
                                <Link className="nav-link text-light" to="/Destination">Destinations</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link text-light" to="/Foods" >Foods</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link text-light" to="/Festivals" >Festivals</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link text-light" to="/People" >People</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Header;