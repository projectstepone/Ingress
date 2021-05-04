const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
const path = require( 'path' );

const configRouter = require( './router/config.router' );
const formRouter = require( './router/form.router' );
app.use(express.static('build'))

app.use( bodyParser.json() );

app.use( '/config', configRouter );
app.use( '/form', formRouter );
app.use((req,res,next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen( process.env.PORT || 4000, () => console.log( `Ingress backend server listening on ${process.env.PORT || 4000}` ) );
