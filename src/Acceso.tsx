import {useNavigate} from "react-router-dom";
import { useState } from "react"; 
import logotipo from "./assets/mano.webp";
import "./estilos/acceso.css";


const Acceso = () => {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const onIngresar = async () =>{{

        const url = "http://localhost:4000/usuarios/acceso";
        const response = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                CorreoElectronico: correo,
                Password: password
            })
        });

        if (response.ok){
            alert("El inicio de sesion fue exitoso");
            navigate("/categorias");
        } else {
            const error = await response.text();
            alert(error);
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

            <div className="agrupador-password" >
                <div>Contraseña</div>
                <div>
                    <input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        className="caja-password"
                        value={password}
                        onChange={(e)=> setPassword(e. target. value)} />
                </div>
            </div>

            <div className="agrupador-boton">
                <button className="boton-ingresar" onClick={()=> onIngresar() }>Aceptar</button>
            </div>

            <div className="otros-botones">
                <a href="/registro" className="link-registro">Registrarse</a>
                <a href="/recuperar-password" className="link-password">Olvidé mi contraseña</a>
            </div>

        </div>
)
}
export default Acceso