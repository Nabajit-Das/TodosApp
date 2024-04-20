import './App.css';
import Header from './MyComponents/Header'
import Footer from './MyComponents/Footer'
import Todos from './MyComponents/Todos'
import About from './MyComponents/About'
import AddItem from './MyComponents/addItem';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log("I am deleting todo : ", todo)
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this : ", title, " : ", desc)
    let sno = todos.length + 1
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, newTodo])
    console.log(newTodo)
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <Router>
      <Header title="Todo App" />
      <Routes>
      <Route path="/" element={<><AddItem addTodo={addTodo}/><Todos todos={todos} onDelete={onDelete}/></>} />
        <Route path="/about" element={<About />} />
      </Routes>


      <Footer />
    </Router>
  );
}

export default App;
