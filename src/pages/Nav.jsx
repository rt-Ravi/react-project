import logo from "../img/logo.png";
import "../css/nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {

    const [sty, setSty] = useState({});
    const [check, setCheck] = useState(true);
    let interval;

    const openNav = () => {
        if(check){
            setSty({display:"block"});
            setCheck(false);

            interval = setInterval(() => {
                if(window.outerWidth > 666){
                    setSty({display:"none"});
                    setCheck(true);
                    clearInterval(interval);
                }
            }, 500);
        }

        else{
            setSty({display:"none"});
            setCheck(true);
            clearInterval(interval);
        }
    }

    return (
        <>
            <nav>
                <div className="pc-nav-con">
                    <span>
                        <img src={logo} alt="" />
                    </span>
                    <span>
                        <ul>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="/">CONTACT</Link>
                            </li>
                            <li>
                                <Link to="/">LANGUAGES</Link>
                            </li>
                        </ul>
                    </span>
                    <span>
                        <p id="menu-btn" onClick={openNav}> ||| </p>
                    </span>
                </div>

                <div className="phone-nav" id="PN" style={sty}>
                        <ul>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="">CONTACT</Link>
                            </li>
                            <li>
                                <Link to="">LANGUAGES</Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
