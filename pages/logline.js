import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'

import Layout from '../components/Layout';
//import Link from '../components/Link';
import { useStyles } from '../components/Styles';

const { publicRuntimeConfig } = getConfig();
const { service_host, service_port, service_api } = publicRuntimeConfig;

function useStylesHook(Component) {
  return function WrappedComponent(props) {
    const classes = useStyles();
    return <Component {...props} classes={classes} />;
  }
}

class Logline extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loglineText: '',
      error: '',
      loglineAnalysis: ''
    };
    this.handleLoglineTextChange = this.handleLoglineTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSetLoglineAnalysis = this.handleSetLoglineAnalysis.bind(this);
  }

  handleLoglineTextChange (value) {
    this.setState({ loglineText: event.target.value })
  }

  handleSetLoglineAnalysis (value) {
    this.setState({
      loglineAnalysis: value
    });
    console.log(this.setState.loglineAnalysis);
  }
  
  async handleSubmit (event) {
    event.preventDefault()
    const loglineText = this.state.loglineText;
    const url = 'http://' + service_host + ':' + service_port + '/' + service_api;
    console.log('url is %s', url);
    
    async function getLoglineAnalysis(loglineText) {
      var myheaders = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });

      try {
        let response = await fetch(url, {
          method: 'POST',
          headers: myheaders,
          body: JSON.stringify({ loglineText })
        });
  
        if (response.ok) {
          let data = await response.json(); 
          console.log("response ok: data = %s", Object.values(data));
          return Object.values(data);
        } else {
          console.log('logline service call failed.');
          let error = new Error(response.statusText);
          error.response = response;
          throw error;        
        }
      } catch (error) {
        console.error('Error thrown inside   getLogLineAnalysis', error); 
      }
    };

    try {
      getLoglineAnalysis(loglineText).then(value => this.handleSetLoglineAnalysis(value));
    } catch (error) {
      console.error(
        'Error caught outside.',
        error
      );
      this.setState({ error: error.message });
    }; 

  }
  
  render () {
    const classes = this.props.classes;

/*
    const items = this.state.loglineAnalysis.map(function(item){
      return <li> {item} </li>;
    });
            <ul>
              {items}
            </ul>
*/
    return (
      <Layout>
        <Container>
        <Box my={4}>
            <form onSubmit={this.handleSubmit} className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="text"
                id="loglineText"
                label="Logline"
                name="loglineText"
                autoComplete="email"
                autoFocus
                value={this.state.loglineText}
                onChange={this.handleLoglineTextChange}
              />
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              >
                Analyse
              </Button>
              Logline analysis: 
              <p>
              {this.state.loglineAnalysis}
              </p>
              <p className={`error ${this.state.error && 'show'}`}>
                {this.state.error && `Error: ${this.state.error}`}
              </p>
            </form>   
        </Box>
        </Container>
      </Layout>
    )
  }
} 
//export default Logline;

export default useStylesHook(Logline);


/*
     <Layout>
        <div className='logline'>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='logline text'>Logline</label>

            <input
              type='text'
              id='loglineText'
              name='loglineText'
              value={this.state.loglineText}
              onChange={this.handleLoglineTextChange}
            />
            
            <button type='submit'>Go</button>

            <p className={`error ${this.state.error && 'show'}`}>
              {this.state.error && `Error: ${this.state.error}`}
            </p>
          </form>

          Logline analysis: 
            <p>
            {this.state.loglineAnalysis}
            </p>
            
        
        </div>
        <style jsx>{`
  .logline {
    max-width: 340px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  form {
    display: flex;
    flex-flow: column;
  }

  label {
    font-weight: 600;
  }

  input {
    padding: 8px;
    margin: 0.3rem 0 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .error {
    margin: 0.5rem 0 0;
    display: none;
    color: brown;
  }

  .error.show {
    display: block;
  }
`}</style>
     </Layout>
*/
