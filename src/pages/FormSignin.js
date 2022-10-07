import React from 'react';
import validate from './validateInfo2';
import useForm from './useForm2';
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
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='adminName'
            placeholder='Enter your username'
            value={values.adminName}
            onChange={handleChange}
          />
          {errors.adminName && <p>{errors.adminName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='adminPassword'
            placeholder='Enter your password'
            value={values.adminPassword}
            onChange={handleChange}
          />
          {errors.adminPassword && <p>{errors.adminPassword}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;