import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import jwt from "jwt-decode";
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Ubicacion = () => {

    const location = useLocation()
    const userId = location.state

    const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

    const [ubicacion, setUbicacion] = useState({ city: "" });
    // vacío, se ejecuta cada vez que renderiza el componente
    // [], se ejecuta la primera vez que renderiza el componente
    // [estado], se ejecuta solo cuando se actualice el estado, sin bucle
    useEffect(() => {
        getUbicacion()
    }, [ubicacion])

    /* Todas las funciones */
    const getUbicacion = async () => {
        const token = localStorage.getItem('token')
        const id = jwt(token).id
        // `${api}/administrador/${id}`
        const response = await fetch(`${api}/slocationByUser/${userId}`, {
            headers: {
                'x-access-token': token
            }
        })
        const data = await response.json()
        setUbicacion(data)
    }
    const ubi = Object.entries(ubicacion)

    // const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyBhN9aOoiyE9_ouRyVzQsHRyNVuOpGlAJQ"})

    //  if(!isLoaded){
    //      return <div>Hola</div>
    // }

    return (
        <div>
            <h1>{userId}</h1>
            {/* <GoogleMap
                zoom={10}
                center={{lat: 44, lng: -80}}
                mapContainerClassName="map-container"
            >

            </GoogleMap> */}
        </div>
    )
}

export default Ubicacion