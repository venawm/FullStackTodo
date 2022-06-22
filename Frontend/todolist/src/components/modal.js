import React,{useState} from 'react';
import axios from 'axios'
import './modal.scss'
function Modal({closeModal,id}){
    const [description,setEdit] = useState('')
    
    const submitHandler =async()=>{
        console.log(description)
        console.log(id)
        await axios.put(`http://localhost:5000/todos/${id}`,{description}).then(()=>{
            window.location.reload()
        })
       
        

    }

    console.log(id)
    return (
        
            <div className='modal'>
                <div className="button"><button onClick={()=>{
                    closeModal(false)
                }}>X</button></div>
                
                <h1>Edit Todo</h1>
                <form action="" onSubmit={submitHandler} className="edit">
                    <div className="text">
                        <input type="text"  value={description} onChange={(e)=>{
                            setEdit(e.target.value)
                        }} />
                    </div>
                   
                </form>
                <div className="button hell">
                        <button onClick={submitHandler} className='submit'>Edit</button>
                        <button className='cancle'  onClick={()=>{
                    closeModal(false)
                }}>Cancle</button>
                    </div>
                
            </div>
    );
};

export default Modal;