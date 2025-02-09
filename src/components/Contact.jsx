import { Box, Typography, Link, Stack } from "@mui/material";
import { Email, GitHub, LinkedIn, Phone  } from "@mui/icons-material";
import {  IconButton } from "@mui/material";


export default function Contact({navcolor}) {
  return (
    <Box sx={{ textAlign: "center", mt: 5 ,bgcolor:navcolor ,color:'white' ,boxShadow:1}}>
      <Typography variant="h4" fontWeight="bold"  mb={2}>
        İletişim Bilgileri
      </Typography>
  

      <Stack spacing={2} alignItems="center">
        <Typography variant="body1">
        <IconButton >
       
          <Phone sx={{ verticalAlign: "middle", mr: 1 }} />
          </IconButton>

          +90 542 668 41 81
        </Typography>

        <Typography variant="body1">
        <IconButton >
          <Email  sx={ { verticalAlign: "middle", mr: 1 ,cursor:'pointer'}}   onClick={() => (window.location.href = "mailto:halit_iri_@hotmail.com") }  />
</IconButton>
          <Link href="mailto:halit_iri_@hotmail.com" underline="hover" sx={{cursor:'pointer' ,color:'white'}} >
            halit_iri_@hotmail.com
          </Link>
        </Typography>

        <Typography variant="body1">
    <IconButton>   <GitHub 
  sx={{ 
    verticalAlign: "middle", 
    mr: 1,
    cursor: 'pointer' 
  }}  
  onClick={() => window.open('https://github.com/HKeremiri', '_blank')}
/></IconButton> 
<Link 
  href="https://github.com/HKeremiri" 
  target="_blank" 
  underline="hover" 
  sx={{ cursor: 'pointer', color:'white' }}
>
  github.com/HKeremiri
</Link>

        </Typography>

        <Typography variant="body1">
          <IconButton>
          <LinkedIn sx={{ verticalAlign: "middle", mr: 1, cursor:'pointer' }}  onClick={() => window.open('https://www.linkedin.com/in/halit-kerem-iri-0a6a25252/', '_blank')} />
          </IconButton>
          <Link href="https://www.linkedin.com/in/halit-kerem-iri-0a6a25252/" target="_blank" underline="hover"   sx={{cursor:'pointer',color:'white'}}>
          linkedin.com/halit-kerem-iri
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}
