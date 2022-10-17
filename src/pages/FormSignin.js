import React from 'react';
import validate from './validateInfo2';
import useForm from './useForm2';
import './Form.css';
import { Link } from 'react-router-dom';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          ¡Inicia sesión aquí!
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Nombre de usuario</label>
          <input
            className='form-input'
            type='text'
            name='adminName'
            placeholder='Introduce tu nombre de usuario'
            value={values.adminName}
            onChange={handleChange}
          />
          {errors.adminName && <p>{errors.adminName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='adminPassword'
            placeholder='Introduce tu contraseña'
            value={values.adminPassword}
            onChange={handleChange}
          />
          {errors.adminPassword && <p>{errors.adminPassword}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Iniciar sesión
        </button>
        <span className='form-input-login'>
          ¿No tienes una cuenta? Regístrate <Link to="/registrar-sesion">aquí</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;