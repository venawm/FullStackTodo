import React,{useState} from 'react';
import axios from 'axios'
import './input.scss'

function Input(){
    const[description,setDescription] = useState('')
    const formHandler = async (e)=>{
        if(description!==''){
        try {
  
            const response  =fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ description })
              })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error))
              
            console.log(response)
            
        } catch (error) {
            
        }}
        else{
            alert('Error enter a valid value')
        }
        console.log(description)
        e.preventDefault();
    }

    return (
        <div className='input'>
            <div className="inputComponents">
                <h1>Full-Stack Todo List App</h1>
                <form onSubmit={formHandler}>
                    <input type="text"  className='inputFeild' value={description} onChange={e=>{
                        setDescription(e.target.value)
                    }}/>
                    <button>Add</button>
                </form>
            </div>
            
        </div>
    );
};

export default Input;