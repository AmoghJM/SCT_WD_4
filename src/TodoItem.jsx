import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

export default function TodoItem({ todo, remove, toggle }) {
    const labelId = `checkbox-list-label-${todo.id}`;
    const removeTodo = () => {
        remove(todo.id);
    };

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={removeTodo}>
                    <DeleteSweepIcon sx={{ fontSize: 36 }} /> {/* Increased icon size */}
                </IconButton>
            }
            disablePadding
            sx={{ padding: 3 }} // Increased padding for more space
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={toggle}
                        sx={{ '&.Mui-checked': { color: '#3f51b5' }, fontSize: '2rem' }} // Increased checkbox size
                    />
                </ListItemIcon>
                <ListItemText
                    id={labelId}
                    primary={todo.text}
                    secondary={`Due: ${todo.dueDate.toLocaleString()}`}
                    sx={{
                        fontSize: '1.6rem', // Standardized font size for both primary and secondary text
                        '& .MuiTypography-root': {
                            fontSize: '1.4rem', // Secondary text font size
                            color: '#6b6b6b'  // Optional: Adjust secondary color for clarity
                        }
                    }}
                />
            </ListItemButton>
        </ListItem>
    );
}
