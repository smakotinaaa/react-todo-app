import React, {useState} from 'react'
import TodoForm from "./TodoForm";
import Todo from "./Todo";
function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
        console.log(...todos);
    };

    const updateToDo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }
    const removeToDo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    };

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete =! todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }
    return (
        <div>
        <h1>Today Plan 📋</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeToDo={removeToDo}
                updateToDo={updateToDo}
            />
        </div>
    )
}

export default TodoList
