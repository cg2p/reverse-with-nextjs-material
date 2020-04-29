import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Layout from '../components/Layout';
import Link from '../components/Link';
import { useStyles } from '../components/Styles';

export default function About() {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About page
        </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the main page
        </Button>
      </Box>
      </Container>
    </Layout>
  );
}
