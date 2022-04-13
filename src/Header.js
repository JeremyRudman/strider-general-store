import {AppBar, Typography, IconButton, Toolbar} from '@mui/material';
import {ArrowBack} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';


export default function Header() {
    const appBarStyle = {
        backgroundColor: "#FC4A1A",
        mb: 1.5,
    }

    const iconStyle = {
        color: "#FFFFFF",
        m: 0
    }
    return (
        <AppBar sx={appBarStyle} position="static">
            <Toolbar>
                <IconButton sx={iconStyle}>
                    <ArrowBack/>
                </IconButton>
                <Typography variant="h5">
                    Strider General Store
                </Typography>
            </Toolbar>
        </AppBar>
    )
}