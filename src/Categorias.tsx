import AgregarCategoria, {DatosCategoria} from "./AgregarCategoria";
import ListadoCategorias, {CategoriaListadoItem} from "./ListadoCategorias";
import Menu from "./Menu2";
import { useState , useEffect } from "react";
import Buscador from "./Buscador";
import Menu2 from "./Menu2";

const Categorias = () => {

    const [mostrarVentana, setMostrarVentana] = useState (false);
    const [categorias, setCategoria] = useState<CategoriaListadoItem[]>([]);

    useEffect(() => {
        mostrarCategorias();
    }, [] )


    const onCerrarVentana = () => {
        setMostrarVentana (false);
    }

    const onAbrirVentana = () =>{
        setMostrarVentana (true);
    }

    const mostrarCategorias = async () => {
        const url = "http://localhost:4000/categorias/listar";
        const resp = await fetch (url);
        if (resp.ok){
            const datos = await resp.json();
            const lista = [...datos];
            setCategoria(lista);
        } else {
            const error = await resp.text();
            alert ("Error al cargar las categorias "+ error)
        }
    }

    const onCrearCategoria = async (categoria: DatosCategoria)=>{
        const url = "http://localhost:4000/categorias/crear";
        const resp = await fetch (url, {
            method: "post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Nombre: categoria.Nombre,
                UrlIcono: categoria.Icono
            })
        });

        if (resp.ok){
            setMostrarVentana(false);
            mostrarCategorias();
        } else {
            const error = await resp.text();
            alert (error);
        }
    }

        return (
                <div>
                        <Menu2 />
                        <Buscador />
                        <ListadoCategorias categorias = {categorias} />
                        <AgregarCategoria
                            mostrar={mostrarVentana}
                            onCerrarVentana = {onCerrarVentana}
                            onCrearCategoria = {onCrearCategoria}/>

                            <button
                                onClick={onAbrirVentana}
                                style={{
                                    width:"50px",
                                    height:"50px",
                                    borderRadius:"50px",
                                    position:"fixed",
                                    bottom:"20px",
                                    right:"20px",
                                    border:"none",
                                    boxShadow:"0px 5px 5px #ccc"
                                }}>+</button>
                </div>
        )
}

export default Categorias;