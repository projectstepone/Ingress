var mysql = require( 'mysql' );
const db = require( '../db/connection' );
const { v4: uuidv4 } = require( 'uuid' );

const fetchAConfig = ( req, res ) => {
    let configId = req.params.id;

    try {
        let sql = `SELECT * FROM ingress.formConfiguration WHERE form_config_id = ?;`;
        let inserts = [configId];
        let query = mysql.format( sql, inserts );

        db.query( query, ( error, result, sqlFields ) => {
            if ( error ) {
                res.json( { status: 400, error } );
            }
            else {
                res.json( { status: 200, result } );
            }
        } );
    } catch ( error ) {
        res.json( { status: 500, error } );
    }
};

module.exports = { fetchAConfig };

