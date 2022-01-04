// Filename: src/Home/index.js
// Author: Sammy Tran
// Description: Page that allows you to add/delete/update links on your page

import '../App.css';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'

// import { TextField } from '@mui/material';
// import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
const style = {
    fontSize: 14,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 1,
    margin: 1,
    width: 400,
    maxWidth: "75%",
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    gap: 1,
};

//   Component that will house the links
function LinkButton(props) {

    return (
        <div>
            <Box>
                <Box sx={{ textAlign: 'center' }}>
                    <h1>Your Links</h1>
                    <Button variant="outlined" component={Link} href={props.URL}>{props.name}</Button>
                </Box>
            </Box>
        </div>
    )
}
//helper function for submission


//home page will show your saved links
function Home() {
    const [url, setURL] = useState("");
    const [linkName, setName] = useState("");

    const handleSubmit = () => {
        const formDetails = {
            'URL': url,
            'Name': linkName
        }
        console.log(formDetails);

    }
    return (

        <Box sx={{ flexGrow: 1 }}>
           

            {/* <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Home
                    </Typography>

                    <Button variant="outlined" style={{ color: 'white' }} component={Link} href="/">Logout</Button>

                </Toolbar>
            </AppBar> */}
            <div className="App-header">
                {/* <form> */}
                
                <LinkButton URL="https://www.yahoo.com" name="yahoo">hi</LinkButton>
                <Box sx={style}>
                    <h2>Add Links</h2>
                    URL:
                    <label>

                        <input type="url" name="url" onChange={e => setURL(e.target.value)} />
                    </label>
                    Link Name:
                    <label>

                        <input type="text" name="name" onChange={e => setName(e.target.value)} />
                    </label>
                    <Button onClick={handleSubmit} variant='outlined' value="Submit" >Submit</Button>
                    {/* </form> */}
                </Box>
                {/* make api call to retrieve links and map them to a link button */}
            
            </div>
            <Button variant="outlined"  component={Link} href="/">Logout</Button>
        </Box>

    )

}
export default Home;