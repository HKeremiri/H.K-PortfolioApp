import { Box, Typography, Container, Grid } from "@mui/material";
import { color } from "@mui/system";
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import {content} from './data.js';

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "center", md: 'flex-start' },
    gap: 3,
    p: 4,
    boxShadow: 1,
    borderRadius: 2,
    backgroundColor: '#f2f2f2',
    textAlign: { xs: "center", md: "left" },
    minHeight: "80vh",
    marginTop: 1,  
    border: '2px solid',
    borderColor: 'primary.main',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: 3,
      borderColor: 'secondary.main',
      
    }
    
  },
  title: {
    textAlign: "center",
    mb: 2
  },
  subtitle: {
    mb: 3,
    color: 'orangered'
  },
  description: {
    fontSize: 20,
    fontWeight: "bold",
    mb: 3
  },
  skillsContainer: {
    mt: 4
  },
  skillItem: {
    p: 1,
    border: 1,
    borderRadius: 1,
    borderColor: 'primary.main',
    textAlign: 'center'
  }
};




const SkillsList = ({ skills }) => (
  <Grid container spacing={2} sx={styles.skillsContainer}>
    {skills.map((skill, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Box sx={styles.skillItem}>
          <Typography variant="body1">
            {skill}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
);

SkillsList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default function AboutMe() {
  
  const memoizedContent = useMemo(() => content, []);

  return (
    <Container component="section">
     
      <Box sx={styles.wrapper} role="main">
        <Box component="article">
          <Typography 
            variant="h4" 
            component="h1"
            fontWeight="bold" 
            color="orangered" 
            sx={styles.title}
          >
            {memoizedContent.title}
          </Typography>

          <Typography 
            variant="h6" 
            component="h2"
            sx={styles.subtitle}
          >
            {memoizedContent.subtitle}
          </Typography>

          <Typography 
            variant="body1" 
            sx={styles.description}
          >
            {memoizedContent.description}
          </Typography>

          <Typography 
            variant="h6" 
            component="h2"
            sx={styles.subtitle}
          >
            {memoizedContent.myskill}
          </Typography>

          <SkillsList skills={memoizedContent.skills} />
        </Box>
      </Box>
    </Container>
  );
}

AboutMe.propTypes = {
  // Add props if needed in the future
};
