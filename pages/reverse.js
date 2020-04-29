import React from 'react';
import { Component } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';
import { useStyles } from '../components/Styles';

function useStylesHook(Component) {
  return function WrappedComponent(props) {
    const classes = useStyles();
    return <Component {...props} classes={classes} />;
  }
}

class Reverse extends Component {
  constructor (props) {
    super(props)

    this.state = {
      reverseInput: '',
      error: '',
      reverseOutput: ''
    };
    this.handleReverseInputChange = this.handleReverseInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleReverseInputChange (valuet) {
    this.setState({ reverseInput: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    var txt = this.state.reverseInput;
    var rev = txt.split("").reverse().join("");
    this.setState({ reverseOutput: rev});
    console.log(rev);
  }

  render() {
    const classes = this.props.classes;

    return (
      <Layout>
        <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h5" component="h1" gutterBottom>
            Reverse
          </Typography>
          <form onSubmit={this.handleSubmit} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="reverseInput"
              label="Input Text to Reverse"
              name="reverseInput"
              autoComplete="reverseInput"
              autoFocus
              value={this.state.reverseInput}
              onChange={this.handleReverseInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Reverse It !
            </Button>
          </form>
          <br />
          <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  {this.state.reverseOutput }
                </Paper>
              </Grid>
          </Grid>
        </Box>
        </Container>
      </Layout>
    );
  }
}

export default useStylesHook(Reverse);
