import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Alert, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'

import { useNavigate}from'react-router-dom'
import { Base_URL } from '../../config/api'

// const{users}=useSelector((state)=>state.users)
// const dispatch = useDispatch()
// useState(()=>{
// dispatch(GetUsersById("4"))
// },[])
// console.log(users)

function Login  (props) {
  const { children, value, index, ...other } = props;
  const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        showPasswordRepeat: false,
      });
      
      const[email,setEmail]=useState("");
      const[loginError,setLoginError]=useState(null)
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

      const LoginUser=async()=>{
        let result=await fetch(`${Base_URL}/auth/login`,
        {
            method:"Post",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
             
                email:email,
                password:values.password,
               
            })
        }).then(data=>data.json())

        console.log(result)
        
        if(result.status===200){
          localStorage.setItem("token",JSON.stringify(result.token))
          navigate("/");
          
        }

        if(result.status===401){
          setLoginError(result.message)
        }
     
    }

  
      return (
        <div>
          {
            loginError!=null ?
            <Alert style={{width:"40%",margin:"auto"}} severity="error">{loginError}</Alert> 
            :<></>
          }

           
            <Grid container width="60%" margin="auto">
        
       
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
             
          
              <Grid item lg='8' margin="auto" marginTop="40px" marginBottom="30px"> 
                <Button onClick={()=>LoginUser()} variant="outlined">Login</Button>
                   
               </Grid>
            </Grid>
        </div>
    )
}

export default Login

