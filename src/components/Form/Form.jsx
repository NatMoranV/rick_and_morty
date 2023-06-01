import { StyledButton } from "../StyledButton/StyledButton";
import { StyledInput } from "../StyledInput/StyledInput";
import { StyledFormContainer } from "./StyledForm";

export const Form = () => {
  const [userData, setUserData] = {
    email: "",
    password: "",
  };

  return (
    <StyledFormContainer>
      <div>
        <label htmlFor="">email</label>
        <StyledInput type="email" />
      </div>
      <div>
        <label htmlFor="">password</label>
        <StyledInput type="password" />
      </div>
      <StyledButton>submit</StyledButton>
    </StyledFormContainer>
  );
};
