import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data.map(todo => ({ ...todo, dueDate: new Date(todo.dueDate) }));
}

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const removeTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(t => t.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(prevTodos => prevTodos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const addTodo = ({ text, dueDate }) => {
        setTodos(prevTodos => [
            ...prevTodos,
            { text, id: crypto.randomUUID(), completed: false, dueDate }
        ]);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)", // Page background gradient
                padding: 2
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: 480,
                    backgroundColor: "#ffffffcc", // Semi-transparent background
                    borderRadius: 4,
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    padding: 4,
                }}
            >
                <Typography variant="h2" component="h1" sx={{
                    fontSize: '2.5rem',
                    color: '#3f51b5',
                    marginBottom: 2,
                    fontWeight: 700
                }}>
                    Todos
                </Typography>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {todos.map((todo) => (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            remove={removeTodo}
                            toggle={() => toggleTodo(todo.id)}
                        />
                    ))}
                    <TodoForm addTodo={addTodo} />
                </List>
            </Box>
        </Box>
    );
}
