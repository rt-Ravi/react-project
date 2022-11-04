import {name, questions, java_ans, qu_na_ja} from "./API/java_question";
import {c_name, c_questions, c_ans, qu_na_c} from "./API/c_questions";
import {js_name, javascript_questions, javascript_ans, qu_na_js} from "./API/javascript_questions";
import {py_name, py_questions, py_ans, qu_na_py} from "./API/python_questions";
import { react_name, react_questions, react_ans, qu_na_react} from "./API/react_questions";
import {mysql_name, mysql_questions, mysql_ans, qu_na_mysql} from "./API/mysql_questions";
import {cpp_name, cpp_questions, cpp_ans, qu_na_cpp} from "./API/c++_questions";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Java from "./pages/Java";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/java-quiz" element={<Java ques={questions} quiz_name={qu_na_ja} ans={java_ans} lan_name={name}/>}/>
            <Route path="/c-quiz" element={<Java ques={c_questions} quiz_name={qu_na_c} ans={c_ans} lan_name={c_name} />}/>
            <Route path="/javascript-quiz" element={<Java ques={javascript_questions} quiz_name={qu_na_js} ans={javascript_ans} lan_name={js_name} practical_box_style={{display:"none"}}/>}/>
            <Route path="/python-quiz" element={<Java ques={py_questions} quiz_name={qu_na_py} ans={py_ans} lan_name={py_name}/>}/>
            <Route path="/react-quiz" element={<Java ques={react_questions} quiz_name={qu_na_react} ans={react_ans} lan_name={react_name}/>}/>
            <Route path="/mysql-quiz" element={<Java ques={mysql_questions} quiz_name={qu_na_mysql} ans={mysql_ans} lan_name={mysql_name}/>}/>
            <Route path="/cpp-quiz" element={<Java ques={cpp_questions} quiz_name={qu_na_cpp} ans={cpp_ans} lan_name={cpp_name}/>}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;
