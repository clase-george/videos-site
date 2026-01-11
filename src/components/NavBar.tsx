import { IconButton, Badge, Button } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Logout } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Marca from './Marca';

export default function NavBar() {
    return (
        <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem', borderBottom: '1px solid #eaeaea', width: '100%', boxSizing: 'border-box', maxWidth: '100%', background: '#ffffff', color: '#213547'}}>
            {/* Izquierda: logo + nombre */}
            <Marca />

            {/* Centro: secciones (MUI Buttons con hover inline) */}
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <Button color="inherit" href="#" sx={{textTransform: 'none', padding: '0.25rem 0.5rem', '&:hover': {backgroundColor: 'rgba(0,0,0,0.04)', color: '#646cff'}}}>Home</Button>
                <Button color="inherit" href="#" sx={{textTransform: 'none', padding: '0.25rem 0.5rem', '&:hover': {backgroundColor: 'rgba(0,0,0,0.04)', color: '#646cff'}}}>Explore</Button>
                <Button color="inherit" href="#" sx={{textTransform: 'none', padding: '0.25rem 0.5rem', '&:hover': {backgroundColor: 'rgba(0,0,0,0.04)', color: '#646cff'}}}>About</Button>
            </div>

            {/* Derecha: espacio para más cosas (agrupados) */}
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.15rem', borderRadius: 8}}>
                    <IconButton aria-label="notifications" color="inherit" size="large" sx={{'&:hover': {color: '#646cff'}}}>
                        <Badge variant="dot" color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.12rem'}}>
                        <IconButton aria-label="account" size="large" style={{padding: 2, color: '#646cff'}} sx={{'&:hover': {color: '#1019c3ff'}}}>
                            <AccountCircleIcon style={{fontSize: 28}} />
                        </IconButton>
                        <Button variant="text" color="inherit" size="small" style={{padding: '0.15rem 0.35rem', textTransform: 'none', minWidth: 'auto'}} sx={{'&:hover': {color: '#646cff'}}}>User</Button>
                    </div>
                    <Button variant="text" color="inherit" startIcon={<Logout />} href="/login" size="small" style={{padding: '0.25rem 0.5rem', textTransform: 'none'}} sx={{'&:hover': {backgroundColor: 'rgba(0,0,0,0.06)'}}}>Cerrar Sesion</Button>
                </div>
            </div>
        </nav>
    );
}
