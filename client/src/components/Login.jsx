import { useState } from "react";
import img1 from '../assets/images/ecomerce.png'

import { Box, TextField, Button, styled, Typography } from "@mui/material";

const Component = styled(Box)`
  width: 350px;
  margin: auto;
  padding:1rem;
  box-shadow: 2px 3px 8px 0px rgb(0 0 0/0.3);
`;

const Image = styled("img")({
  width: 250,
  margin: "auto",
  display: "flex",
  padding: "25px 0 0",
});

const Wrapper = styled(Box)`
  padding: 15px 25px;
  display: flex;
  flex: flex-start;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
    text-transform : none;
    background : #FB641B;
    color : #FFF;
    height :  50px
    border-radius : 2px;
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 18Textpx;
`;


const signupInitialValues = {
  username: '',
  password: ''
}

const Login = () => {
  const [account, toggleAccout] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);

  const toggleSignup = () => {
    account === 'signup' ? toggleAccout('login') : toggleAccout('signup');
  }

  const onInputChange = (event) => {
    setSignup({ ...signup, [event.target.name]: event.target.value });
    console.log(signup);
  }

  const signupUser = (e) => {
    e.preventDefault();

    try{

    }
    catch(err){
      console.log(err);
    }
    
  console.log("Inside Login",signup);

  }

  return (
    <Component style={{marginTop:"35px"}}>
      <Box >
        <Image src={img1} alt="image not found" />
        {account === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter username" />
            <TextField variant="standard" type={"password"} label="Enter password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <Button
              variant="outlined"
              style={{
                marginTop: "10px",
                background: "#fff",
                color: "#2874f0",
                height: "38px",
                borderRadius: "3px",
                boxShadow: " 0 2px 4px 0 rgb(0 0 0/ 20%)",
              }} onClick={() => toggleSignup()}>
              Create an account
            </Button>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant="standard" onChange={(event) => onInputChange(event)} name="username" label="Enter Username" />
            <TextField variant="standard" onChange={(event) => onInputChange(event)} name="password" label="Enter Password" />
            <TextField variant="standard" onChange={(event) => onInputChange(event)} name="email" label="Enter Email" />
            <TextField variant="standard" onChange={(event) => onInputChange(event)} name="address" label="Enter Address" />
            <Button
              variant="outlined"
              style={{
                marginTop: "20px",
                background: "#fff",
                color: "#2874f0",
                height: "38px",
                borderRadius: "3px",
                boxShadow: " 0 2px 4px 0 rgb(0 0 0/ 20%)",
              }}
              onClick={(e) => signupUser(e)}>
              Create an account
            </Button>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
