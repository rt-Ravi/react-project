const mysql_name = "MySQL";

const mysql_questions = [
    { ques: "When MySQL was released", box1: "1992", box2: "1995", box3: "1994", box4: "1993", style: { display: "none" } },

    { ques: "Mysql is which type of language", box1: "scripting language", box2: "programming language", box3: "database language", box4: "AI Language", style: { display: "none" } },

    { ques: "The word 'Relation' in Mysql refers to ", box1: "Column", box2: "Table", box3: "Row", box4: "Cell", style: { display: "none" } },

    { ques: "The word 'Tuple' in Mysql refers to", box1: "Row", box2: "Table", box3: "Column", box4: "Cell", style: { display: "none" } },

    {
        ques: "The command in example below why is used in mysql", box1: "Insert data", box2: "Delete data", box3: "get data", box4: "Update data", style: { display: "block" },
        practical_question: "Select * from Students"
    },

    { ques: "The command in example below why is used in mysql", box1: "Use Table", box2: "Use Database", box3: "Create Database", box4: "Create Table", style: { display: "block" }, practical_question: "use database student_database" },

    { ques: "Full form of MySQL", box1: "My structured query language", box2: "structured quiz language", box3: "My standard query language", box4: "My straight query language" },

    { ques: "The word 'students' in example below refers to", box1: "Row", box2: "Table ", box3: "Column", box4: "Database" },

    { ques: "Which one command is a correct to update the table", box1: 'Update students set name="Bread" where age="20"', box2: 'Update table students set name="Bread" where age="20"', box3: 'Update students name="Bread" where age="20"', box4: 'Update students set name="Bread", age="20"' },

    { ques: "Which one command is a correct to delete the table", box1: "drop table students", box2: "drop students", box3: "delete table students", box4: "delete students" },

    { ques: "Full of CRUD", box1: "Create Read Update Delete", box2: "Create Row Update Down", box3: "Create Read Upper Down", box4: "Create Road Update Draw" },

    { ques: "How to search data in Asending order", box1: "select * from students order age", box2: "select * from students order by age ", box3: "select * from students sort by age", box4: "select * from students age sort" },

    { ques: "Which MySQL statement is used to delete data from a database?", box1: " REMOVE", box2: " DELETE", box3: " COLLAPSE", box4: "DROP" },

    { ques: "Which MYSQL statement is used to insert new data in a database?", box1: " INSERT NEW", box2: " ADD RECORD", box3: " INSERT INTO", box4: " ADD NEW" },

    { ques: "With MySQL, how do you select a column named 'FirstName' from a table named 'Persons'?", box1: " SELECT Persons.FirstName", box2: " EXTRACT FirstName FROM Persons", box3: " SELECT FirstName FROM Persons", box4: " SELECT * FirstName FROM Persons" },

    { ques: "With MySQL, how do you select all the columns from a table named 'Persons'?", box1: " SELECT Persons", box2: " SELECT * FROM Persons", box3: " SELECT *.Persons", box4: " SELECT [all] FROM Persons" },

    { ques: "With MySQL, how do you select all the records from a table named 'Persons' where the value of the column 'FirstName' starts with an 'a'?", box1: " SELECT * FROM Persons WHERE FirstName='%a%'", box2: " SELECT * FROM Persons WHERE FirstName='a'", box3: " SELECT * FROM Persons WHERE FirstName LIKE '%a'", box4: " SELECT * FROM Persons WHERE FirstName LIKE 'a%'" },

    { ques: "With MySQL, how do you select all the records from a table named 'Persons' where the 'FirstName' is 'Peter' and the 'LastName' is 'Jackson'?", box1: " SELECT * FROM Persons WHERE FirstName<>'Peter' AND LastName<>'Jackson'", box2: " SELECT * FROM Persons WHERE FirstName='Peter' AND LastName='Jackson'", box3: " SELECT FirstName='Peter', LastName='Jackson' FROM Persons", box4: "SELECT * FROM Persons WHERE FirstName='Peter' && LastName='Jackson'" },

    { ques: "With MySQL, how do you select all the records from a table named 'Persons' where the 'LastName' is alphabetically between (and including) 'Hansen' and 'Pettersen'?", box1: " SELECT * FROM Persons WHERE LastName>'Hansen' AND LastName<'Pettersen'", box2: " SELECT * FROM Persons WHERE LastName BETWEEN 'Hansen' AND 'Pettersen'", box3: " SELECT LastName>'Hansen' AND LastName<'Pettersen' FROM Persons", box4: " SELECT LastName < 'Hansen' AND LastName > 'Pettersen' FROM Persons" },

    { ques: "Which MySQL statement is used to return only different values?", box1: " SELECT DIFFERENT", box2: " SELECT DISTINCT", box3: " SELECT UNIQUE", box4: " SELECT SPECIAL" },

    { ques: "Which MySQL keyword is used to sort the result-set?", box1: " SORT BY", box2: " SORT", box3: " ORDER", box4: " ORDER BY" },

    { ques: "With MySQL, how can you return all the records from a table named 'Persons' sorted descending by 'FirstName'?", box1: " SELECT * FROM Persons ORDER FirstName DESC", box2: " SELECT * FROM Persons ORDER BY FirstName DESC", box3: " SELECT * FROM Persons SORT BY 'FirstName' DESC", box4: " SELECT * FROM Persons SORT 'FirstName' DESC" },

    { ques: "With MySQL, how can you insert a new record into the 'Persons' table?", box1: " INSERT ('Jimmy', 'Jackson') INTO Persons", box2: " INSERT VALUES ('Jimmy', 'Jackson') INTO Persons", box3: " INSERT INTO Persons VALUES ('Jimmy', 'Jackson')", box4: " INSERT INTO Persons (First_Name, Last_Name) VALUES ('Jimmy', 'Jackson')" },

    { ques: "How can you change 'Hansen' into 'Nilsen' in the 'LastName' column in the Persons table?", box1: " UPDATE Persons SET LastName='Hansen' INTO LastName='Nilsen'", box2: " UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'", box3: " MODIFY Persons SET LastName='Hansen' INTO LastName='Nilsen", box4: " MODIFY Persons SET LastName='Nilsen' WHERE LastName='Hansen'" },

    { ques: "With MySQL, how can you delete the records where the 'FirstName' is 'Peter' in the Persons Table?", box1: " DELETE FROM Persons WHERE FirstName = 'Peter'", box2: " DELETE FirstName='Peter' FROM Persons", box3: " DELETE ROW FirstName='Peter' FROM Persons", box4: " DELETE FirstName='Peter' FROM Persons" },

];

const mysql_ans = [2, 1, 4, 4, 1, 2, 1, 2, 4, 2, 4, 3, 2, 1, 2, 4, 3, 1, 2, 4, 1, 4, 4, 1, 3];
const qu_na_mysql = "Java_Quiz";

export { mysql_name, mysql_questions, mysql_ans, qu_na_mysql };

