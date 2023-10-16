import React from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
import { Typography } from '@mui/material'

function Navbar() {
  return (
    <div className='navbar-container'>
        <Typography variant='h5' className='navbar-point'>Fixtures</Typography>
        <Typography variant='h5' className='navbar-point'>News</Typography>
        <img className='navbar-logo' src={logo} />
        <Typography variant='h5' className='navbar-point'>Fanzone</Typography>
        <Typography variant='h5' className='navbar-point'>Shop</Typography>
    </div>
  )
}

export default Navbar