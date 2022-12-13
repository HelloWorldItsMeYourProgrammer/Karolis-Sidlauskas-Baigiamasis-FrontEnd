import { useState } from "react"
import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
// import { useHistory } from 'react-router-dom';


//REGISTER 

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // const handleFormSubmit = (values) => {
  //   console.log(values);
  // };

  // const history = useHistory();

  const [email, setEmail] = useState('')
  const [password, setPassword ] = useState('')

  async function registerUser(event) {
  event.preventDefault()

    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()

    console.log(data)

  }

  return (
    <Box m="20px">
      <Header title="Create New User" />
      {/* <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      > */}
        {/* {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => ( */}
          <form onSubmit={registerUser}>
            {/* <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(1, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            > */}
              <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            />
            <br />
            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            />
            <br />
              {/* <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                onBlur={handleBlur}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 1" }}
              /> */}
              {/* <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 1" }}
              /> */}
              <Box display="flex" justifyContent="start" mt="20px">
              <input type="submit" value="Register" 
              // color="secondary" variant="contained">
              />
            </Box>
            </form>
            </Box>
  );
      /* </Formik> */

  // );
};

/* // const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/; */




export default Form;