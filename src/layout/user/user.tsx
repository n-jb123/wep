import {  Box, Container, Stack  } from "@mui/material";
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
    <Stack sx={{height:'100vh' , justifyContent:'space-between' ,overflow:'hidden'}}>
        <Header user={user}/>
            <Stack
        direction={"column"}
        sx={{ justifyContent: "space-between", p: 4 , flex:1 ,overflowY:'auto'}}
      >
        <Container maxWidth="lg">
          {children}
        </Container>
        
      </Stack>
      <Box sx={{display:{xs:'flex' , md:'none'},width:'100%'}}>
        <Footer/>
      </Box>
      
    </Stack>
  );
}
