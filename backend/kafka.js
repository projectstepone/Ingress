const { Kafka } = require( 'kafkajs' );

const kafka = new Kafka( {
    clientId: process.env.CLIENT_ID,
    brokers: process.env.BROKERS
} );


const producer = kafka.producer();

await producer.connect();

const addToKafkaQueue = ( topic = "Plasma Donation", messageValue ) => {
    await producer.send( {
        topic: topic,
        messages: [
            { value: messageValue },
        ],
    } );
};

// await producer.disconnect();

module.exports = { addToKafkaQueue };

