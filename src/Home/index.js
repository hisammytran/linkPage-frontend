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

//   Component that will house the links
function LinkButton(props){

    return(
        <div>
            <Box sx={style}>
                
                <Button variant="outlined" component={Link} href={props.URL}>{props.name}</Button>
            </Box>
        </div>
    )
}
//helper function for submission


//home page will show your saved links
function Home() {
    const [url,setURL] = useState("");
    const [linkName,setName]=useState("");

    const handleSubmit=()=>{
        const formDetails={
            'URL': url,
            'Name': linkName
        }
        console.log(formDetails);
       
    }
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
                {/* <form> */}
                    <label>
                        URL:
                        <input type="url" name="url" onChange={e=>setURL(e.target.value)}/>
                    </label>
                    <label>
                        Link Name:
                        <input type="text" name="name" onChange={e=>setName(e.target.value)}/>
                    </label>
                    <button onClick={handleSubmit} value="Submit" />
                {/* </form> */}

                {/* make api call to retrieve links and map them to a link button */}
                <LinkButton URL="https://www.yahoo.com" name="yahoo">hi</LinkButton>
            </div>
        </Box>

    )

}
export default Home;