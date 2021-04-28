const { Kafka } = require( 'kafkajs' );

const clientId = process.env.KAFKA_CLIENT_ID;
const brokers = process.env.process.env.KAFKA_BROKERS.split( ',' );

const kafka = new Kafka( {
    clientId,
    brokers
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

