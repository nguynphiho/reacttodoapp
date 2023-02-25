import React from 'react';
import { Button, Input, Spin } from 'antd';
import styles from './todoapp.module.css';
import TodoItem from '../TodoItem/TodoItem';
import clsx from 'clsx';


const data = [
    {
        id: 1,
        title: "Do homework",
        status: "COMPLETED"
    },

    {
        id: 2,
        title: "abc",
        status: "ACTIVE"
    },

    {
        id: 3,
        title: "xyz",
        status: "PENDING"
    },
    
]
const TodoApp = (props) => {
    const [todos, setTodos] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(()=>{
        getAllTodos();
    },[]);
    
    const deleteTodo = (id) => {
        const newData = todos.filter(item => item.id !== id);
        //api/todo/delete/:id
        setTodos(newData);
    }

    const getAllTodos = () => {
        setTimeout(() => {
            setTodos(data);
            setIsLoading(false)
        }, 2000)
    }

    return (
        <div className={styles.todoAppContainer}>
            <h1>{props.title}</h1>
            <Input size="large" placeholder="Type your todo" suffix={<Button> Add </Button>} />

            <div className={clsx(
                    styles.todoItemAppContainer,
                    {
                        [styles.isCenter]: isLoading
                    }
                )}>
                {
                    isLoading
                    ? <Spin tip="Loading" />  
                    : <TodoItem todos={todos} onDeleteTodo={(id) => {deleteTodo(id)}}/>
                }
            </div>
           
        </div>
    );
};


export default TodoApp;
