import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navigation from '../header/Navigation';
import SearchBox from '../SearchBox';

import Link from '../Link';
import Copyright from '../Copyright';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg" disableGutters>
      <Navigation />
      <SearchBox />
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          한줄코딩
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;