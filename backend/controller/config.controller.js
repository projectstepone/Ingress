const fs = require( 'fs' );
const path = require( 'path' );


// Dynamic loading of configs into runtime
const listOfConfigs = [];
const configurations = {};

fs.readdir( path.join( __dirname, '../db/schema-configs' ), ( err, files ) => {
    if ( err )
        console.log( err );
    else {
        console.log( "List of loaded configurations" );
        files.forEach( file => {
            console.log( file );

            const nameOfConfig = file.split( '.js' )[0];
            listOfConfigs.push( nameOfConfig );
            const schema = require( path.join( __dirname, `../db/schema-configs/${file}` ) );
            configurations[nameOfConfig] = schema;
        } );
    }
} );




const fetchAConfig = ( req, res ) => {
    let configId = req.params.id;

    try {
        if ( listOfConfigs.includes( configId ) ) {
            res.json( configurations[configId] );
        } else {
            res.json( { status: 404, message: "Not found" } );
        }


    } catch ( error ) {
        res.json( { status: 500, error } );
    }
};

module.exports = { fetchAConfig };

