import {useNavigate} from "react-router-dom";
import { useState } from "react"; 
import logotipo from "./assets/mano.webp";
import "./estilos/acceso.css";


const Recuperar = () => {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");


    const onRecuperar = async() => {{
        if (correo==""){
            alert("ERROR. Ingrese todos los datos requeridos");
            return;
        }

        const url = "http://Localhost:4000/usuarios/recuperar";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
            CorreoElectronico: correo
            }),
            headers: {
            "Content-Type": "application/json"
            }
        });

        if(!response.ok){
            const mensaje = await response.text();
            alert(mensaje);
            }
            else {
            alert("Usuario registrado correctamente");
            navigate("/");
            }
    }}

return (
        <div className="contenedor">

            <div className="titulo">CFD</div>

            <div>
                <img src={logotipo} className="logo" />
            </div>

            <div className="agrupador-correo" >
                <div>Correo Electrónico</div>
                <div>
                    <input
                        type="text"
                        placeholder="Ingresa tu correo electrónico"
                        className="caja-correo"
                        value={correo}
                        onChange={(e)=> setCorreo(e. target. value)} />
                </div>
            </div>

            <div className="agrupador-boton">
                <button className="boton-ingresar" onClick={()=> onRecuperar() }>Aceptar</button>
            </div>

            <div className="otros-botones">
                <a href="/registro" className="link-registro">Registrarse</a>
            </div>

        </div>
)
}
export default Recuperar