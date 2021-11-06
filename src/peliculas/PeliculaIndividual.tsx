import { pelicula } from "./peliculas.model";
import css from './PeliculaIndividual.module.css'

export default function PeliculaIndividual(props: PeliculaIndividualProps) {

    const link = () => `/pelicula/${props.pelicula.id}`

    return (
        <div className={css.div}>
            <a href={link()}>
                <img src={props.pelicula.poster} alt="Poster" />
            </a>
            <p>
                <a href={link()}>{props.pelicula.titulo}</a>
            </p>
        </div>
    )
}

interface PeliculaIndividualProps {
    pelicula: pelicula;
}