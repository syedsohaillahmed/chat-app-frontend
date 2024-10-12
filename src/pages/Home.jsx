import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Box, Typography } from '@mui/material'
import { homeBackgroundColor } from '../components/constants/Colors'

const Home = () => {
  return (
    <Box sx={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      bgcolor:{homeBackgroundColor},
      height:"100%"
    }} >
      <Typography textAlign={"center"} variant='h5' >
        Select A friend To Chat
      </Typography>
    </Box>
  )
}

export default AppLayout()(Home)