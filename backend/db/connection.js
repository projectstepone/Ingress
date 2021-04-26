const mysql = require( 'mysql' );

// Create connection
const connection = mysql.createConnection( {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
} );

connection.connect( ( err ) => {
    if ( err ) {
        throw err;
    }
    console.log( 'MySql DB Connected...' );
} );

module.exports = connection;