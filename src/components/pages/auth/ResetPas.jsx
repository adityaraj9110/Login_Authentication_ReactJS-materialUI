import React, { useState } from "react";
import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ResetPas = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    status: false,
    message: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
    };

    if (actualData.password && actualData.password_confirmation) {
      if(actualData.password === actualData.password_confirmation){
        console.log(actualData);
        document.getElementById("pasvalidate-form").reset();
        setError({
          status: true,
          msg: "password saved succesfully.Redirecting to login page",
          type: "success",
        });

        setTimeout(()=>{
            navigate("/")
        },3000)
      }else{
        setError({
            status: true,
            msg: "password and confirm password has to be same",
            type: "error",
          });
      }
    } else {
      setError({
        status: true,
        msg: "All Fields Are Required",
        type: "error",
      });
    }
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="pasvalidate-form"
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="pasword"
              name="password"
              label="New Password"
              type="password"
            ></TextField>

            <TextField
              margin="normal"
              required
              fullWidth
              id="password_confirmation"
              name="password_confirmation"
              label="Confirm New Password"
              type="password"
            ></TextField>

            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Save
              </Button>
            </Box>

            {error.status ? (
              <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ResetPas;
