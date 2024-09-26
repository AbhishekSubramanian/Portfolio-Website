import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutMe = () => {
  return (
    <Box id="aboutme">
      <Typography variant="h4">About Me</Typography>
      <Typography mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. I am a skilled software developer with a passion for machine learning and full-stack development. Currently pursuing my master's in Computer Engineering at Virginia Tech.
      </Typography>
    </Box>
  );
};

export default AboutMe;
