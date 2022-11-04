import c from "../img/c.png";
import c__ from "../img/c++.jpg";
import java from "../img/java.jpg";
import js from "../img/js.jpg";
import mysql from "../img/mysql.png";
import nodejs from "../img/nodejs.png";
import python from "../img/python.jpg";
import react from "../img/react.png";
import intro2 from "../img/intro2.png";
import "../css/home.css";
import { Link } from "react-router-dom";

function Home() {

    return (
        <>
            <main>
                <section className="first-sec home-sec">
                    <div className="intro">
                        <span>
                            <h1>
                                Wellcome to Quiz4Programming
                            </h1>
                            <div className="con">
                                <h3> Here you can inhence your programming knowledge by solving quizes</h3>
                                <h3> In our site you can solve quizes of various programming languages</h3>
                            </div>
                            <h4 id="lan">Java, Python, C, C++ and so on .</h4>
                        </span>
                        <span>
                            <img src={intro2} alt="logo" />
                        </span>
                    </div>
                </section>

                <hr />

                <section className="second-sec">
                    <h1>Quizes</h1>
                    <span>
                        <div>
                            <Link to="c-quiz">
                                <div className="sub-div">
                                    <img src={c} alt="c" />
                                    <h4>C</h4>
                                </div>
                            </Link>
                        </div>

                        <div>
                            <Link to="react-quiz">
                                <div className="sub-div">
                                    <img src={react} alt="react" />
                                    <h4>ReactJs</h4>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="java-quiz">
                                <div className="sub-div">
                                    <img src={java} alt="java" />
                                    <h4>Java</h4>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="cpp-quiz">
                                <div className="sub-div">
                                    <img src={c__} alt="c++" />
                                    <h4>C++</h4>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="javascript-quiz">
                                <div className="sub-div">
                                    <img src={js} alt="js" />
                                    <h4>JavaScript</h4>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="mysql-quiz">
                                <div className="sub-div">
                                    <img src={mysql} alt="ms" />
                                    <h4>MySQL</h4>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="python-quiz">
                                <div className="sub-div">
                                    <img src={python} alt="py" />
                                    <h4>Python</h4>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="java-quiz">
                                <div className="sub-div">
                                    <img src={nodejs} alt="nj" />
                                    <h4>NodeJs</h4>
                                </div>
                            </Link>
                        </div>
                    </span>
                </section>

            </main>
        </>
    );
}

export default Home;
