import {useNavigate} from "react-router-dom";
import { useState } from "react"; 
import logotipo from "./assets/mano.webp";
import "./estilos/acceso.css";


const Registro = () => {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    const onRegistrar = async() => {{
        if (usuario==""){
            alert("El nombre de usuario es requerido");
            return;
        }
        if (correo==""){
            alert("El correo electronico es requerido");
            return;
        }
        if (password==""){
            alert("La contraseña es requerida");
            return;
        }

        const url = "http://Localhost:4000/usuarios/registrarme";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
            NombredelUsuario: usuario, 
            CorreoElectronico: correo, 
            Password: password
            }),
            headers: {
            "Content-Type": "application/json"
            }
        });

        if(!response.ok){
            const mensaje = await response.json();
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

            <div className="agrupador-usuario" >
                <div>Nombre de Usuario</div>
                <div>
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre de usuario"
                        className="caja-usuario"
                        value={usuario}
                        onChange={(e)=> setUsuario(e. target. value)} />
                </div>
            </div>
                        
            <div className="agrupador-password">
                <div>Contraseña</div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        className="caja-password"
                        value={password}
                        onChange={(e)=> setPassword(e. target.value)}
                        />
                </div>
            </div>

            <div className="agrupador-boton">
                <button className="boton-ingresar" onClick={()=> onRegistrar() }>Registrarme</button>
            </div>

            <div className="otros-botones">
                <a href="/recuperar-password" className="link-password">Olvidé mi contraseña</a>
            </div>

        </div>
)
}
export default Registro