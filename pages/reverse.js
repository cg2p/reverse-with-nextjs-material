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
    this.handleEchoOrReverseResponse = this.handleEchoOrReverseResponse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleReverseInputChange (event) {
    this.setState({ reverseInput: event.target.value })
  }

  handleReverseSelectChange (event) {
    this.setState({ reverseSelect: event.target.checked })
  }

  handleEchoOrReverseResponse (value) {
    this.setState({
      reverseOutput: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    let inputText = this.state.reverseInput;

    let userid = "789";
    let myurl = process.env.ECHO_SERVICE_URL;
    if (this.state.reverseSelect) {
      myurl += '/' + process.env.ECHO_SERVICE_POST_REVERSE;
    } else {
      myurl += '/' + process.env.ECHO_SERVICE_POST_ECHO;
    } 
    console.log("url %s");
    console.log("uid %s", userid);
    console.log("inputText %s", inputText);
    
    async function getEchoOrReverse(url, txt) {
      var myheaders = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });

      try {
        let response = await fetch(url, {
          method: 'POST',
          headers: myheaders,
          body: JSON.stringify({ uid: userid, inputText: txt }),
        });
  
        if (response.ok) {
          let data = await response.json(); 
          return data.text;
        } else {
          console.log('echo api service call failed.');
          let error = new Error(response.statusText);
          error.response = response;
          throw error;        
        }
      } catch (error) {
        console.error('Error thrown inside getEchoOrReverse', error); 
      }
    };

    try {
      getEchoOrReverse(myurl, inputText).then(value => this.handleEchoOrReverseResponse(value));
    } catch (error) {
      console.error(
        'Error caught outside.',
        error
      );
      this.setState({ error: error.message });
    }; 
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
