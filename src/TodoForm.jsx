import { IconButton, TextField, ListItem, Box, InputAdornment } from "@mui/material";
import { useState } from "react";
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Create from "@mui/icons-material/Create";

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");
    const [dueDate, setDueDate] = useState(null);
    const [dueTime, setDueTime] = useState(null);

    const handleChange = (evt) => {
        setText(evt.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text && dueDate && dueTime) {
            const dueDateTime = new Date(dueDate);
            dueDateTime.setHours(dueTime.getHours(), dueTime.getMinutes());
            addTodo({ text, dueDate: dueDateTime });
            setText("");
            setDueDate(null);
            setDueTime(null);
        }
    };

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        width="100%"
                        sx={{
                            backgroundColor: '#e0f7fa',
                            padding: 4, // Increased padding
                            borderRadius: 2,
                        }}
                    >
                        <TextField
                            id="outlined-basic"
                            label="Add todo"
                            variant="outlined"
                            onChange={handleChange}
                            value={text}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="create todo" edge="end" type="submit">
                                            <Create sx={{ fontSize: 36 }} /> {/* Larger icon size */}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ mb: 3, fontSize: '1.4rem', input: { fontSize: '1.4rem' } }} // Increased font size
                        />
                        <DatePicker
                            label="Due Date"
                            value={dueDate}
                            onChange={(newValue) => setDueDate(newValue)}
                            renderInput={(params) => (
                                <TextField {...params} sx={{ mb: 3, fontSize: '1.4rem', input: { fontSize: '1.4rem' } }} />
                            )}
                            sx={{ mb: 2 }}
                        />
                        <TimePicker
                            label="Due Time"
                            value={dueTime}
                            onChange={(newValue) => setDueTime(newValue)}
                            renderInput={(params) => (
                                <TextField {...params} sx={{ mb: 3, fontSize: '1.4rem', input: { fontSize: '1.4rem' } }} />
                            )}
                        />
                    </Box>
                </LocalizationProvider>
            </form>
        </ListItem>
    );
}
