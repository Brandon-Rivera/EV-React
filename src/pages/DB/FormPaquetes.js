import React, {useState, useEffect, useMemo} from "react";
import { useNavigate } from 'react-router-dom'
import { useToken } from '../../TokenContext';
import jwt from "jwt-decode";

const FormPaquetes = () =>{

    const { token } = useToken();
    const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

    const [food, setFood] = useState()

    useEffect(() => {
      getFood()
    }, [])

    const getFood = async () => {
        // const token = localStorage.getItem('token')
        const id = jwt(token).id
        // `${api}/administrador/${id}`
        const response = await fetch(`${api}/user`, {
          headers: {
            'x-access-token': token
          }
        })
        const data = await response.json()
        setFood(data)
    }

    
    return(
        <form className="register-form">
            <div className="form-divW">
                <label htmlFor="foodName" className="form-label">Alimento</label>
                <input type="text" id="foodName" className="form-control"/>
            </div>
        </form>
    )
}
