const mysql = require( 'mysql' );

// Create connection
const dbConfig = {
    host: 'ingress-mysql-db',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.DATABASE
};

const connection = mysql.createConnection( dbConfig );

connection.connect( ( err ) => {
    if ( err ) {
        throw err;
    }
    console.log( 'MySql DB Connected...' );
} );

module.exports = connection;