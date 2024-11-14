import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { AuthContextType } from '../../context/AuthContext';


function Header() {

    const { logout } = useContext(AuthContext) as AuthContextType

    return <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to={'/facibilities'}>Facibilities</Link>
                </Typography>
            <Button onClick={logout} variant="contained" color="error">Logout</Button>

            </Toolbar>
        </AppBar>
    </>
}

export default Header