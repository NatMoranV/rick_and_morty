import { useState } from "react";
import { StyledButton } from "../StyledButton/StyledButton";
import { StyledInput } from "../StyledInput/StyledInput";
import { StyledFormContainer } from "./StyledForm";
import { userValidation, passwordValidation } from "../../validation";

export const Form = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    userValidation({ ...userData, [property]: value }, setErrors, errors);
    passwordValidation({ ...userData, [property]: value }, setErrors, errors);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    props.login(userData)
  }

  return (
    <StyledFormContainer onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">email</label>
        <StyledInput
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <span>
        {errors.email === "Email vacío" 
          ? "Ingresa con ejemplo@mail.com"
          : errors.email}
      </span>
      <div>
        <label htmlFor="password">password</label>
        <StyledInput
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </div>
      <span>
        {errors.password === "Contraseña vacía"
          ? "Ingresa con password1"
          : errors.password}
      </span>
      <StyledButton type="submit">submit</StyledButton>
    </StyledFormContainer>
  );
};
