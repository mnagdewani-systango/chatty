'use strict'

var init = function () {
  if (process.env.NODE_ENV === 'production') {
    console.log('Production ENVs')
    return {
      db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT
      },
      sessionSecret: process.env.SESSION_SECRET,
      echoSentMessage: process.env.ECHO_SENT_MESSAGE,
      noOfRecordsPerPage: process.env.NO_OF_RECORDS_PER_PAGE,
      enableDemoClinet: process.env.ENABLE_DEMO_CLIENT
    }
  } else {
    return require('./config.json')
  }
}

module.exports = init()
