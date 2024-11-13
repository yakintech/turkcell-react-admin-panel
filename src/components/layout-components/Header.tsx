import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


function Header() {
    return <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to={'/facibilities'}>Facibilities</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    </>
}

export default Header