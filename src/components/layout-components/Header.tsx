import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { AuthContextType } from '../../context/AuthContext';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';


function Header() {

    const { logout } = useContext(AuthContext) as AuthContextType

    let dispatch = useDispatch()

    const { t, i18n } = useTranslation()


    const userLogout = () => {
        logout()
        dispatch({ type: 'auth/logout' })
    }

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        localStorage.setItem('language', lng)
    }


    const getDefaultLanguage = () => {
        let lang = localStorage.getItem('language')
        if (lang) {
            console.log("lang", lang)
            return lang
        }
        return 'en'
    }

    return <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to={'/facibilities'}>{t("facibilities")}</Link>

                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to={'/adminusers'}>{t("adminUsers")}</Link>
                </Typography>

                <select style={{ marginRight: 40 }} onChange={(e) => changeLanguage(e.target.value)} defaultValue={getDefaultLanguage()}>
                    <option value="en">EN</option>
                    <option value="tr">TR</option>
                </select>
                <Button onClick={() => userLogout()} variant="contained" color="error">{t("logout")}</Button>

            </Toolbar>
        </AppBar>
    </>
}

export default Header