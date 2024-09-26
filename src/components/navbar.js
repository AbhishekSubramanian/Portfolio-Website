import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AppBar position="sticky" style={{ background: '#333' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: 'white'}}>
          {/* Abhishek Subramanian */}
          Priyamvadha Balakrishnan
        </Typography>
        <Button color="inherit" onClick={() => handleScroll('home')}>Home</Button>
        <Button color="inherit" onClick={() => handleScroll('aboutme')}>About Me</Button>
        <Button color="inherit" onClick={() => handleScroll('skills')}>Skills</Button>
        <Button color="inherit" onClick={() => handleScroll('workexperience')}>Work Experience</Button>
        <Button color="inherit" onClick={() => handleScroll('projects')}>Projects</Button>
        <Button color="inherit" onClick={() => handleScroll('downloadresume')}>Download Resume</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
