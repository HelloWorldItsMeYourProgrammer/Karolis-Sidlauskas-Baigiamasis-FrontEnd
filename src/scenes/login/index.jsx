import { useState } from "react"
import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
// import { useHistory } from 'react-router-dom';



// LOGIN
const Login = () => {
      const isNonMobile = useMediaQuery("(min-width:600px)");
  
    // const handleFormSubmit = (values) => {
    //   console.log(values);
    // };
  
    // const history = useHistory();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    async function loginUser(event) {
      event.preventDefault();
  
      const response = await fetch("http://localhost:1337/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (data.user) {
        localStorage.setItem('token', data.user)
        alert('Login successful')
        window.location.href = '/dashboard'
    } else {
        alert('Please check your username and password')
    }

      console.log(data);
    }
  
    return (
        <Box m="20px">
      <Header title="Login" />
      <form onSubmit={loginUser}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
        <br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        <br />
        <Box display="flex" justifyContent="start" mt="20px">
        <input type="submit" value="Login" />
        </Box>
      </form>
      </Box>
    );
  };

export default Login;