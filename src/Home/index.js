import '../App.css';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'

import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Home() {

    return (
        
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Home
                    </Typography>
                
                    <Button variant="outlined" style={{color:'white'}} component={Link} href="/">Logout</Button>
                    
                </Toolbar>
            </AppBar>
            <div class="App-header"></div>
        </Box>
        
    )

}
export default Home;