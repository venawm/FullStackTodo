import React,{useState,useEffect} from "react";
import axios from 'axios'
import Input from "./components/input";
import List from "./components/list";


import './app.scss'
function App() {
  const [todoList,setTodoList] = useState([])
  
  
const fetcher =async()=>{
  const list = await axios.get('http://localhost:5000/todos')
  const array = list.data
  console.log(array)
  await setTodoList(array)
}
todoList.map(e=>{
  console.log(e)
})
useEffect(()=>{
  fetcher()
}, [])



  return (
    <div className="App">
      <Input></Input>
      {todoList.map(e=>{
        const tree = e
        return <List todoList={tree} todo={todoList} setTodo={setTodoList}></List>
      })}
    
      
    </div>
  );
}

export default App;
