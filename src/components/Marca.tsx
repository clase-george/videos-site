import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/material';

export default function Marca() {
    return (
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <Box sx={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #2563eb 0%, #93c5fd 100%)', borderRadius: '8px', padding: '6px'}}>
                <HomeIcon sx={{width: 36, height: 36, color: '#ffffff'}} />
            </Box>
            <span style={{fontWeight: 700, color: '#213547'}}>MyApp</span>
        </div>
    );
}
