import React from 'react';
import { Component } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';
import { useStyles } from '../components/Styles';

//import getConfig from 'next/config'

/*
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
console.log({serverRuntimeConfig, publicRuntimeConfig});
*/
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
      reverseSelect: false,
      reverseOutput: ''
    };
    this.handleReverseInputChange = this.handleReverseInputChange.bind(this);
    this.handleReverseSelectChange = this.handleReverseSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
    console.log("echo_service_url", process.env.ECHO_SERVICE_URL);
    console.log("echo_service_get_ping", process.env.ECHO_SERVICE_GET_PING);
    console.log("echo_service_post_echo", process.env.ECHO_SERVICE_POST_ECHO);
    console.log("echo_service_post_reverse", process.env.ECHO_SERVICE_POST_REVERSE);
    console.log("echo_service_get_echoes", process.env.ECHO_SERVICE_GET_ECHOES);
  }

  handleReverseInputChange (event) {
    this.setState({ reverseInput: event.target.value })
  }

  handleReverseSelectChange (event) {
    this.setState({ reverseSelect: event.target.checked })
  }

  handleSubmit(event) {
    event.preventDefault();

    var rev = this.state.reverseInput;
    if (this.state.reverseSelect) {
      var rev = this.state.reverseInput.split("").reverse().join("");
    }
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
              label="Input Text"
              name="reverseInput"
              autoComplete="reverseInput"
              autoFocus
              value={this.state.reverseInput}
              onChange={this.handleReverseInputChange}
            />
            <FormControlLabel
              control={<Checkbox onChange={this.handleReverseSelectChange} value={this.state.reverseSelect} color="primary" />}
              label="Reverse Text"
              />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Go
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
