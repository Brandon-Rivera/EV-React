import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { Link } from 'react-router-dom';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          ¡Regístrate aquí!
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Nombre de usuario</label>
          <input
            className='form-input'
            type='text'
            name='adminName'
            placeholder='Introduce tu nombre de usuario deseado'
            value={values.adminName}
            onChange={handleChange}
          />
          {errors.adminName && <p>{errors.adminName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>E-mail</label>
          <input
            className='form-input'
            type='email'
            name='eMail'
            placeholder='Introduce tu correo electrónico'
            value={values.eMail}
            onChange={handleChange}
          />
          {errors.eMail && <p>{errors.eMail}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='adminPassword'
            placeholder='Introduce tu contraseña deseada'
            value={values.adminPassword}
            onChange={handleChange}
          />
          {errors.adminPassword && <p>{errors.adminPassword}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Registrarse
        </button>
        <span className='form-input-login'>
          ¿Ya tienes una cuenta? Inicia sesión <Link to="/iniciar-sesion">aquí</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;