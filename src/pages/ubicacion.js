import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import jwt from "jwt-decode";
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import './ubicacion.css'
import {FaMapMarkerAlt} from 'react-icons/fa'

const Ubicacion = () => {

  const location = useLocation()
  const userId = location.state

  const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

  const [ubicacion, setUbicacion] = useState({lat: 18, lng: -99});
  // vacío, se ejecuta cada vez que renderiza el componente
  // [], se ejecuta la primera vez que renderiza el componente
  // [estado], se ejecuta solo cuando se actualice el estado, sin bucle
  useEffect(() => {
    getUbicacion()
  }, [])

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
    console.log({lat: data[0].lat, lng: data[0].lon})
    setUbicacion({lat: data[0].lat, lng: data[0].lon})
  }

  const containerStyle = { //PREGUNTAR A HUGO
    width: '100%',
    height: '500px',
    justifyContent: 'center'
    };
  
  return (
    <div>
          <LoadScript key={userId}
            googleMapsApiKey="AIzaSyCaZDxJzyD24sCyioMbzBc0vZ66dtjsX_k"
          >
            <GoogleMap
               mapContainerStyle={containerStyle}
               center={ubicacion}
               zoom={17}
             >
              <MarkerF
                position={ubicacion}
              >
              </MarkerF>
            </GoogleMap>
         </LoadScript>
    </div>
  )
}

export default Ubicacion