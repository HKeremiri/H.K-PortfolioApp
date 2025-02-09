import { Card, CardMedia, Container } from "@mui/material";

export default function MyPhoto() {
  return (
    <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", my: 4, marginTop:12 }}>
      <Card sx={{ borderRadius: "16px", boxShadow: 3, overflow: "hidden", width: "100%" , transition: "transform 0.3s ease-in-out",
          "&:hover": { transform: "scale(1.05)" }   }}>
        <CardMedia
          component="img"
          image="/images/takimelbise.jpeg" // Resmin "public/images/" klasöründe olduğundan emin ol
          alt="Profil Fotoğrafı"
          sx={{
            maxHeight: "1000px",  // Çok büyük olmaması için sınır koyduk
            width: "100%", 
            objectFit: "cover", // Resmin bozulmadan görünmesini sağlar
          }}
        />
      </Card>
    </Container>
  );
}
