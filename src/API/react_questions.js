const react_name = "React";

const react_questions = [

    {ques:"who is a developer of react", box1:"Jordan Walke", box2:"Ryan Dahl", box3:"Adam Wathan", box4:"Brendan Eich", style:{display:"none"}},

    {ques:"when was react developed", box1:"1 June 2012", box2:"29 May 2013", box3:"29 April 2013", box4:"10 May 2015", style:{display:"none"}},

    {ques:"What is the correct command to create a new React App or project?", box1:" npx create-react-app", box2:" npx create-react-app myReactApp", box3:" npm create-react-app", box4:" npm create-react-app myReactApp", style:{display:"none"}},

    {ques:"What does ReactApp refer to in the following command? 'npx create-react-app ReactApp' ", box1:" The name you want to use for the new app", box2:" The type of app to create", box3:" The directory to create the new app in", box4:" A reference to an existing app", style:{display:"none"}},

    {ques:"What command is used to start the React local development server?", box1:" npm serve", box2:" npm start", box3:" npm run dev", box4:" npm build", style:{display:"none"}},

    {ques:"What is the default local host port that a React development server uses?", box1:"3200", box2:"3000", box3:"4000", box4:"2000", style:{display:"none"}},

    {ques:"What is the children prop?", box1:" A property that lets you nest components in other components", box2:" A property that adds child values to state", box3:" A property that lets you pass data to child components", box4:" A property that lets you set an object as a property", style:{display:"none"}},

    {ques:"Which keyword creates a constant in JavaScript?", box1:"var", box2:"const", box3:"constant", box4:"let", style:{display:"none"}},

    {ques:"A copy of the 'real' DOM that is kept in memory is called what?", box1:" DOM", box2:" React DOM", box3:" Shadow DOM", box4:" Virtual DOM", style:{display:"none"}},

    {ques:"React component names must begin with an", box1:"Uppercase letter", box2:"Lowercase letter", box3:"Number", box4:"All of the above", style:{display:"none"}},

    {ques:"Which operator can be used to conditionally render a React component?", box1:"::", box2:"||", box3:"??", box4:"&&", style:{display:"none"}},

    {ques:"When rendering a list using the JavaScript map() method, what is required for each element rendered?", box1:"Key", box2:"Data", box3:"Index", box4:"Id", style:{display:"none"}},

    {ques:"What tool does React use to compile JSX?", box1:"Babel", box2:"ReactDOM", box3:"React Router", box4:"JSX Compiler", style:{display:"none"}},

    {ques:"How can you optimze performance for a function component that always renders the same way?", box1:" Use the useReducer Hook.", box2:" Use the useMemo Hook.", box3:" Wrap it in the React.memo higher-order component.", box4:" Wrap it in the React.memo higher-order component.", style:{display:"none"}},

    {ques:"What props will be available to the following component? <Car {...props} /> ", box1:" all of them", box2:" only static ones", box3:" only updated ones", box4:" children", style:{display:"none"}},

    {ques:"What is a common use case for ref?", box1:" To refer to another JavaScript file", box2:" To directly access a DOM node", box3:" To bind the function", box4:" To refer to a function", style:{display:"none"}},

    {ques:"What is the correct syntax to import a Component from React?", box1:" import React.Component from 'react'", box2:" import [ Component ] from 'react'", box3:" import { Component } from 'react'", box4:" import Component from 'react'", style:{display:"none"}},

    {ques:"React separates the user interface into components. How are components combinded to create a user interface?", box1:" By nesting components", box2:" With code splitting", box3:" By putting them in a folder structure", box4:" With webpack", style:{display:"none"}},

    {ques:"Which of the following is NOT a rule for React Hooks?", box1:" Hooks can only be called inside React Function components", box2:" Hooks can only be called at the top level of a component", box3:" Hooks cannot be conditional", box4:" Hooks can be called in Class or Function components", style:{display:"none"}},

    {ques:"Why should you avoid copying the values of props into a component's state?", box1:" Because you want to allow data to flow back up to the parent", box2:" Because that would create two instances of the same state that could become out of sync", box3:" Because prop values cannot be stored in state", box4:" Because you should never mutate state", style:{display:"none"}},

    {ques:"how to export component with default way", box1:"export {Component_name}", box2:"export default{Component_name}", box3:"export D {Component_name}", box4:"export default Component_name", style:{display:"none"}},

    {ques:"how to import component with named way", box1:"import {Component_name}", box2:"import default{Component_name}", box3:"import I {Component_name}", box4:"import default Component_name", style:{display:"none"}},

    {ques:"how to import component with named way", box1:"import {Component_name}", box2:"import default{Component_name}", box3:"import I {Component_name}", box4:"import default Component_name", style:{display:"none"}},

    {ques:"can we render React App directly in <body> tag in html", box1:"true", box2:"false", box3:"", box4:"", style:{display:"none"}},

    {ques:"which is a correct command to install react-router-dom in react project", box1:"npm i router", box2:"npx i react-router", box3:"npx install react-router", box4:"npm install react-router-dom", style:{display:"none"}},

];

const react_ans = [1, 2, 2, 1, 2, 2, 3, 2, 4, 1, 4, 1, 1, 2, 1, 4, 3, 1, 2, 4, 2, 2, 2, 2, 4];
const qu_na_react = "React_Quiz";

export {react_name, react_questions, react_ans, qu_na_react};

