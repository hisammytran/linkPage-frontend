import '../App.css';
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';





function Welcome() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <Stack spacing={2} direction ="row">
          <Button variant ="contained" component={Link} to="/login">Login</Button>
          <Button variant ="outlined" component={Link} to="/register">Register</Button>
        </Stack>

      </header>
    </div>
  );
}

export default Welcome;
