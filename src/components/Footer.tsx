import { Divider } from "@mui/material";
import Marca from "./Marca";

export default function Footer() {
    return (
        <footer style={{width: '100%', padding: '1rem', textAlign: 'center', borderTop: '1px solid #e0e0e0', marginTop: '2rem', paddingBottom: '2rem', boxSizing: 'border-box', background: '#ffffffff', color: '#213547'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '1rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
                <span style={{marginRight: '0.5rem'}}>
                    <Marca />
                    <h5>
                        Tu plataforma de aprendizaje en línea
                    </h5>
                </span>
                <span style={{marginLeft: '2rem', marginRight: '2rem', textAlign: 'left'}}>
                    <h4>Producto</h4>
                    <p>Características</p>
                    <p>Precios</p>
                    <p>API</p>
                </span>
                <span style={{marginLeft: '2rem', marginRight: '2rem', textAlign: 'left'}}>
                    <h4>Compañía</h4>
                    <p>Sobre nosotros</p>
                    <p>Blog</p>
                    <p>Contacto</p>
                </span>
                <span style={{marginLeft: '2rem', marginRight: '2rem', textAlign: 'left'}}>
                    <h4>Legal</h4>
                    <p>Privacidad</p>
                    <p>Términos</p>
                    <p>Cookies</p>
                </span>
         
            </div>
            <Divider style={{margin:"2rem"}}/>
            <span style={{color: '#767676ff'}}>© 2026 MyApp. Todos los derechos reservados a George Eduard.</span>
            
        </footer>
    );
}