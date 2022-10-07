export default function validateInfo(values) {
    let errors = {};
  
    if (!values.adminName.trim()) {
      errors.adminName = 'Username required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.eMail) {
      errors.eMail = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.eMail)) {
      errors.eMail = 'Email address is invalid';
    }
    if (!values.adminPassword) {
      errors.adminPassword = 'Password is required';
    } else if (values.adminPassword.length < 6) {
      errors.adminPassword = 'Password needs to be 6 characters or more';
    }
  
    return errors;
  }