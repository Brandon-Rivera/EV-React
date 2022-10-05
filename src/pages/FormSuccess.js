import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>¡Hemos recibido su petición!</h1>
      <img className='form-img-2' src='/assets/BAMX.png' alt='success-image' />
    </div>
  );
};

export default FormSuccess;