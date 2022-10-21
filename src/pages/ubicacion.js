import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import jwt from "jwt-decode";
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import './ubicacion.css'
import { useToken } from "../TokenContext";

const Ubicacion = () => {

  const location = useLocation()
  const userId = location.state
  console.log(userId)

  const api = "https://osdup4mgd8.execute-api.us-east-1.amazonaws.com/proxy1/api"
  const { token } = useToken();
  const [ubicacion, setUbicacion] = useState({ lat: 18, lng: -99 });
  // vacío, se ejecuta cada vez que renderiza el componente
  // [], se ejecuta la primera vez que renderiza el componente
  // [estado], se ejecuta solo cuando se actualice el estado, sin bucle
  useEffect(() => {
    getUbicacion()
  }, [])

  /* Todas las funciones */
  const getUbicacion = async () => {
    const id = jwt(token).id
    // `${api}/administrador/${id}`
    const response = await fetch(`${api}/slocationByUser/${userId[0]}`, {
      headers: {
        'x-access-token': token
      }
    })
    const data = await response.json()
    setUbicacion({ lat: data[0].lat, lng: data[0].lon })
  }

  const containerStyle = {
    width: '100%',
    height: '100vh',
    alignContent: 'center'
  };

  return (
    <div>
      <h2 className="titulo_mapa">Ubicación de {userId[1]}</h2>
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

    </div>
  )
}

export default Ubicacion