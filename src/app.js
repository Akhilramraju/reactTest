// ## app.js ##
//
// This is where we set up our web application using Express. We create the
// app and set up routes which will respond to requests from the client's
// web browser.

const path = require('path');
const express = require('express');

// Create a new Express app
const app = express();

// Serve up our static assets from 'dist' (this includes our client-side
// bundle of JavaScript). These assets are referred to in the HTML using
// <link> and <script> tags.
app.use('/assets', express.static(path.resolve(__dirname, '..', 'dist')));

// Set up the index route
app.get('/', (req, res) => {
  // The HTML is pretty barebones, it just provides a mount point
  // for React and links to our styles and scripts.
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
     <h1>React project</h1>
      </head>
      <body>
        <div id="root"></div>
     
      </body>
    </html>`;

  // Respond with the HTML
 " res.sendFile(path.join(__dirname,"./index.html"));"
});

// Export the Express app
module.exports = app;

//   <link rel="stylesheet" type="text/css" href="/assets/css/app.css">
//   <script src="/assets/js/vendor.js"></script>
//<script src="/assets/js/app.js"></script>
