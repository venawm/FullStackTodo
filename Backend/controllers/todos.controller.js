const pool = require('../db')

async function todosGetter (req,res){
    {
        try {
            const allTodos = await pool.query("SELECT * FROM todo")
            res.json(allTodos.rows)
            
        } catch (error) {
            console.error(error)
            
        }
    }

}

async function todosPoster (req,res){
    try {
       const {description} = req.body;
       const newTodo =await pool.query("INSERT INTO todo(description) VALUES($1)",[description]);
        res.json()
    } catch (error) {
        console.error(error);
    }
}

async function todoGetter(req,res){
    try {
       const {description} = req.body;
       const newTodo =await pool.query("INSERT INTO todo(description) VALUES($1)",[description]);
        res.json()
    } catch (error) {
        console.error(error);
    }
}

async function todosPutter(req,res){
    try {

        const {id} = req.params
        const {description} = req.body
        console.log(description)
        const uodateTodo  = await pool.query('UPDATE todo SET description = $1 WHERE t_id=$2',[description,id])
        console.log(description)

        res.json('duck')
        
    } catch (error) {
        console.log(error)
    }
}
async function todosDeleter(req,res){
    try {
        const {id} = req.params
        const deleteTodo = await pool.query('Delete FROM todo WHERE t_id = $1',[id])    
        res.json('Todo was deleted')    
    } catch (error) {
        
    }
}

module.exports = {todosGetter,todosPoster,todoGetter,todosPutter,todosDeleter}