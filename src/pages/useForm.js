import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

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

   // const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

    // const response = fetch(`${api}/adminregister`,
    //                               {
    //                                   method: 'POST',
    //                                   headers: {
    //                                     'Content-Type': 'application/json'
    //                                   },
    //                                 body: JSON.stringify(values)
    //                               }
    //                             );