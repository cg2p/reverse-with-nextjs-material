require('dotenv').config();

module.exports = {
  serverRuntimeConfig: {
  },

  publicRuntimeConfig: {
    ECHO_SERVICE_URL: process.env.ECHO_SERVICE_URL,
    ECHO_SERVICE_GET_PING: process.env.ECHO_SERVICE_GET_PING,
    ECHO_SERVICE_POST_ECHO: process.env.ECHO_SERVICE_POST_ECHO,
    ECHO_SERVICE_POST_REVERSE: process.env.ECHO_SERVICE_POST_REVERSE,
    ECHO_SERVICE_GET_ECHOES: process.env.ECHO_SERVICE_GET_ECHOES,   
  }
  /*
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    ECHO_SERVICE_URL: process.env.ECHO_SERVICE_URL,
    ECHO_SERVICE_GET_PING: process.env.ECHO_SERVICE_GET_PING,
    ECHO_SERVICE_POST_ECHO: process.env.ECHO_SERVICE_POST_ECHO,
    ECHO_SERVICE_POST_REVERSE: process.env.ECHO_SERVICE_POST_REVERSE,
    ECHO_SERVICE_GET_ECHOES: process.env.ECHO_SERVICE_GET_ECHOES,
  },
  */
}


