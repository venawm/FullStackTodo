import React,{useState} from 'react';
import axios from 'axios'
import './input.scss'

function Input(){
    const[description,setDescription] = useState('')
    const formHandler = async (e)=>{
        if(description!=''){
        try {
            const body = {description}
            const response  =axios.post('http://localhost:5000/todos',{description})
            console.log(response)
            
        } catch (error) {
            
        }}
        else{
            alert('Error enter a valid value')
        }

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