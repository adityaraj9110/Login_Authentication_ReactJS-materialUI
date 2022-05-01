import React,{useState} from 'react'
import {Box, TextField,Button,Alert} from '@mui/material'
const Changpass = () => {
    const [error,setError]=useState({
        status:false,
        message:"",
        type:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget)
        const actualData= {
       
            password:data.get('password'),
            confim:data.get('password_confirmation'),
           
            
        }
  
        if(actualData.password  && actualData.confim){
            if(actualData.password===actualData.confim){
                console.log(actualData)
                document.getElementById("registration-form").reset()
                setError({
                    status:true,
                    msg:"Password Changed Successfuly",
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
       <Box sx={{display:'flex',flexDirection:'column',flexWrap:'wrap',maxWidth:600,mx:4}}>
            <h1>Change Passsword</h1>
            <Box component='form' noValidate sx={{mt:1}} id='registration-form' onSubmit={handleSubmit}>
            
                <TextField margin='normal' required fullWidth id='pasword' name='password'
                label="Password" type='password'>

                </TextField>

                <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation'
                label="Confirm Password" type='password'>

                </TextField>

                

                <Box textAlign='center'>
                    <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Update</Button>
                </Box>

            

                {error.status? <Alert severity={error.type}>{error.msg}</Alert>: ""}
        
            </Box>
       </Box>
      
    </>
  )
}

export default Changpass
