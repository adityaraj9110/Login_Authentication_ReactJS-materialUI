import React, { useState } from "react";
import img1 from "../../../assests/img1.png";
import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
import UserLogin from "./UserLogin";
import Registration from "./Registration";
import { ShoppingBag } from "@mui/icons-material";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};
const LoginReg = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: { xs: "none", sm: "block" },
          }}
        ></Grid>

        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box sx={{ mx: 3 ,height:530}}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  textColor="secondary"
                  indicatorColor="secondary"
                  onChange={handleChange}
                >
                  <Tab
                    label="Login"
                    sx={{ textTransform: "None", fontWeight: "Bold" }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{ textTransform: "None", fontWeight: "Bold" }}
                  ></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registration />
              </TabPanel>
            </Box >

            <Box textAlign='center' sx={{mt:2}}>
              <ShoppingBag sx={{color:'purple',fontSize:100}}/>
              <Typography variant="h5" sx={{fontWeight:'bold'}}>
                Geek-Shop
              </Typography>

            </Box>

          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginReg;
