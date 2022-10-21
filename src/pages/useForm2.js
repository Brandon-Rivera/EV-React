import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useToken } from '../TokenContext';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    adminName: '',
    adminPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useToken();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"
    // const api = "http://localhost:3001/api"

    const response = fetch(`${api}/adminlogin`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
      })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log('Success:', data.token);
        if (data.token !== '') {
          setToken(data.token);
          navigate('/informe-general', { replace: true });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // const data = response.json();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
