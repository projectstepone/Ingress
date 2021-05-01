const express = require( 'express' );

const { formSubmission } = require( '../controller/form.controller' );

const formRouter = express();

formRouter.post( '/:id', ( req, res, next ) => {
    return formSubmission( req, res );
} );


module.exports = formRouter;