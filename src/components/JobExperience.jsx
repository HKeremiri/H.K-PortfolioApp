import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import { WorkOutline as WorkIcon } from '@mui/icons-material';

function JobExperience({ job }) { // job nesnesini alıyoruz
  return (    
    <Card sx={{ mb: 3, boxShadow: 1, backgroundColor: '#f2f2f2',     border: '2px solid',
      borderColor: 'primary.main',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: 3,
        borderColor: 'secondary.main',
      }, mx: { xs: 0, md: "10%" } }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <WorkIcon fontSize="large" color="primary" />
          </Grid>
          <Grid item xs>
            <Typography variant="h6" component="div" color='orangered'>
              {job.jobTitle} - {job.companyName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.position} ({job.startDate} - {job.endDate})
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1">{job.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default JobExperience;
