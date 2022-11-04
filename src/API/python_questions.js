const py_name = "Python";

const py_questions = [
    {ques:"What is a correct syntax to output 'Hello World' in Python?", box1:' echo("Hello World");', box2:' p("Hello World")', box3:' echo "Hello World"', box4:' print("Hello World")', style:{display:"none"}},

    {ques:"How do you insert COMMENTS in Python code?", box1:" /*This is a comment*/", box2:" //This is a comment", box3:" #This is a comment", box4:" **This is a comment", style:{display:"none"}},

    {ques:"How do we use multiple line comment in Python?", box1:"''' '''", box2:"/* */", box3:"## ##", box4:"// \\\\"},

    {ques:"Which one is NOT a legal variable name?", box1:" Myvar", box2:"my_var", box3:"my-var", box4:"_myvar", style:{display:"none"}},

    {ques:"How do you create a variable with the numeric value 5?", box1:" Both the other answers are correct", box2:" x = int(5)", box3:"x = 5", box4:"int x = 5", style:{display:"none"}},

    {ques:"What is the correct file extension for Python files?", box1:" .pyth", box2:" .pyt", box3:" .pf", box4:" .py", style:{display:"none"}},

    {ques:"How do you create a variable with the floating number 2.8?", box1:" x = 2.8", box2:" Both the other answers are correct", box3:" x = float(2.8)", box4:"float x = 2.8", style:{display:"none"}},

    {ques:"What is the correct syntax to output the type of a variable or object in Python?", box1:" print(typeOf(x))", box2:" print(type(x))", box3:" print(typeof(x))", box4:" print(typeof x)", style:{display:"none"}},
    
    {ques:"What is the correct way to create a function in Python?", box1:" def myFunction():", box2:" function myfunction():", box3:" create myFunction():", box4:"int myfunction():", style:{display:"none"}},

    {ques:"What is a correct syntax to return the first character in a string?", box1:'x = "Hello"[0]', box2:' x = "Hello".sub(0, 1)', box3:' x = sub("Hello", 0, 1)', box4:'x = sub("Hello", [0])', style:{display:"none"}},

    {ques: "In Python, which function is used to take input?", box1: "prompt()", box2: "Input()", box3: "scanf()", box4: "cin>>"},

    {ques: "which one is a correct string slicing in Python", box1: "str.slice(0,4)", box2: "str.splice(0,4,5)", box3: "str[0,3]", box4: "str[0:3]"},

    {ques: "which one function in python is used to find length of string", box1: "str.length()", box2: "len(str)", box3: "str.length", box4: "str.size()"},

    {ques: "which one function in python is used to replace character(s) in string", box1: "change()", box2: "replace()", box3: "scale()", box4: "find()"},

    {ques: "How do you create a variable with the floating number 2.8?", box1: "x = int(2.8)", box2: "x = double(2.8)", box3: "x = long(2.8)", box4: "x = float(2.8)"},

    {ques: "Which method can be used to return a string in upper case letters?", box1: " upper()", box2: " uppercase()", box3: " toUpperCase()", box4: " upperCase()"},

    {ques: "Which operator is used to multiply numbers?", box1: "/", box2: "*", box3: "X", box4: "."},

    {ques: "Which operator can be used to compare two values?", box1: "<>", box2: "==", box3: "=", box4: "><"},

    {ques: "Which of these collections defines a LIST?", box1: ' {"apple", "banana", "cherry"}', box2: ' ("apple", "banana", "cherry")', box3: ' ["apple", "banana", "cherry"]', box4: ' {"name": "apple", "color": "green"}'},

    {ques: "Which of these collections defines a TUPLE?", box1: ' {"name": "apple", "color": "green"}', box2: ' ["apple", "banana", "cherry"]', box3: ' ("apple", "banana", "cherry")', box4: ' {"apple", "banana", "cherry"}'},

    {ques: "Which of these collections defines a SET?", box1: ' ["apple", "banana", "cherry"]', box2: ' ("apple", "banana", "cherry")', box3: ' {"name": "apple", "color": "green"}', box4: ' {"apple", "banana", "cherry"}'},

    {ques: "Which of these collections defines a DICTIONARY?", box1: ' {"apple", "banana", "cherry"}', box2: ' ["apple", "banana", "cherry"]', box3: ' {"name": "apple", "color": "green"}', box4: ' ("apple", "banana", "cherry")'},

    {ques: "Which collection is ordered, changeable, and allows duplicate members?", box1: " TUPLE", box2: " LIST", box3: " DICTIONARY", box4: " SET"},

    {ques: "How do you start writing an if statement in Python?", box1: " if x > y:", box2: " if x > y then:", box3: " if (x > y)", box4: "if(x>y){}"},

    {ques: "How do you start writing a while loop in Python?", box1: " while x > y {", box2: " while x > y:", box3: " x > y while {", box4: " while (x > y)"},
    
];

const py_ans = [2, 1, 4, 4, 1, 2, 1, 2, 4, 2, 4, 3, 2, 1, 2, 4, 3, 1, 2, 4, 1, 4, 4, 1, 3];
const qu_na_py = "Python_Quiz";

export {py_name, py_questions, py_ans, qu_na_py};

