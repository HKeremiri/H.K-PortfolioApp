import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, Container } from "@mui/material";

import {projects} from './data.js';

export default function MyProjects() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" fontWeight="bold" color="orangered" sx={{ textAlign: "center", mb: 4 }}>
        Projelerim
      </Typography>
      
      <Grid container   spacing={{ xs: 10, sm: 4, md: 6, lg: 10 }}   >
        {projects.map((project) => (
          <Grid item xs={12} sm={12} md={6} key={project.id} sx={{textAlign:"center" , }}  >
            <Card sx={{ boxShadow: 3, borderRadius: 2, backgroundColor:"#f2f2f2",
               border: '2px solid',
    borderColor: 'primary.main',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: 3,
      borderColor: 'secondary.main',
    } }}  > 
              <CardMedia component="img" height="180" image={project.image} alt={project.title} />
              <CardContent>
                <Typography variant="h6" color="orangered" fontWeight="bold">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{project.description}</Typography>
                <Button
                  variant="contained"
                  color="primary"                 
                  size="small"
                  sx={{ mt: 2 ,backgroundColor:'orangered'}}
                  href={project.link}
                  target="_blank"
                >
                  Projeyi Gör
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
