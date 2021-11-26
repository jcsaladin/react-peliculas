import { Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { actorCreacionDTO } from "./actores.model";
import * as Yup from 'yup';
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import FormGroupMarkdown from "../utils/FormGroupMarkdown";

export default function FormulariosActores(props: formularioActoresProps){

    return (
        <Formik initialValues={props.modelo}  onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}       
        >

            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" />
                    <FormGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento" />
                    <FormGroupImagen campo="foto" label="foto" imagenURL={props.modelo.fotoURL} />
                    <FormGroupMarkdown campo="biografia" label="Biografia" />

                    <Button disabled={formikProps.isSubmitting} type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioActoresProps{
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, accion: FormikHelpers<actorCreacionDTO>): void;
}