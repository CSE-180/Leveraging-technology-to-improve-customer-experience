// src/Support.js
import React from 'react';
import { Typography, Container, Button } from '@mui/material';  // Added Button import
import { Link } from 'react-router-dom';  // Added Link import

function Support() {
    return (
        <Container sx={{ marginTop: '30px', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px', color: '#2E8BC0' }}>
                Support
            </Typography>
            <Typography variant="h6" sx={{ color: '#333' }}>
                For Troubleshooting, Please Contact Us:
            </Typography>
            <Typography variant="h6" sx={{ color: '#2E8BC0' }}>
                +1-800-123-4567
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '20px', color: '#555' }}>
                Our support team is available 24/7 to help you with any issues you may face. Don't hesitate to reach out!
            </Typography>
            <Button
                variant="contained"
                sx={{ backgroundColor: '#2E8BC0', color: '#fff', '&:hover': { backgroundColor: '#0097A7' } }}
                component={Link}
                to="/dashboard"
            >
                Go to Home
            </Button>
        </Container>
    );
}

export default Support;
