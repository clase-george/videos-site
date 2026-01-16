import { Box, Button, Grid } from "@mui/material";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BoxStats from "../components/BoxStats";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { BarChart } from "@mui/x-charts";


export default function StatsPage() {
    return (
        <div style={{padding:"2rem"}}>
            <div style={{width:"60%", display:"flex"}}>
                    <Button variant="text" startIcon={<KeyboardDoubleArrowLeftIcon />} href="/" style={{marginBottom: "0.75rem"}}>Volver al inicio</Button>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Box>
                    <h1 style={{margin:0, fontSize:"2rem"}}>Estadísticas de Videos</h1>
                    <p>Diseña UI/UX Moderno.</p>
                </Box>
                <Box sx={{display:"flex", alignItems:"center",background:"#dfffdc8f", padding:"0.25rem",paddingRight:"0.55rem",paddingLeft:"0.55rem", borderRadius:"8px", gap:"1rem"}}>
                    <QueryStatsIcon sx={{width: 24, height: 24, color: '#018b36ff'}} />
                    <h2 style={{fontSize:"1rem",fontWeight:"lighter",color:"#018b36ff"}}>+12.5% esta semana</h2>
                </Box>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", flexDirection:"row", alignItems:"center", marginTop:"2rem", padding:"1rem", borderRadius:"8px"}}>
                {/* Componentes creados por mi a partir de las de MUI */}
                <BoxStats icono={<RemoveRedEyeOutlinedIcon sx={{width:24, height: 24, color: '#ffffffff'}} />} titulo="Vistas Totales" valor="55,4k"/>
                <BoxStats color="#ff3e3eff" icono={<FavoriteBorderOutlinedIcon sx={{width: 24, height: 24, color: '#ffffffff'}} />} titulo="Me Gusta" valor="4,4k"/>
                <BoxStats color="#03c74eff" icono={<ChatBubbleOutlineIcon sx={{width: 24, height: 24, color: '#ffffffff'}} />} titulo="Comentarios" valor="581"/>              
                <BoxStats color="#872bffff" icono={<ShareOutlinedIcon sx={{width: 24, height: 24, color: '#ffffffff'}} />} titulo="Compartidos" valor="892"/>
                
            </div>

           <Grid container spacing={7} sx={{marginTop:"2rem"}}>
                <Grid sx={{background: "#ffffffff",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "1rem"}} size={6}>
                    <h3>Vistas por dias</h3>
                    <BarChart
                       
                        xAxis={[{ data: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'] }]}                     
                        series={[{ data: [4200, 5800, 7200, 6500, 8900, 12500, 10300] , color: '#7968fdff'}]}
                        height={300}
                        
                    />
                </Grid>
                <Grid sx={{background: "#ffffffff",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "1rem"}} size={6}>
                    <h3>Retencion de audiencia</h3>
                    
                </Grid>
            </Grid> 
        </div>
    );
}