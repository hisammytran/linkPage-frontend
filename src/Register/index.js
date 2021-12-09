import '../App.css';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
const style = {
  fontSize: 14,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: "75%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Register() {

  //State controlling hooks
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submit, setSubmit] = useState(false);

  //error states
  const [cErr, setCErr] = useState(false);
  const [userErr, setUErr] = useState(false);
  const [passErr, setPErr] = useState(false);

  //Form Data collection/validation and Ajax Call
  const submitValues = () => {
    const formDetails = {
      "username": username,
      "password": password,
    }
    setSubmit(true)
    console.log(formDetails);
    let valid = true
    let httpcode = 404
    // make ajax request here
    if (username === "") {
      setUErr(true)
      valid = false
    }
    else { setUErr(false) }
    if (password === "") {
      setPErr(true)
      valid = false
    }
    else { setPErr(false) }
    if (confirm !== password) {
      setCErr(true)
      valid = false
    }
    else {
      if (confirm === "") {
        setCErr(true)
        valid = false
      }
      else { setCErr(false) }
    }

    if (valid == true) {
      fetch('http://127.0.0.1:5000/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          // 'Authorization': 'Basic ' + Buffer.from(data).toString('base64'),
        },
        body: JSON.stringify(formDetails)
      }).then(response => response.json()).then(json => console.log(json))
      
      .catch(err => { console.log(err) })
    
    
    }

  }

  // Get Errors
  const getUErr = () => {
    return userErr
  }
  const getPErr = () => {
    return passErr
  }
  function getErr(type) {
    if (type === 'p') {
      return getPErr()
    }
    if (type === 'u') {
      return getUErr()
    }
    if (type === 'c') {
      return cErr
    }
  }

  if (userErr === false && passErr === false && submit === true) {
    return <Redirect to='/home' />
  }
  else {
    return (
      <div className="App">
        <div className="App-header">

          <Box
            sx={style}
          >
            <h1 style={{ color: 'black' }}>Register</h1>
            <Stack spacing={4}>
              <TextField
                error={getErr('u')}
                onChange={e => setUser(e.target.value)}
                required
                id="outlined-username-input"
                label="Username"
                type="text"
              />
              <TextField
                error={getErr('p')}
                onChange={e => setPass(e.target.value)}
                required
                id="outlined-password-input"
                label="Password"
                type="text"
                autoComplete="current-password"
              />
              <TextField
                error={getErr('c')}
                onChange={e => setConfirm(e.target.value)}
                required
                id="outlined-password-input"
                label="Confirm Password"
                type="text"
                autoComplete="current-password"
              />

              <Button type="submit" onClick={submitValues}>Register</Button>
            </Stack>
            <Link href='/login'>Already have an account?</Link>
          </Box>

        </div>
      </div>
    )
  }
}
export default Register;