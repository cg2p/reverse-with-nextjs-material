import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Layout from '../components/Layout';
import { useStyles } from '../components/Styles';

import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MyNewPage() {
  const classes = useStyles();
  const { data, error } = useSwr('/api/ready', fetcher);

  if (error) return <div>Failed to connect to database</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout>
      <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          My New Page
        </Typography>
          <ul>
            <li>{data.status}</li>
            <li>{data.checks}</li>
            <li>{data.text}</li>
          </ul>
        </Box>
      </Container>
    </Layout>    
  );
}


/*         {data.status}
            {data.map((user) => (
              <li key={user.id}>
                <Link href="/user/[id]" as={`/user/${user.id}`}>
                  <a>{`User ${user.id}`}</a>
                </Link>
              </li>
            ))}*/