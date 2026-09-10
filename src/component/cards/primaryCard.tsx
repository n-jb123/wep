'use client'
import { Translate } from "@mui/icons-material";
import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function PrimaryCard({children}:{children:ReactNode}){
    return(
        <Box sx={(theme)=>({
            bgcolor:'primary.main',
            p:5,
            overflow:'hidden',
            height:'max-content',
            width:'500px',
            display:'flex',
            flexDirection:'column',
            gap:4,
            alignItems:'center',
            borderRadius:theme.shape.xxl,
            backdropFilter:'blur(50px)'
        })}>
            {children}
        </Box>
    )
}