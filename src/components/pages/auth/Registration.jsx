import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { TextField, FormControlLabel, Checkbox,Button,Box,Alert } from '@mui/material'
const Registration = () => {
    const navigate=useNavigate();
    const [error,setError]=useState({
        status:false,
        message:"",
        type:""
    })
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget)
        const actualData= {
            name:data.get('name'),
            email:data.get('email'),
            password:data.get('password'),
            confim:data.get('password_confirmation'),
            tc:data.get('tc')
            
        }
  
        if(actualData.email && actualData.password && actualData.name  && actualData.tc!==null && actualData.confim){
            if(actualData.password===actualData.confim){
                console.log(actualData)
                document.getElementById("registration-form").reset()
                setError({
                    status:true,
                    msg:"Registration Successfuly",
                    type:'success'
                })
                // navigate("/")
            }else{
                setError({
                    status:true,
                    msg:"Password And Confirm Password Has To Be Same",
                    type:'error'
                })

            }
  
        }else{
            setError({
                status:true,
                msg:"All Fields Are Required",
                type:'error'
            })
        }
    }
  return (
    <>
     <Box component='form' noValidate sx={{mt:1}} id='registration-form' onSubmit={handleSubmit}>
        <TextField margin='normal' required fullWidth id='name' name='name'
        label="Name">

        </TextField>

        <TextField margin='normal' required fullWidth id='email' name='email'
        label="Email Address">

        </TextField>


        <TextField margin='normal' required fullWidth id='pasword' name='password'
        label="Password" type='password'>

        </TextField>

        <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation'
        label="Confirm Password" type='password'>

        </TextField>

        <FormControlLabel control={<Checkbox value="agree" color="primary" name='tc' id='tc'/>} label="i am agree to the term and condition">

        </FormControlLabel>

        <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Join</Button>
        </Box>

        

        {error.status? <Alert severity={error.type}>{error.msg}</Alert>: ""}
        
      </Box>

    </>
  )
}

export default Registration
