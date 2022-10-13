import React from "react";
import { useLocation } from "react-router-dom";

const Ubicacion = () => {
    const location = useLocation()
    const userId = location.state

    return(
        <h1>{userId}</h1>
    )
}

export default Ubicacion