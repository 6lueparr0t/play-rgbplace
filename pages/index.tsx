import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Template from '../src/Template';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg" disableGutters>
      <Template content={<h1>Hello, World!</h1>} />
    </Container>
  );
};

export default Home;