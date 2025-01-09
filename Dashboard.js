import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Container,
    Grid,
    Typography,
    Toolbar,
    Collapse,
    IconButton,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Divider,
    Menu,
    MenuItem,
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

import { HealthAndSafety, DirectionsCar, House, Security } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Insurance Types and Companies Data
const insuranceTypes = [
    {
        type: 'Health Insurance',
        icon: <HealthAndSafety />,
        companies: [
            { name: 'Reliance General', logo: 'health_logo_1.png', link: '/company/health-co-1' },
            { name: 'Manipal Cigna', logo: 'health_logo_2.png', link: '/company/health-co-2' },
        ],
    },
    {
        type: 'Car Insurance',
        icon: <DirectionsCar />,
        companies: [
            { name: 'Acko', logo: 'car_logo_1.png', link: '/company/car-co-1' },
            { name: 'Bajaj Allianz', logo: 'car_logo_2.png', link: '/company/car-co-2' },
        ],
    },
    {
        type: 'Home Insurance',
        icon: <House />,
        companies: [
            { name: 'Policy Bazaar', logo: 'home_logo_1.png', link: '/company/home-co-1' },
            { name: 'SBI General', logo: 'home_logo_2.png', link: '/company/home-co-2' },
        ],
    },
    {
        type: 'Life Insurance',
        icon: <Security />,
        companies: [
            { name: 'Max Life Insurance', logo: 'life_logo_1.png', link: '/company/life-co-1' },
            { name: 'SBI Life', logo: 'life_logo_2.png', link: '/company/life-co-2' },
        ],
    },
];

function Dashboard() {
    const [expandedSection, setExpandedSection] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event) => {

        
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleToggleSection = (type) => {
        setExpandedSection((prev) => (prev === type ? null : type));
    };
    const handleLogout = () => {
      // Clear authentication tokens or session data
      localStorage.removeItem('authToken'); // Example for token-based auth
      // Redirect to login page
      window.location.href = '/';
  };
  

    return (
        <Box>
            {/* Navbar */}
            <AppBar position="sticky" sx={{ backgroundColor: '#ffffff', boxShadow: 3 }}>
    <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Finsurance-logo&psig=AOvVaw1qsLlPWfesGxsbkL8rLLNf&ust=1734688345325000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMilx-jHs4oDFQAAAAAdAAAAABAE"
                alt="InsureEase Logo"
                style={{ width: '70px', height: 'auto', marginRight: '20px' }}
            />
            <Typography variant="h6" sx={{ color: '#2E8BC0', fontWeight: 'bold' }}>
                InsureEase
            </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
                sx={{
                    color: '#2E8BC0',
                    marginRight: 2,
                    '&:hover': { backgroundColor: '#e0f7fa' },
                }}
                onClick={() => window.scrollTo(0, 0)}
            >
                Home
            </Button>
            <Button
                sx={{
                    color: '#2E8BC0',
                    marginRight: 2,
                    '&:hover': { backgroundColor: '#e0f7fa' },
                }}
                onClick={() => document.getElementById('about-us').scrollIntoView()}
            >
                About Us
            </Button>
            <Button
                sx={{
                    color: '#2E8BC0',
                    marginRight: 2,
                    '&:hover': { backgroundColor: '#e0f7fa' },
                }}
                onClick={handleMenuClick}
            >
                Compare Insurers
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>
            <Link to="/insurance-type/health-insurance" style={{ textDecoration: 'none', color: 'black' }}>Health Insurance</Link>
            
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
          <Link to="/insurance-type/car-insurance" style={{ textDecoration: 'none', color: 'black' }}>Car Insurance</Link>
            
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/insurance-type/home-insurance" style={{ textDecoration: 'none', color: 'black' }}>Home Insurance</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/insurance-type/life-insurance" style={{ textDecoration: 'none', color: 'black' }}>Life Insurance</Link>
            
          </MenuItem>
          
            </Menu>
            <Button
                sx={{
                    color: '#2E8BC0',
                    marginRight: 2,
                    '&:hover': { backgroundColor: '#e0f7fa' },
                }}
                component={Link}
                to="/support"
            >
                Support
            </Button>
             {/* Logout Button */}
        {/* <Button
            sx={{
                color: 'white',
                backgroundColor: '#FF6B6B',
                '&:hover': { backgroundColor: '#FF4C4C' },
            }}
            onClick={handleLogout}
        >
            Logout
        </Button> */}
        <Button
                sx={{
                    color: '#2E8BC0',
                    marginRight: 2,
                    '&:hover': { backgroundColor: '#e0f7fa' },
                }}
                onClick={handleLogout}
            >
                Logout
            </Button>
        </Box>
    </Toolbar>
</AppBar>

{/* Welcome Section */}
<Box sx={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#e0f7fa', marginTop: '80px' }}>
                <Typography variant="h4" sx={{ color: '#2E8BC0', marginBottom: '30px' }}>
                    Welcome to Your InsureEase Dashboard
                </Typography>
                <Typography variant="body1" sx={{ color: '#333' }}>
                    Find the best insurance options, compare top insurers, and make an informed decision for your coverage.
                </Typography>
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                >
                    <div>
                        <img src="https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191362.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720483200&semt=ais_user" alt="Health insurance" style={{ width: '20%', height: 'auto' }} />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-vector/people-with-icons-related-car-insurance_53876-43023.jpg" alt="Car insurance" style={{ width: '20%', height: 'auto' }} />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-vector/house-insurance-set-items_603843-482.jpg" alt="Home insurance" style={{ width: '20%', height: 'auto' }} />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-vector/illustartion-people-with-life-insurance_53876-37156.jpg" alt="Life insurance" style={{ width: '20%', height: 'auto' }} />
                    </div>
                </Carousel>
            </Box>



            {/* Types of Insurance Section */}
<Box id="types-of-insurance" sx={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#f7f7f7' }}>
    <Typography variant="h4" sx={{ color: '#2E8BC0', marginBottom: '30px' }}>
        Types of Insurance
    </Typography>
    <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {insuranceTypes.map((insurance) => (
            <Grid item xs={12} sm={6} md={3} key={insurance.type}>
                <Box
                    sx={{
                        cursor: 'pointer',
                        textAlign: 'center',
                        boxShadow: 3,
                        padding: '20px',
                        backgroundColor: '#fff',
                        '&:hover': { boxShadow: 5 },
                    }}
                    onClick={() => handleToggleSection(insurance.type)}
                >
                    {insurance.icon}
                    <Typography variant="h6" sx={{ color: '#2E8BC0' }}>
                        {insurance.type}
                    </Typography>
                </Box>
                <Collapse in={expandedSection === insurance.type}>
                    <Box
                        sx={{
                            padding: '10px',
                            marginTop: '10px',
                            backgroundColor: '#f0f8ff',
                        }}
                    >
                        {insurance.companies.map((company) => (
                            <Link
                                to={company.link}
                                key={company.name}
                                style={{
                                    textDecoration: 'none',
                                    display: 'block',
                                    margin: '10px 0',
                                }}
                            >
                                <Box
                                    sx={{
                                        padding: '10px',
                                        backgroundColor: '#ffffff',
                                        boxShadow: 2,
                                        '&:hover': { boxShadow: 5, backgroundColor: '#f9f9f9' },
                                        cursor: 'pointer',
                                    }}
                                >
                                    <Typography variant="h6" sx={{ color: '#2E8BC0' }}>
                                        {company.name}
                                    </Typography>
                                </Box>
                            </Link>
                        ))}
                    </Box>
                </Collapse>
            </Grid>
        ))}
    </Grid>
</Box>

   {/* About Us Section */}
   
<Box
  id="about-us"
  sx={{
    padding: '40px 20px',
    backgroundColor: '#e0f7fa',
    textAlign: 'center',
  }}
>
  <Typography
    variant="h4"
    sx={{
      marginBottom: '30px',
      color: '#2E8BC0'
      
    }}
  >
    About Us
  </Typography>
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
      gap: '20px',
      maxWidth: '1000px',
      marginX: 'auto',
      marginTop: '30px',
    }}
  >
    {/* Card 1 */}
    <Box
      sx={{
        position: 'relative',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fdfdfd',
        borderLeft: '5px solid #2E8BC0',
      }}
    >
      <Typography variant="h6" sx={{ color: '#2E8BC0', marginBottom: '10px' }}>
        🚀 Trusted by Millions
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: '#555', lineHeight: '1.6' }}
      >
        Over 5 million customers trust us to find the best insurance policies tailored to their needs.
      </Typography>
    </Box>

    {/* Card 2 */}
    <Box
      sx={{
        position: 'relative',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        borderLeft: '5px solid #2AB7CA',
      }}
    >
      <Typography variant="h6" sx={{ color: '#2AB7CA', marginBottom: '10px' }}>
        🔍 50+ Insurers
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: '#555', lineHeight: '1.6' }}
      >
        Compare policies from over 50 leading insurers to ensure you get the best deal.
      </Typography>
    </Box>

    {/* Card 3 */}
    <Box
      sx={{
        position: 'relative',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f7faff',
        borderLeft: '5px solid #7e94f0',
      }}
    >
      <Typography variant="h6" sx={{ color: '#7e94f0', marginBottom: '10px' }}>
        💰 Affordable Pricing
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: '#555', lineHeight: '1.6' }}
      >
        We help you find policies that offer great coverage at competitive prices.
      </Typography>
    </Box>

    {/* Card 4 */}
    <Box
      sx={{
        position: 'relative',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f5f9f6',
        borderLeft: '5px solid #6378d1 ',
      }}
    >
      <Typography variant="h6" sx={{ color: '#6378d1 ', marginBottom: '10px' }}>
        🤝 Hassle-Free Claims
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: '#555', lineHeight: '1.6' }}
      >
        Enjoy dedicated support to help you with claims when you need it most.
      </Typography>
    </Box>
  </Box>
</Box>

{/* Compare Section */}
<Box
  id="compare"
  sx={{
    padding: '40px 20px',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
  }}
>
  <Typography
    variant="h4"
    sx={{ marginBottom: '30px', color: '#2E8BC0' }}
  >
     Compare Insurers
  </Typography>
  <Typography
    variant="body1"
    sx={{
      marginBottom: '20px',
      maxWidth: '800px',
      marginX: 'auto',
      color: '#555',
      lineHeight: '1.8',
    }}
  >
    <div className="compare-section" style={{ display: 'flex', gap: '20px' }}>
      <div className="compare-card" style={{ flex: '1 1 28%', maxWidth: '28%', marginRight: '90px' }}>
        <h3 style={{ color: '#2E8BC0', fontWeight: 'normal' }}>Save Money</h3>
        <p>By comparing premiums and coverage, you can choose the policy that provides the best value for your money, avoiding overpaying for unnecessary features.</p>
      </div>
      <div className="compare-card" style={{ flex: '1 1 28%', maxWidth: '28%', marginRight: '10px' }}>
        <h3 style={{ color: '#2E8BC0' , fontWeight: 'normal'}}>Get Tailored Coverages</h3>
        <p>Each insurer offers unique plans. Comparing policies ensures that you select one that aligns perfectly with your specific requirements, whether it's health, car, home, or life insurance.</p>
      </div>
      <div className="compare-card" style={{ flex: '1 1 28%', maxWidth: '28%', marginRight: '10px' }}>
        <h3 style={{ color: '#2E8BC0' , fontWeight: 'normal'}}>Peace of Mind</h3>
        <p>Knowing you’ve selected the right policy through comparison gives you confidence that you're fully covered when you need it the most.</p>
      </div>
      <div className="compare-card" style={{ flex: '1 1 28%', maxWidth: '28%', marginRight: '10px' }}>
        <h3 style={{ color: '#2E8BC0', fontWeight: 'normal' }}>Avoid Hidden Costs</h3>
        <p>Thorough comparisons can reveal any hidden fees or exclusions in the policy that could affect you in the long run.</p>
      </div>
    </div>
  </Typography>
</Box>


{/* Partners Section */}
<Box id="partners" sx={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#e0f7fa' }}>
    <Typography variant="h4" sx={{ color: '#2E8BC0', marginBottom: '30px' }}>
        Our Partners
    </Typography>
   

    <Carousel 
        showThumbs={false} 
        infiniteLoop 
        autoPlay 
        interval={2000} 
        showStatus={false} 
        showIndicators={false} 
        centerMode={true}
        emulateTouch={true}
        dynamicHeight={false}
    >
        {/* Partner 1 */}
        <div>
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAjSXJJS8xkPzIJrEVHWukAZFe861icIvGoA&s" 
                alt="reliance" 
                style={{ width: '100%', height: '200px', objectFit: 'contain' }} 
            />
        </div>
        {/* Partner 2 */}
        <div>
            <img 
                src="https://lawtrend.in/wp-content/uploads/2024/02/manipalcigna.jpeg" 
                alt="manipal" 
                style={{ width: '100%', height: '200px', objectFit: 'contain' }} 
            />
        </div>
        {/* Partner 3 */}
        <div>
            <img 
                src="https://st1.latestly.com/wp-content/uploads/2024/10/ACKO-Insurance-Logo.jpg" 
                alt="acko" 
                style={{ width: '100%', height: '200px', objectFit: 'contain' }} 
            />
        </div>
        {/* Partner 4 */}
        <div>
            <img 
                src="https://m.economictimes.com/thumb/msid-73152868,width-1200,height-900,resizemode-4,imgsize-145233/bajaj-allianz-general-insurance.jpg" 
                alt="Partner 4" 
                style={{ width: '100%', height: '200px', objectFit: 'contain' }} 
            />
        </div>
        {/* Partner 5 */}
        <div>
            <img 
                src="https://etimg.etb2bimg.com/photo/92142828.cms" 
                alt="Policy bazaar" 
                style={{ width: '100%', height: '200px', objectFit: 'contain' }} 
            />
        </div>
        {/* Partner 6 */}
        <div>
            <img 
                src="https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/smstreet/media/media_files/bHqWPq2LaU9Er4UyAgVC.jpg" 
                alt="sbi general" 
                style={{ width: '100%', height: '200px', objectFit: 'contain' }} 
            />
        </div>
        {/* Partner 7 */}
        <div>
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9iKySpmLEcrhWMCyII8u850JOd9d_USFxew&s" 
                alt="maxlife" 
                style={{ width: '100%', height: '200px', objectFit: 'contain' }} 
            />
        </div>
        {/* Partner 8 */}
        <div>
            <img 
                src="https://yt3.googleusercontent.com/Wh6lg8rnQNeHwrW6SKEOZfTNkdxIfer_r7OIUmJ7hriti77p2fSvnUECe1ZiwHbLHCC6dDOsrw=s900-c-k-c0x00ffffff-no-rj" 
                alt="SBI Life" 
                style={{ width: '100%', height: '200px', objectFit: 'contain' }} 
            />
        </div>
    </Carousel>
</Box>

            {/* Footer */}
            <Box sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#98d9f8', color: '#ffffff' }}>
                <Typography variant="body2">&copy; 2024 InsureEase Dashboard. All rights reserved.</Typography>
            </Box>
        </Box>
    );
}

export default Dashboard;