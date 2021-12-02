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
const style = {
    fontSize: 14,
    position: 'absolute',
    padding: 1,
    margin: 1,
    width: 400,
    maxWidth:"75%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Links(props){

    return(
        <div>
            <Box sx={style}>
                
                <Button variant="outlined" component={Link} href={props.URL}>{props.name}</Button>
            </Box>
        </div>
    )
}

//home page will show your saved links
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
            <div className="App-heade">
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
                <Links URL="https://www.yahoo.com" name="yahoo">hi</Links>
            </div>
        </Box>

    )

}
export default Home;