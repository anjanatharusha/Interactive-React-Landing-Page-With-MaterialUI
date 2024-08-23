import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Company History',
    description:
      'Founded in 2015, Sitemark began with a passion for impactful visuals. We have grown into a team of passionate designers crafting solutions for brands worldwide.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Mission',
    description:
      'We empower brands through creative and strategic design. We collaborate to translate your vision into visually compelling experiences.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Lead Designer',
    description:
      'Anjana Tharusha seasoned pro with 9 years of experience, Anjana brings a user-centric approach and a passion for designing.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Creativity & Excellence',
    description:
      'We believe in pushing the creative envelope, exploring innovative design solutions, and staying ahead of design trends.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Collaboration & Client Focus',
    description:
      'We take the time to understand your unique brand identity, target audience, and marketing objectives.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Professionalism & Reliability',
    description:
      'We deliver on time, every time. Clear communication and a commitment to quality are our hallmarks.',
  },
];

export default function About() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        // color: 'white',
        // bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
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
          <Typography component="h2" variant="h4">
            Who We Are
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We're a team of passionate designers crafting impactful visuals that resonate.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  // border: '1px solid',
                  // borderColor: 'grey.800',
                  // background: 'transparent',
                  // backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
