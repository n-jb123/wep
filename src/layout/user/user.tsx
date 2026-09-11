import {  Box, Stack  } from "@mui/material";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
export default function User({
  children,
  user,
}: {
  children: ReactNode;
  user: boolean;
}) {
  return (
    <Stack sx={{height:'100vh' , justifyContent:'space-between' , p:'0px'}}>
        <Header user={user}/>
            <Stack
        direction={"column"}
        sx={{ justifyContent: "space-between", p: 4 , flex:1 }}
      >
        {children}
      </Stack>
      <Box sx={{display:{xs:'flex' , md:'none'},width:'100%'}}>
        <Footer/>
      </Box>
      
    </Stack>
  );
}
