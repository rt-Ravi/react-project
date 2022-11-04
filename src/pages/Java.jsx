import "../css/java.css";
import { useState, useEffect } from "react";

function Java({ ques, quiz_name, ans, lan_name}) {

    useEffect(() => {
        let timer = setTimeout(() => {
            document.title = "quiz4programming | " + quiz_name;
        }, 100);

        return () => clearTimeout(timer)
    }, [quiz_name])

    const [changer, setChanger] = useState(0);
    const [question, setQuestion] = useState(ques[changer]);
    const [currentAns, setCurrentAns] = useState();
    const [answer, setAnswer] = useState([]);
    const [checkCon, setCheckCon] = useState(false);

    let [check, setCheck] = useState(false);

    let quizbox1 = document.getElementById("b1");
    let quizbox2 = document.getElementById("b2");
    let quizbox3 = document.getElementById("b3");
    let quizbox4 = document.getElementById("b4");

    const changeQuestion = () => {
        setChanger((pre) => { return pre + 1 });
        setQuestion(ques[changer + 1]);
        if (checkCon) {
            setAnswer((pre) => { return [...pre, currentAns] });
            setCheckCon(false);
        }
        else {
            setAnswer((pre) => { return [...pre, null] });
        }

        uncheckthebox();
    }

    const previousQuestion = () => {
        if (changer > 0) {
            setChanger((pre) => { return pre - 1 });
            setQuestion(ques[changer - 1]);

            if (answer[changer - 1] === 1)
                quizbox1.checked = true;
            else if (answer[changer - 1] === 2)
                quizbox2.checked = true;
            else if (answer[changer - 1] === 3)
                quizbox3.checked = true;
            else if (answer[changer - 1] === 4)
                quizbox4.checked = true;

            let arr = answer;
            arr.pop();
            setAnswer(arr);
        }
    }

    const uncheckthebox = () => {
        if (check) {
            quizbox1.checked = false;
            quizbox2.checked = false;
            quizbox3.checked = false;
            quizbox4.checked = false;
            setCheck(false);
        }
    }

    const ok = (ans) => {
        setCurrentAns(ans);
        setCheckCon(true);
        setCheck(true);
    }

    if (changer === 25) {

        return (
            <>
                <main>
                    <div className="result-box-main">
                        <div className="result-box-local">
                            {
                                ques.map((current, index) => {
                                    let b1, b2, b3, b4;
                                    if (answer[index] === ans[index]) {
                                        if (answer[index] === 1)
                                            b1 = { backgroundColor: "#6dcf6d" };
                                        else if (answer[index] === 2)
                                            b2 = { backgroundColor: "#6dcf6d" };
                                        else if (answer[index] === 3)
                                            b3 = { backgroundColor: "#6dcf6d" };
                                        else if (answer[index] === 4)
                                            b4 = { backgroundColor: "#6dcf6d" };
                                    }

                                    else if (answer[index] === null) {
                                        if (ans[index] === 1)
                                            b1 = { backgroundColor: "#cff5cf" };
                                        else if (ans[index] === 2)
                                            b2 = { backgroundColor: "#cff5cf" };
                                        else if (ans[index] === 3)
                                            b3 = { backgroundColor: "#cff5cf" };
                                        else if (ans[index] === 4)
                                            b4 = { backgroundColor: "#cff5cf" };
                                    }

                                    else if (answer[index] !== ans[index] && answer[index] !== null) {
                                        if (answer[index] === 1)
                                            b1 = { backgroundColor: "#f76f6f" };
                                        else if (answer[index] === 2)
                                            b2 = { backgroundColor: "#f76f6f" };
                                        else if (answer[index] === 3)
                                            b3 = { backgroundColor: "#f76f6f" };
                                        else if (answer[index] === 4)
                                            b4 = { backgroundColor: "#f76f6f" };

                                        if (ans[index] === 1)
                                            b1 = { backgroundColor: "#6dcf6d" };
                                        else if (ans[index] === 2)
                                            b2 = { backgroundColor: "#6dcf6d" };
                                        else if (ans[index] === 3)
                                            b3 = { backgroundColor: "#6dcf6d" };
                                        else if (ans[index] === 4)
                                            b4 = { backgroundColor: "#6dcf6d" };
                                    }

                                    return (
                                        <div key={index}>
                                            <div><h2>{current.ques}</h2></div>
                                            <div style={b1}><h3>{current.box1}</h3></div>
                                            <div style={b2}><h3>{current.box2}</h3></div>
                                            <div style={b3}><h3>{current.box3}</h3></div>
                                            <div style={b4}><h3>{current.box4}</h3></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </main>
            </>
        )
    }

    else {

        return (
            <>
                <main id="main_tag">
                    <p className="pt" id="pt"></p>
                    <section className="quiz-section">
                        <div className="quiz-box">
                            <h1>{lan_name} Quiz</h1>
                            <h3>Question {changer + 1} of 25</h3>
                            <h4>{question.ques}</h4>
                            <div style={question.style}>{question.practical_question}</div>
                            <form action="">
                                <label htmlFor="b1" id="box1" onClick={() => { ok(1) }}>
                                    <input type="radio" name="quiz" id="b1" readOnly />
                                    <p>{question.box1}</p>
                                </label>

                                <label htmlFor="b2" id="box2" onClick={() => { ok(2) }}>
                                    <input type="radio" name="quiz" id="b2" readOnly />
                                    <p>{question.box2}</p>
                                </label>

                                <label htmlFor="b3" id="box3" onClick={() => { ok(3) }}>
                                    <input type="radio" name="quiz" id="b3" readOnly />
                                    <p>{question.box3}</p>
                                </label>

                                <label htmlFor="b4" id="box4" onClick={() => { ok(4) }}>
                                    <input type="radio" name="quiz" id="b4" readOnly />
                                    <p>{question.box4}</p>
                                </label>
                            </form>
                            <button className="next" onClick={changeQuestion}>Next</button>
                            <button className="previous" onClick={previousQuestion}>Previous</button>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default Java;
