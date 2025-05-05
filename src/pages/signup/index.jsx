import React, { useState } from "react";
import styled from "styled-components";

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f4f8;
`;

const AuthBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #357abd;
  }
`;

const SwitchLink = styled.p`
  margin-top: 15px;
  font-size: 0.9rem;
  color: #666;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <AuthContainer>
      <AuthBox>
        <Title>{isSignUp ? "Sign Up" : "Sign In"}</Title>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        {isSignUp && <Input type="password" placeholder="Confirm Password" />}
        <Button>{isSignUp ? "Register" : "Login"}</Button>
        <SwitchLink onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </SwitchLink>
      </AuthBox>
    </AuthContainer>
  );
};

export default SignInSignUp;
