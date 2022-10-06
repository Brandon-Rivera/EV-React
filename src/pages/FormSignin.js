import React from 'react';
import validate from './validateInfo2';
import useForm from './useForm2';
import ErrorModal from './ErrorModal';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          ¡Bienvenidos y Bienvenidas! A Banco de Alimentos Morelos.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Correo</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Introduce tu correo'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Introduce tu contraseña'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Iniciar sesión
        </button>
        <span className='form-input-login'>
        ¿No tienes una cuenta? Regístrate <a href='registrar-sesion'>aquí</a>
        </span>
      </form>
      <ErrorModal show={modalShow} title='Error master!' message='Usuario o contraseña incorrectos' onHide={() => setModalShow(false)}/>
    </div>
  );
};

export default FormSignup;