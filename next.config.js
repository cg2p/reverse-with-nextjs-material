const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } = require('next/constants')
  
  // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
  module.exports = phase => {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD 
  
    console.log(`isDev:${isDev} isProd:${isProd}`)
  
    const env = {
        MY_ENV: 'my_env',
      ECHO_SERVICE_URL: (() => {
        if (isDev) return 'http://localhost:3001'
        if (isProd) return process.env.ECHO_SERVICE_URL
      })(),
      ECHO_SERVICE_GET_PING: (() => {
        if (isDev) return ''
        if (isProd) return process.env.ECHO_SERVICE_GET_PING
      })(),
      ECHO_SERVICE_POST_ECHO: (() => {
        if (isDev) return 'echo'
        if (isProd) return process.env.ECHO_SERVICE_POST_ECHO
      })(),
      ECHO_SERVICE_POST_REVERSE: (() => {
        if (isDev) return 'reverse'
        if (isProd) return process.env.ECHO_SERVICE_POST_REVERSE
      })(),
      ECHO_SERVICE_GET_ECHOES: (() => {
        if (isDev) return 'echoes'
        if (isProd) return process.env.ECHO_SERVICE_GET_ECHOES
      })(),
    }
  
    // next.config.js object
    return {
      env,
    }
  }

