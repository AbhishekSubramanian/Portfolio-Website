import React from 'react';
import { Box, Typography } from '@mui/material';

const skillsList = [
  'Python', 'JavaScript', 'SQL', 'C++', 'Java', 'HTML', 'CSS', 'Matlab',
  'React.js', 'Node.js', 'Flask', 'MySQL', 'Material UI', 'Bootstrap',
  'Figma', 'Redux', 'Git', 'Docker', 'Linux', 'Google Cloud Platform (GCP)',
];

const Skills = () => {
  return (
    <Box id="skills" style={{ padding: '20px 0' }}>
      <Typography variant="h4" align="center">Skills</Typography>
      <Box style={{ display: 'flex', overflowX: 'auto', padding: '10px 0' }}>
        {skillsList.map((skill, index) => (
          <Box className="skill-card" key={index}>
            <Typography variant="body1">{skill}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
