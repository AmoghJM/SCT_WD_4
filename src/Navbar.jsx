import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListAltIcon from '@mui/icons-material/ListAlt';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <ListAltIcon size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}