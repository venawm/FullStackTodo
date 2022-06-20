import React from 'react';
import './input.scss'

function Input(){
    return (
        <div className='input'>
            <div className="inputComponents">
                <h1>Full-Stack Todo List App</h1>
                <form>
                    <input type="text"  className='inputFeild'/>
                    <button>Add</button>
                </form>
            </div>
            
        </div>
    );
};

export default Input;