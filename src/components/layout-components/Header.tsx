import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function Header() {
    return <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Home
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    About
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Contact
                </Typography>
            </Toolbar>
        </AppBar>
    </>
}

export default Header