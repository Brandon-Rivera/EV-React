import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import jwt from "jwt-decode";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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
  const ubi = Object.values(ubicacion)

  const containerStyle = {
    width: '70%',
    height: '500px',
  };
  return (
    <div>
      <h1>{userId}</h1>
      {
        ubi.map(ub => (
          <LoadScript
            googleMapsApiKey="AIzaSyCaZDxJzyD24sCyioMbzBc0vZ66dtjsX_k"
          >
            <GoogleMap
               mapContainerStyle={containerStyle}
               center={{ lat: ub.lat, lng: ub.lon }}
               zoom={17}
             >
             { /* Child components, such as markers, info windows, etc. */}
               <></>
            </GoogleMap>
         </LoadScript>
        ))
      }
    </div>
  )
}

export default Ubicacion