import axios from "axios";
import { useHistory } from "react-router";
import { urlGeneros } from "../utils/endpoints";
import FormulariosGeneros from "./FormularioGeneros";
import { generoCreacionDTO } from "./generos.model";

export default function CrearGenero(){
    const history = useHistory();

    async function crear(genero: generoCreacionDTO){
        try {
            await axios.post(urlGeneros, genero);
            history.push('/generos');
        } catch(error){
            console.log(error);
        }
    }

    return (
        <>
        <h3>Crear Genero</h3>

        <FormulariosGeneros 
            modelo={{nombre: ''}} 
            onSubmit={ async valores => {
                await crear(valores);
            }} />

        </>
    )
}