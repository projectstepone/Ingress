const dotenv = require( 'dotenv' );
dotenv.config();
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();

const configRouter = require( './router/config.router' );

app.use( function ( req, res, next ) {
    res.header( "Access-Control-Allow-Origin", "*" );
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
} );

app.use( bodyParser.json() );

app.get( '/', ( req, res ) => {
    res.send( 'Backend is up and running ' );
} );

app.use( '/config', configRouter );

app.listen( process.env.PORT, () => console.log( `Ingress backend server listening on ${process.env.PORT}` ) );