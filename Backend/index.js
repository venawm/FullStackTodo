const express = require('express');
const app = express();
const PORT  = 5000;
const cors  =require('cors')
const pool = require('./db.js')

// middleware
app.use(cors());
app.use(express.json());



app.listen(PORT,()=>{
    console.log(`Server has started on port  ${PORT}`)
})


// Post Todos
app.post('/todos',async(req,res)=>{
    try {
       const {description} = req.body;
       const newTodo =await pool.query("INSERT INTO todo(description) VALUES($1)",[description]);
        res.json()
    } catch (error) {
        console.error(error);
    }
});

// Get all todos 
app.get('/todos',async(req,res)=>{
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)
        
    } catch (error) {
        console.error(error)
        
    }


// Get Specific todos
app.get('/todos/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const todo = await pool.query(`SELECT * FROM todo WHERE t_id = $1`,[id]);
        res.json(todo.rows[0])
            
        } catch (error) {
            console.error(error)
            
        }
    })
})


// Update Todos
app.put('/todos/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const {description} = req.body
        const uodateTodo  = await pool.query('UPDATE todo SET description = $1 WHERE t_id=$2',[description,id])

        res.json('duck')
        
    } catch (error) {
        console.log(error)
    }
})

// Delete Todos

app.delete('/todos/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const deleteTodo = await pool.query('Delete FROM todo WHERE t_id = $1',[id])    
        res.json('Todo was deleted')    
    } catch (error) {
        
    }
})