import { useState } from "react";
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Button, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

export default function Portfolio() {
  const [projects] = useState([
    { title: "E-Ticaret Uygulaması", description: "React & .NET Core ile tam entegre e-ticaret platformu.", link: "#" },
    { title: "Blog Sitesi", description: "ASP.NET Core MVC ile dinamik içerik yönetimi.", link: "#" },
    { title: "Gerçek Zamanlı Sohbet Uygulaması", description: "SignalR kullanarak canlı sohbet uygulaması.", link: "#" },
  ]);

  return (
    <Container maxWidth="lg">
      {/* Header */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Halit Kerem İri</Typography>
          <Button color="inherit" href="#projects">Projeler</Button>
          <Button color="inherit" href="#contact">İletişim</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h3" fontWeight="bold">Merhaba, Ben Halit Kerem İri 👋</Typography>
        <Typography variant="h5" color="textSecondary" sx={{ mt: 2 }}>
          .NET Core & React Geliştiricisiyim
        </Typography>
      </Container>

      {/* Projects */}
      <Container id="projects" sx={{ mt: 5 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold">Projelerim</Typography>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "100%", boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography color="textSecondary">{project.description}</Typography>
                  <Button href={project.link} color="primary" sx={{ mt: 1 }}>Detaylar</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact */}
      <Container id="contact" sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4" fontWeight="bold">İletişim</Typography>
        <Grid container justifyContent="center" spacing={2} sx={{ mt: 2 }}>
          <Grid item>
            <IconButton color="primary" href="https://github.com">
              <GitHub fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary" href="https://linkedin.com">
              <LinkedIn fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary" href="mailto:example@example.com">
              <Email fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Container sx={{ textAlign: "center", mt: 5, mb: 3 }}>
        <Typography variant="body2" color="textSecondary">
          © 2025 Halit Kerem İri | Tüm Hakları Saklıdır
        </Typography>
      </Container>
    </Container>
  );
}
