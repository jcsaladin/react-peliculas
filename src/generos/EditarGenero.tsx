import FormulariosGeneros from "./FormularioGeneros";

export default function EditarGenero(){
    return (
        <>

        <h3>Editar Genero</h3>
        
        <FormulariosGeneros 
            modelo={{nombre: 'Drama'}} 
            onSubmit={valores => console.log(valores)} />
        </>
        
    )
}