import { Box } from "@mui/material";


type Props = {
    color?: string;
    icono: React.ReactNode;
    titulo: string;
    valor: string;
}

export default function BoxStats({ color,icono, titulo, valor }: Props) {
    return (
       <Box sx={{background:"#ffffffff",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", display:"flex", flexDirection:"column", justifyContent:"center", padding:"1.5rem", borderRadius:"8px", gap:"1rem", width:"22%"}}>
                    <Box sx={{padding:"0.75rem", background: color || "#006effff", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", width:"fit-content", marginBottom:"1rem"}}>
                        {icono}
                    </Box>
                    <Box>
                        <p style={{margin:0, color:"#64748b"}}>{titulo}</p>
                        <p style={{margin:0, fontSize:"1rem"}}>{valor}</p>
                    </Box>
                </Box>
    );
}