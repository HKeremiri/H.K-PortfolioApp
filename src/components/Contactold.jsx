import { Box, Typography, Link, Stack } from "@mui/material";
import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";

export default function Contactold({navcolor}) {
  return (
    <Box sx={{ textAlign: "center", mt: 5 ,bgcolor:navcolor ,color:'white' ,boxShadow:1}}>
      <Typography variant="h4" fontWeight="bold"  mb={2}>
        İletişim Bilgileri
      </Typography>

      <Stack spacing={2} alignItems="center">
        <Typography variant="body1">
          <Phone sx={{ verticalAlign: "middle", mr: 1 }} />
          +90 542 668 41 81
        </Typography>

        <Typography variant="body1">
          <Email  sx={ { verticalAlign: "middle", mr: 1 ,cursor:'pointer'}}   onClick={() => (window.location.href = "mailto:halit_iri_@hotmail.com") }  />
          <Link href="mailto:halit_iri_@hotmail.com" underline="hover" sx={{cursor:'pointer'}} >
            halit_iri_@hotmail.com
          </Link>
        </Typography>

        <Typography variant="body1">
        <GitHub 
  sx={{ 
    verticalAlign: "middle", 
    mr: 1,
    cursor: 'pointer' 
  }}  
  onClick={() => window.open('https://github.com/HKeremiri', '_blank')}
/>
<Link 
  href="https://github.com/HKeremiri" 
  target="_blank" 
  underline="hover" 
  sx={{ cursor: 'pointer' }}
>
  github.com/HKeremiri
</Link>

        </Typography>

        <Typography variant="body1">
          <LinkedIn sx={{ verticalAlign: "middle", mr: 1, cursor:'pointer' }}  onClick={() => window.open('https://www.linkedin.com/in/halit-kerem-iri-0a6a25252/', '_blank')} />
          <Link href="https://www.linkedin.com/in/halit-kerem-iri-0a6a25252/" target="_blank" underline="hover"   sx={{cursor:'pointer'}}>
          linkedin.com/halit-kerem-iri
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}
