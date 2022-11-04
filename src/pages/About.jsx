import ravi from "../img/ravi.jpg";
import "../css/about.css";

function About(){
    return(<>
        <main>
            <div className="about-main">
                <div className="about-sub-con">
                    <div className="about-info">
                        <button>ABOUT</button>
                        <h2>Ravi</h2>
                    </div>
                    <div className="about-img-con">
                        <img src={ravi} alt="ravi" className="about-img"/>
                        <span className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, natus eveniet. Non, qui. Fugit animi fuga expedita libero error voluptatum asperiores quia dicta accusamus sed commodi sequi, esse, cupiditate delectus, ipsum provident ad nulla in laudantium quibusdam eos corporis vel.</span>
                    </div>
                </div>
            </div>
        </main>
        
    </>)
}

export default About;