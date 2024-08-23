import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Image from '@mui/material';
import WelcomeMessage from './WelcomeMessage';


import CoverImage from './hero-cover.jpg';

export default function Home() {

  const [userName, setUserName] = useState('');

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
            >
              Hi {userName}, <WelcomeMessage />
          </Typography>

          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            
            
            Tell your story.
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
               Visually.
            </Typography>
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            We transform brands with creative solutions that drive results.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >

            <NavLink to="/contact">
              <Button variant="contained" color="primary">
                <MenuItem >
                  Let's discuss your project
                </MenuItem>
              </Button>
            </NavLink>
          </Stack>
          
          {/* User Name */}
          <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    id="userName"
                    label="Your Name"
                    name="userName"
                    value={userName}
                    fullWidth
                    autoFocus
                    onChange={(e)=>{setUserName(e.target.value)}}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Stack>

        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            // backgroundImage: 'url("https://images.app.goo.gl/Bs8kGEgFw63tko677")',
            // backgroundImage:
            //   theme.palette.mode === 'light'
            //     ? <img
            //     src={
            //       CoverImage
            //     }
            //     // style={logoStyle}
            //     alt="logo of sitemark"
            //   />
            //     : 'url("/static/images/templates/templates-images/hero-dark.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        >
          <img width={1150}
          
          src={CoverImage} alt={'ggg'}/>
          {/* <CoverImage /> */}
          {/* <img src='https://images.app.goo.gl/Bs8kGEgFw63tko677' alt='Cover Image'></img> */}
        </Box>
      </Container>
    </Box>
  );
}
