export const userValidation = (userData, setErrors) => {
    const email = userData.email;
  
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Ingresa un email válido",
      }));
    } else if (email.length > 35) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "El email debe ser menor a 35 caracteres",
      }));
    } else if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email vacío",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };
  
  export const passwordValidation = (userData, setErrors) => {
    const password = userData.password;
  
    if (!password.length) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Contraseña vacía",
      }));
    } else if (password.length < 6 || password.length > 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "La contraseña debe tener entre 6 y 10 caracteres",
      }));
    } else if (!/\d/.test(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "La contraseña debe incluir al menos un número",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }
  };
  