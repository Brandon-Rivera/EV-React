export default function validateInfo(values) {
    let errors = {};
  
    if (!values.adminName.trim()) {
      errors.adminName = 'Se requiere un nombre de usuario';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.eMail) {
      errors.eMail = 'Se requiere un correo electrónico';
    } else if (!/\S+@\S+\.\S+/.test(values.eMail)) {
      errors.eMail = 'El correo electrónico es inválido';
    }
    if (!values.adminPassword) {
      errors.adminPassword = 'Se requiere una contraseña';
    } else if (values.adminPassword.length < 3) {
      errors.adminPassword = 'La contraseña debe tener mínimo 3 caracteres';
    }
  
    return errors;
  }