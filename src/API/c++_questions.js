const cpp_name = "C++";

const cpp_questions = [
    { ques: 'What is a correct syntax to output "Hello World" in C++?', box1: ' Console.WriteLine("Hello World");', box2: ' cout << "Hello World";', box3: ' print ("Hello World");', box4: ' System.out.println("Hello World");' },

    { ques: 'How do you insert single line COMMENT in C++ code?', box1: '//', box2: '##', box3: '/*', box4: '\'\'\'' },

    { ques: 'How do you insert multiple line COMMENT in C++ code?', box1: '//', box2: '##', box3: '/*', box4: '\'\'\'' },

    { ques: 'Which data type is used to create a variable that should store text?', box1: ' Txt', box2: ' string', box3: ' String', box4: ' myString' },

    { ques: 'How do you create a variable with  value 5.67?', box1: ' num x = 5.67', box2: ' x = 5.67;', box3: ' int x = 5.67;', box4: ' double x = 5.67;' },

    { ques: 'Which method can be used to find the length of a string?', box1: ' length()', box2: ' len()', box3: ' getSize()', box4: ' getLength()' },

    { ques: 'Which operator is used to add together two values?', box1: ' The * sign', box2: ' The + sign', box3: ' The & sign', box4: ' The / sign' },

    { ques: 'Which one inside character is written in c++?', box1: '\' \'', box2: '" "', box3: '< >', box4: '[ ]' },

    { ques: 'Which header file lets us work with input and output objects in c++?', box1: ' #include <stdio.h>', box2: ' #include <iostream>', box3: '#include <iosstring>', box4: ' #include <inputstr>' },

    { ques: 'Which operator can be used to compare two values?', box1: ' <>', box2: ' ><', box3: ' =', box4: ' ==' },

    { ques: 'To declare an array in C++, define the variable type with:', box1: ' ()', box2: '[]', box3: '{}', box4: '<>' },

    { ques: 'What is a class name in the following example?', box1: 'Student', box2: 'College', box3: 'School', box4: 'Std', practical_question: "class School{ //statements }" },

    { ques: 'which one is a correct way to create class object in c++ on the basis of following example?', box1: ' School obj = new School();', box2: 'School obj = School();', box3: 'School > obj', box4: 'School obj;', practical_question: "class School{ //statements }" },

    { ques: 'In which header file has String functions?', box1: '#include<string.h>', box2: '#include<inputs.str>', box3: '#include <iosstring>', box4: '#include <conio.h>' },

    { ques: 'which one is a keywords?', box1: 'std', box2: 'school', box3: 'public', box4: 'like' },

    { ques: 'which one is a correct way to inherite a class in c++?', box1: 'class Child extends Parent', box2: 'class : Parent', box3: 'class Child :: Parent', box4: 'class Child > Parent' },

    { ques: 'How many types of inheritance in c++?', box1: 'Five types', box2: 'Four types', box3: 'Three types', box4: 'Two types' },

    { ques: 'Which keyword is used to take input in c++?', box1: 'cout', box2: 'cin', box3: 'get', box4: 'put' },

    { ques: 'How many types of overloading in c++', box1: 'Five types', box2: 'Four types', box3: 'Three types', box4: 'Two types' },

    { ques: 'Which is a correct syntax for operator overloading in c++?', box1: 'Class_name operator *+/%(arguments){}', box2: 'Class_name *+/%(arguments){}', box3: 'Class_name operator new *+/%(arguments){}', box4: ' operator new *+/%(arguments){}' },

    { ques: 'How do you create a function in C++?', box1: ' functionName()', box2: ' (functionName)', box3: ' functionName[]', box4: ' functionName.' },

    { ques: 'How do you call a function in C++?', box1: ' functionName[];', box2: ' functionName();', box3: ' (functionName);', box4: ' functionName;' },

    { ques: 'Which method can be used to find the highest value of x and y?', box1: ' maxNum(x,y)', box2: ' largest(x,y)', box3: ' maximum(x,y)', box4: ' max(x,y)' },

    { ques: 'Which operator is used to multiply numbers?', box1: '/', box2: '*', box3: '-', box4: '%' },

    { ques: 'How do you create a reference variable of an existing variable?', box1: ' With the REF word', box2: ' With the & operator', box3: ' With the ref word', box4: ' With the * operator' },

];

const cpp_ans = [2, 1, 4, 4, 1, 2, 1, 2, 4, 2, 4, 3, 2, 1, 2, 4, 3, 1, 2, 4, 1, 4, 4, 1, 3];
const qu_na_cpp = "Java_Quiz";

export { cpp_name, cpp_questions, cpp_ans, qu_na_cpp };

