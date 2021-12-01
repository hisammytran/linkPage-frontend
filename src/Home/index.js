import '../App.css';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'

// import { TextField } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

function Home() {

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Home
                    </Typography>

                    <Button variant="outlined" style={{ color: 'white' }} component={Link} href="/">Logout</Button>

                </Toolbar>
            </AppBar>
            <div className="App-header">
                <form>
                    <label>
                        URL:
                        <input type="url" name="url" />
                    </label>
                    <label>
                        Link Name:
                        <input type="text" name="name"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </Box>

    )

}
export default Home;