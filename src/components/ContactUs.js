import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ContactForm from './ContactForm';


export default function ContactUs() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Contact Us
        </Typography>
        <Typography variant="body1" color="text.secondary">
            No project is too big or too small! Drop us a line, share your creative vision, and let's see how we can collaborate to bring your brand to life.
        </Typography>
      </Box>
      <ContactForm />
    </Container>
  );
}
