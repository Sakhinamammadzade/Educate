import React from 'react'
import '../banner/Banner.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const Banner = () => {
  return (
    
    <section id='Banner' style={{backgroundImage:`url("https://comparassetsource.s3.amazonaws.com/media/blog/article/pexels-photo-4348401.jpeg")`}}>
        <div className="section-over">
              <div className="banner-text">
                <h5>Learn From Home</h5>
                <h1>Education Courses</h1>
              </div>
              <div className="section-search">
               <FormControl fullWidth className='search-form'>
                   <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value="10"
                      label="Age"
                    
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <TextField style={{width:"100%"}} id="outlined-basic" label="Outlined" variant="outlined" />
                    <Button variant="contained">Contained</Button>
                    
                </FormControl>
               
               
              </div>
        </div>            
    </section>
     

        

  
  )
}

export default Banner