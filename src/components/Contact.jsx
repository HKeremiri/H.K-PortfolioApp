import { Box, Typography, Link, Stack, IconButton } from "@mui/material";
import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";
import PropTypes from 'prop-types';

export default function Contact({ navcolor, contact }) {
  return (
    <Box
      id="contact"
      sx={{
        textAlign: "center",
        mt: 5,
        bgcolor: navcolor,
        color: "white",
        boxShadow: 1,
        p: 3,
        borderRadius: 2
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2}>
        {contact.title}
      </Typography>

      <Stack spacing={2} alignItems="center">
        <Typography variant="body1">
          <IconButton>
            <Phone sx={{ verticalAlign: "middle", mr: 1 }} />
          </IconButton>
          {contact.phone.label}
        </Typography>

        <Typography variant="body1">
          <IconButton onClick={() => (window.location.href = `mailto:${contact.email.address}`)}>
            <Email sx={{ verticalAlign: "middle", mr: 1, cursor: "pointer" }} />
          </IconButton>
          <Link
            href={`mailto:${contact.email.address}`}
            underline="hover"
            sx={{ cursor: "pointer", color: "white" }}
          >
            {contact.email.address}
          </Link>
        </Typography>

        <Typography variant="body1">
          <IconButton onClick={() => window.open(contact.github.url, "_blank")}>
            <GitHub sx={{ verticalAlign: "middle", mr: 1, cursor: "pointer" }} />
          </IconButton>
          <Link
            href={contact.github.url}
            target="_blank"
            underline="hover"
            sx={{ cursor: "pointer", color: "white" }}
          >
            {`github.com/${contact.github.username}`}
          </Link>
        </Typography>

        <Typography variant="body1">
          <IconButton onClick={() => window.open(contact.linkedin.url, "_blank")}>
            <LinkedIn sx={{ verticalAlign: "middle", mr: 1, cursor: "pointer" }} />
          </IconButton>
          <Link
            href={contact.linkedin.url}
            target="_blank"
            underline="hover"
            sx={{ cursor: "pointer", color: "white" }}
          >
            {contact.linkedin.label}
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}

Contact.propTypes = {
  navcolor: PropTypes.string.isRequired,
  contact: PropTypes.shape({
    title: PropTypes.string.isRequired,
    phone: PropTypes.shape({
      label: PropTypes.string.isRequired
    }),
    email: PropTypes.shape({
      address: PropTypes.string.isRequired
    }),
    github: PropTypes.shape({
      username: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }),
    linkedin: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  }).isRequired
};
