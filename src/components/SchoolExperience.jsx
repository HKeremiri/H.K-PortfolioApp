import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
function SchoolExperience({ school }) {
  return (    
    <Card sx={{ mb: 3, boxShadow: 1, backgroundColor: '#f2f2f2',     border: '2px solid',
      borderColor: 'primary.main',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: 3,
        borderColor: 'secondary.main',
      }, mx: { xs: 2, md: "10%" } }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <SchoolIcon fontSize="large" color="primary" />
          </Grid>
          <Grid item xs>
            <Typography variant="h6" component="div" color='orangered'>
              {school.title} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {school.subtitle} ({school.startDate} - {school.endDate})
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1">{school.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default SchoolExperience;
