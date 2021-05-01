const fs = require( 'fs' );
const path = require( 'path' );


// Dynamic loading of configs into runtime
const listOfConfigs = [];
const configurations = {};

fs.readdir( path.join( __dirname, '../db/schema-configs' ), ( err, files ) => {
    if ( err )
        console.log( err );
    else {
        files.forEach( file => {
            const nameOfConfig = file.split( '.js' )[0];
            listOfConfigs.push( nameOfConfig );
            const schema = require( path.join( __dirname, `../db/schema-configs/${file}` ) );
            configurations[nameOfConfig] = schema;
        } );
    }
} );

const formSubmission = (req, res) => {
    let formId = req.params.id;

    try {
        if ( listOfConfigs.includes( formId ) ) {
            // Process it to kafka
            res.json( { status: 200, ...configurations[formId] } );
        } else {
            res.json( { status: 400, message: "Bad Request" } );
        }

    } catch ( error ) {
        res.json( { status: 500, error } );
    }
};

module.exports = { formSubmission };

