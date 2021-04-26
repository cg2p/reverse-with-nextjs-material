import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Layout from '../../components/Layout';
import Link from '../../components/Link';
import { useStyles } from '../../components/Styles';


import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function User() {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/user/${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout>
        <Container maxWidth="sm">
        <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
            User Page
        </Typography>
        <div>{data.name}</div>
        </Box>
        </Container>
    </Layout>
    );
}