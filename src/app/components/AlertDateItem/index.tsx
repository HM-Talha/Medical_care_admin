import React from "react";
import { Box, Typography } from "@mui/material";

interface AlertItemProps {
  name: string;
  value: string;
  icon: any
}

const AlertDateItem = ({ icon, name, value }: AlertItemProps) => {
  return <>
  <Box minWidth={603} mt={1} bgcolor='#F5F5F5' display='flex' alignItems='center' justifyContent={'space-between'} px={.8} pt={1.3} pb={1.55} pr={1.3}>
    <Box display={'flex'} alignItems='center'>
      <span>{icon}</span>
      <Typography dir="ltr" mr={2} ml={1}>{name}</Typography>
    </Box>
    <Typography >{value}</Typography>
  </Box>
  </>
}

export default AlertDateItem