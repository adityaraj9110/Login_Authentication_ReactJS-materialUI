import React from 'react'
import { Button ,CssBaseline,Grid,Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Changpass from './auth/Changpass'
const Dashboard = () => {
  const navigate=useNavigate()
  const handleLogout=()=>{
    console.log('logout')
    navigate('/login')
  }
  return (
    <>
      <CssBaseline>
        <Grid container>
          <Grid item sm={4} sx={{background:'gray',p:5,color:'white'}}> 
            <Typography variant='h5'>Email: aditya039@gmail.com</Typography>
            <Typography variant='h6'>Name: Aditya</Typography>
            <Button variant='contained' color='warning' size='large'
              onClick={handleLogout} sx={{mt:8}}
            >
              Logout
            </Button>
          </Grid>

          <Grid item sm={8}> 
              <Changpass/>
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  )
}

export default Dashboard
