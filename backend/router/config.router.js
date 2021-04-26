const express = require( 'express' );

const { fetchAConfig } = require( '../controller/config.controller' );

const configRouter = express();

configRouter.get( '/:id', ( req, res, next ) => {
    return fetchAConfig( req, res );
} );

module.exports = configRouter;