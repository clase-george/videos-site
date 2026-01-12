import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import KeyIcon from '@mui/icons-material/Key';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';

export default function LoginPage() {
    return (
        <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', boxSizing: 'border-box', background: 'linear-gradient(135deg, #ddebfaff 0%, #79abe4ff 50%, #ddebfaff 100%)'}}>
            <Card style={{display: 'flex', flexDirection: 'column', padding: "2rem", justifyContent: 'center', alignItems: 'center', borderRadius: '8px', width: '30rem', minHeight: '320px'}}>
                <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem',padding: 0, width: '100%'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                        <Box sx={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #2563eb 0%, #93c5fd 100%)', borderRadius: '50px', padding: '12px'}}>
                            <LockPersonOutlinedIcon sx={{width: 42, height: 42, color: '#ffffff'}} />
                        </Box>
                    </div>
                    <span style={{display:"flex",alignItems:"center", flexDirection:"column", marginBottom:"1rem"}}>
                        <p style={{margin:0}}>Bienvenido de nuevo</p>
                        <p style={{margin:0,color:"#64748b"}}>Inicia sesión en tu cuenta para continuar</p>
                    </span>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <TextField id="correo" placeholder="you@example.com" variant="outlined"
                            sx={{
                                width: '100%',
                                maxWidth: '30rem',
                                '& .MuiOutlinedInput-root': { borderRadius: '12px' },
                                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e6e9ee' },
                                '& .MuiInputLabel-root': { fontSize: '0.95rem' },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon sx={{ color: '#64748b', fontSize: 20 }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <TextField id="contrasena" placeholder="Enter your password" variant="outlined" type="password"
                            sx={{
                                width: '100%',
                                maxWidth: '30rem',
                                '& .MuiOutlinedInput-root': { borderRadius: '12px' },
                                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e6e9ee' },
                                '& .MuiInputLabel-root': { fontSize: '0.95rem' },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <KeyIcon sx={{ color: '#64748b', fontSize: 20 }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
}