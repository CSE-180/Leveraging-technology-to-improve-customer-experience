import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';

const StyledLandingPage = styled(Box)(({ theme }) => ({
  backgroundColor: '#243B55',
  color: '#fff',
  textAlign: 'center',
  paddingBottom: '50px',
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 50px',
  backgroundColor: '#1E293A',
  color: "white"
}));

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: '#fff',
}));

const CarouselContainer = () => (
  <Carousel>
    {carouselItems.map((item, index) => (
      <Box key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={item.src}
          alt={item.alt}
          style={{ maxHeight: '400px', width: '50%', borderRadius: '10px' }}
        />
      </Box>  
    ))}
  </Carousel>
);

const WhyUsSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: '#000',
  padding: '150px 50px',
  textAlign: 'center',
}));

const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1E293A',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  marginTop: '20px'
}));

const carouselItems = [
  { src: '/images/hero-img.jpg', alt: 'Insurance Policy' },
  { src: '/images/img2.jpg', alt: 'Happy Family' },
  { src: '/images/img3.jpg', alt: 'Financial Security' },
  { src: '/images/Insurance.jpg', alt: 'Financial Security' },
];

// LandingPage functional component that returns the JSX structure
const LandingPage = () => {
  return (
    <StyledLandingPage>
      {/* Header */}
      <Header>
        <Logo>
          <img
            src="https://files.oaiusercontent.com/file-ZJ7ckHsyjENyevJSmrowSVPX?se=2024-11-22T08%3A53%3A00Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D737dc027-91a1-4136-964f-9a3f2fcd67c5.webp&sig=%2B1y4zdoM9YZiskLpsYB0yDXws4OD52KIOLGLxc5dRM4%3D"
            alt="Company Logo"
            style={{ height: '40px' }}
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: "white" }}>
            InsureEase
          </Typography>
        </Logo>
        <Box>
          <Button
            variant="outlined"
            color="inherit"
            component={Link}
            to="/login"
            sx={{ marginRight: '10px' }}
          > 
            Login
          </Button>
          <Button variant="contained" color="primary" component={Link} to="/signup">
            Sign Up
          </Button>
        </Box>
      </Header>

      {/* Welcome Section */}
      <Box sx={{ padding: '50px', textAlign: 'center' }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginBottom: '16px', color: "white" }}>
          Welcome to InsureEase
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.25rem', marginBottom: '24px', color: "white" }}>
          Building trust with transparency. Simplifying insurance for everyone.
        </Typography>
      </Box>

      {/* Carousel Section */}
      <CarouselContainer />

      {/* Why Us Section */}
      <WhyUsSection>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', marginBottom: '30px' }}>
          At InsureEase, we prioritize your security and satisfaction. 
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', marginBottom: '30px' }}>
          Here's why:
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <Box sx={{ maxWidth: '300px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Comprehensive Coverage
            </Typography>
            <Typography variant="body2">
              Get access to plans that cover all your needs with transparency.
            </Typography>
          </Box>
          <Box sx={{ maxWidth: '300px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Trusted by Thousands
            </Typography>
            <Typography variant="body2">
              Join a growing community of satisfied customers.
            </Typography>
          </Box>
          <Box sx={{ maxWidth: '300px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Affordable Pricing
            </Typography>
            <Typography variant="body2">
              We offer the best plans at competitive prices.
            </Typography>
          </Box>
        </Box>
      </WhyUsSection>

      {/* Footer */}
      <Footer>
        <Typography variant="body2" sx ={{color: "white"}}>
          © 2024 InsureEase. All Rights Reserved.
        </Typography>
      </Footer>
    </StyledLandingPage>
  );
};

export default LandingPage;
