import axios from 'axios';
import React,{useState} from 'react';
import Modal from './modal';
import './list.scss'

function List(tree){
    const[modalOpen,setModalOpen] = useState(false)
    
    const id = tree.todoList.t_id
    console.log(id)
    
   
    function deleteTodo(e){
        try {
            const id = tree.todoList.t_id
            console.log(id)
             axios.delete(`http://localhost:5000/todos/${id}`).then(()=>{
                window.location.reload()
             })
            
        } catch (error) {
            console.log(error)
        }

    }

    const editTodo = ()=>{
        setModalOpen(true)
        
    }
    
    return (
    <div className="main">
       {modalOpen&& <Modal id={id} closeModal={setModalOpen}/>}
       <div>
            <div className='list'>
                <h1>{tree.todoList.description}</h1>
                <div className="protect">
                    
                    <input  onClick={editTodo} width={'40px'} type='image' src='https://www.svgrepo.com/show/130377/pencil.svg'/>
                    <button  className='delete' onClick={deleteTodo}><img src="https://freesvg.org/img/trash.png" alt="" /></button>

                </div>
            
                </div>  
        </div>
    </div>
    );
};

export default List;