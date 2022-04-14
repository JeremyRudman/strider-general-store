import {AppBar, Typography, IconButton, Toolbar} from '@mui/material';
import {ArrowBack} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';




export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const onBackClick = () => {
        navigate('/')
    }

    const appBarStyle = {
        backgroundColor: "#FC4A1A",
        mb: 2,
    }

    const iconStyle = {
        color: "#FFFFFF",
        mr: 1,
    }

    // if the route is not on the home page a back button is added to the header
    const iconDisplayed = () =>{
        if(location.pathname !== '/'){
            return(
                <IconButton sx={iconStyle} onClick={onBackClick}>
                    <ArrowBack/>
                </IconButton>
            )
        }
    }

    return (
        <AppBar sx={appBarStyle} position="static">
            <Toolbar>
                {iconDisplayed()}
                <Typography variant="h5">
                    Strider General Store
                </Typography>
            </Toolbar>
        </AppBar>
    )
}