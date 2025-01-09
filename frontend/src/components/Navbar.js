import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#2E8BC0' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                </Box>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
