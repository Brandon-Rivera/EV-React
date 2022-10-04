import React from 'react'
import './home.css';


const Home = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'90vh'}}>
      <center>  
        <h1 className='center-home'>Nuestro motor diario<br></br>
          es que el alimento<br></br> 
          llegue a quien más lo<br></br> 
          necesita</h1>
        <br></br>
        <a href="informe-general" class="button">Ver informe</a>
      </center>
    </div>
  )
}

export default Home