import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Layout from '../components/Layout';
import { useStyles } from '../components/Styles';

export default function MyNewPage() {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          My New Page
        </Typography>
      </Box>
      </Container>
    </Layout>
    
  );
}
