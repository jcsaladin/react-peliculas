import { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage() {

    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() =>{
        const timerId = setTimeout(() => {
            setPeliculas({ 
              enCartelera: [
              {id: 1, titulo: 'Spider-Man Far from Home', poster: 'https://m.media-amazon.com/images/I/810OkkP0LnL._AC_SY741_.jpg' },
              {id: 2, titulo: 'Moana', poster: 'https://static.wikia.nocookie.net/disney/images/7/76/Moana_official_poster.jpg' }
            ],
              proximosEstrenos: [
              {id: 3, titulo: 'Soul', poster: 'https://lumiere-a.akamaihd.net/v1/images/image_5e27f8d3.jpeg?region=0,0,648,972' }
            ]
          })
        }, 1000);
    
        return () => clearTimeout(timerId);
      })

      return (
          <>
             <h3>En Cartelera</h3>
             <ListadoPeliculas peliculas={peliculas.enCartelera} />

             <h3> Proximos Estrenos</h3>
             <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
          </>
      )
}