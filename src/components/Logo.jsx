import { Box, Typography } from "@mui/material";

export default function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <img
        src="/images/halit.jpg"
        alt="Logo"
        style={{
          width: 75, 
          height: 75,
          borderRadius: "50%",
          objectFit: "cover",
          cursor:'pointer'
        }}
      />
      <Typography variant="h6" fontWeight="bold">
        Halit Kerem
      </Typography>
    </Box>
  );
}
