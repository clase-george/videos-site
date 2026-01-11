import { Button, Card, Chip, Stack, IconButton } from "@mui/material";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { videosMock } from '../data/VideosMock';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState } from 'react';
export default function Home() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div style={{padding: '1rem'}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "2rem", width: '100%', boxSizing: 'border-box'}}>
                <div style={{textAlign: 'left', marginTop: '2rem', flex: 1}}>
                    <h3 style={{fontSize: '1.9rem', margin: 0}}>Bienvenido a tu Dashboard</h3>
                    <p style={{fontSize: '1.15rem', marginTop: '0.5rem', color: '#767676ff'}}>Explora nuestro contenido multimedia y comienza a aprender hoy mismo</p>
                </div>
                    <div style={{marginLeft: '1rem'}}>
                        <Button variant="contained" color="primary" startIcon={<CloudUploadOutlinedIcon />}>
                            Subir video
                        </Button>
                    </div>

                    
            </div>
            <div style={{padding:"2rem"}}>
                <Stack direction="row" spacing={1}>
                    <Chip label="Todos" color="primary" variant="filled" clickable style={{fontSize:"1rem", padding:"1.15rem"}}/>
                    <Chip label="Programacion" variant="outlined" clickable style={{fontSize:"1rem", padding:"1.15rem"}}/>
                    <Chip label="Diseño" variant="outlined" clickable style={{fontSize:"1rem", padding:"1.15rem"}}/>
                    <Chip label="Marketing" variant="outlined" clickable style={{fontSize:"1rem", padding:"1.15rem"}}/>
                    <Chip label="Fotografía" variant="outlined" clickable style={{fontSize:"1rem", padding:"1.15rem"}}/>
                    <Chip label="Productividad" variant="outlined" clickable style={{fontSize:"1rem", padding:"1.15rem"}}/>
                </Stack>
            </div>
            <div style={{padding: '2rem'}}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem'}}>
                    {videosMock.map((video, i) => (
                        <Card
                            key={i}
                            className="video-card"
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            style={{padding: 0, overflow: 'hidden', borderRadius: '8px', boxShadow: hovered === i ? '0 4px 16px rgba(0, 0, 0, 0.2)' : '0 2px 8px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 200ms ease-in-out'}}
                        >
                            <div style={{position: 'relative', width: '100%', height: 140, overflow: 'hidden'}}>
                                <img src={video.imagenUrl} alt={video.titulo} style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#ffffff',
                                    background: 'rgba(0,0,0,0.45)',
                                    opacity: hovered === i ? 1 : 0,
                                    transition: 'opacity 180ms ease-in-out',
                                    fontWeight: 600,
                                    pointerEvents: 'none'
                                }}>
                                    Ver estadísticas
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    right: 8,
                                    bottom: 8,
                                    background: 'rgba(0,0,0,0.7)',
                                    color: '#fff',
                                    padding: '2px 6px',
                                    borderRadius: 4,
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                    zIndex: 3,
                                    pointerEvents: 'none'
                                }}>{video.duracion}</div>
                            </div>
                            <div style={{padding: '0.5rem'}}>
                                <Chip
                                    label={video.etiqueta}
                                    variant="filled"
                                    style={{
                                        marginTop: '0.5rem',
                                        marginBottom: '0.5rem',
                                        borderRadius: '6px',
                                        backgroundColor: '#f0efff',
                                        color: '#5b46ff',
                                    }}
                                />
                                <h4 style={{fontSize: '1rem', margin: 0}}>{video.titulo}</h4>
                                <p style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>{video.descripcion}</p>
                                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.85rem', color: '#555'}}>
                                    
                                    <span>
                                        <VisibilityOutlinedIcon style={{verticalAlign: 'middle', fontSize: '1rem', marginRight: '0.25rem'}} />
                                        {video.visualizaciones.toLocaleString()}</span>
                                    <span>                       
                                        <IconButton size="small" aria-label="like" sx={{padding: 0, verticalAlign: 'middle', '&:hover': {color: 'red'}}}>
                                            <FavoriteBorderIcon style={{fontSize: '1rem'}} />
                                        </IconButton>
                                        {video.meGustas.toLocaleString()}
                                    </span>
                                    
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
        
    );
}