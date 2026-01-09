import { IconButton, Badge, Button } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Logout } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

export default function NavBar() {
    return (
        <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem', borderBottom: '1px solid #eaeaea', width: '100%', boxSizing: 'border-box', maxWidth: '100%'}}>
            {/* Izquierda: logo + nombre */}
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <HomeIcon style={{width: 36, height: 36}} />
                <span style={{fontWeight: 700}}>MyApp</span>
            </div>

            {/* Centro: secciones (MUI Buttons con hover inline) */}
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <Button color="inherit" href="#" sx={{textTransform: 'none', padding: '0.25rem 0.5rem', '&:hover': {backgroundColor: 'rgba(255,255,255,0.03)', color: '#646cff'}}}>Home</Button>
                <Button color="inherit" href="#" sx={{textTransform: 'none', padding: '0.25rem 0.5rem', '&:hover': {backgroundColor: 'rgba(255,255,255,0.03)', color: '#646cff'}}}>Explore</Button>
                <Button color="inherit" href="#" sx={{textTransform: 'none', padding: '0.25rem 0.5rem', '&:hover': {backgroundColor: 'rgba(255,255,255,0.03)', color: '#646cff'}}}>About</Button>
            </div>

            {/* Derecha: espacio para más cosas (agrupados) */}
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.15rem', borderRadius: 8, background: 'rgba(255,255,255,0.03)'}}>
                    <IconButton aria-label="notifications" color="inherit" size="large" sx={{'&:hover': {color: '#646cff'}}}>
                        <Badge variant="dot" color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.12rem'}}>
                        <IconButton aria-label="account" color="inherit" size="large" style={{padding: 2}} sx={{'&:hover': {color: '#646cff'}}}>
                            <AccountCircleIcon style={{fontSize: 28}} />
                        </IconButton>
                        <Button variant="text" color="inherit" size="small" style={{padding: '0.15rem 0.35rem', textTransform: 'none', minWidth: 'auto'}} sx={{'&:hover': {color: '#646cff'}}}>User</Button>
                    </div>
                    <Button variant="text" color="inherit" startIcon={<Logout />} href="/login" size="small" style={{padding: '0.25rem 0.5rem', textTransform: 'none'}} sx={{'&:hover': {backgroundColor: 'rgba(255,255,255,0.04)'}}}>Cerrar Sesion</Button>
                </div>
            </div>
        </nav>
    );
}
