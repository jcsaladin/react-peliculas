import { Link } from "react-router-dom";

export default function IndiceGeneros(){
    return (     
        <>
            <h3>Generos</h3>
            <Link className="btn btn-primary" to="generos/crear">Crear Genero</Link>
        </>
    )
}