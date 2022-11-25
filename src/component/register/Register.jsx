import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import {useNavigate}from'react-router-dom'
import { Base_URL } from '../../config/api'

import '../register/register.scss'

function Register  () {
   const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        showPasswordRepeat: false,
      });
      
      const[name,setName]=useState("");
      const[surname,setSurname]=useState("");
      const[email,setEmail]=useState("");
      const navigate=useNavigate('')

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const registerUser=async()=>{
        let result=await fetch(`${Base_URL}/auth/register`,
        {
            method:"Post",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                name:name,
                surname:surname,
                email:email,
                password:values.password,
                PasswordRepeat:values.password
            })
        } ).then(data=>data.json())

        if(result.status===200){
          navigate("/");
        }
     
    }
      return (
        <div>
           
            <Grid container width="60%" margin="auto">
        
             <Grid item  lg="8" margin="auto"marginTop="20px">
                <TextField onChange={(e)=>setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" fullWidth />   
               </Grid>
               <Grid item  lg="8" margin="auto"marginTop="20px">
                <TextField onChange={(e)=>setSurname(e.target.value)} id="outlined-basic" label="surName" variant="outlined" fullWidth />   
               </Grid>
               <Grid item  lg="8" margin="auto"marginTop="20px">
                <TextField onChange={(e)=>setEmail(e.target.value)} id="outlined-basic" label="email" variant="outlined" fullWidth />   
               </Grid>
             
               <Grid item lg='8' margin="auto"marginTop="20px"> 
               <FormControl variant="outlined" fullWidth>
               <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput fullWidth
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end" >
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                   />
               </FormControl>
              
               </Grid>
               {/* <Grid item lg='8' margin="auto"marginTop="20px"> 
               <FormControl variant="outlined" fullWidth>
               <InputLabel htmlFor="outlined-adornment-password">Password Repeat</InputLabel>
                    <OutlinedInput fullWidth
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.passwordRepeat}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end" >
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                   />
               </FormControl>
              
               </Grid> */}
              <Grid item lg='8' margin="auto" marginTop="40px" marginBottom="30px"> 
                <Button onClick={()=>registerUser()} variant="outlined">Register</Button>
                   
               </Grid>
            </Grid>
        </div>
    )
}

export default Register

