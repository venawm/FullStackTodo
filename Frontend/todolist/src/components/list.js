import React from 'react';
import './list.scss'

function List(tree){
    console.log(tree.todoList.description)

    
    return (
    <div className="main">
        <div className='list'>
            <h1>{tree.todoList.description}</h1>
            <div className="protect">
                <input type='image' src='https://www.svgrepo.com/show/130377/pencil.svg'/>
                <button  className='delete'><img src="https://freesvg.org/img/trash.png" alt="" /></button>

            </div>
           
            
        </div>
    </div>
    );
};

export default List;