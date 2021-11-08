import FormulariosGeneros from "./FormularioGeneros";

export default function CrearGenero(){
  //  const history = useHistory();
    return (
        <>
        <h3>Crear Genero</h3>

        <FormulariosGeneros 
            modelo={{nombre: ''}} 
            onSubmit={valores => console.log(valores)} />

        </>
    )
}