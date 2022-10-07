import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
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
          ¡Comienza con nosotros hoy! Cree su cuenta completando la siguiente información. Hola perritos
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Usuario</label>
          <input
            className='form-input'
            type='text'
            name='adminName'
            placeholder='Introduce tu usuario'
            value={values.adminName}
            onChange={handleChange}
          />
          {errors.adminName && <p>{errors.adminName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Correo</label>
          <input
            className='form-input'
            type='email'
            name='eMail'
            placeholder='Introduce tu correo'
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
            placeholder='Introduce tu contraseña'
            value={values.adminPassword}
            onChange={handleChange}
          />
          {errors.adminPassword && <p>{errors.adminPassword}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirmar contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirma tu contraseña'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Registrar
        </button>
        <span className='form-input-login'>
        ¿Ya tienes una cuenta? Inicia sesión <a href='iniciar-sesion'>aquí</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;