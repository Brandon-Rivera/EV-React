import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

const Respuestas = () => {

    const location = useLocation();
    const miembroId = location.state;

    const [respuestas, setRespuestas] = useState()

    useEffect(() => {
      getRespuestas()
    }, [respuestas])

    const getRespuestas =() =>{

    }
    
    return(
        <div>
            <h1 className='title'>Respuestas de {miembroId[1]}</h1>
        </div>
    )
}

export default Respuestas


