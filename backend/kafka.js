const { Kafka } = require( 'kafkajs' );

const clientId = process.env.KAFKA_CLIENT_ID;
const brokers = process.env.KAFKA_BROKERS.split( ',' );
const topic = process.env.KAFKA_TOPIC;

const kafka = new Kafka( {
    clientId,
    brokers
} );


const producer = kafka.producer();


const addToKafkaQueue = async ( formConfigId, messageValue, topic = topic ) => {
    try {
        await producer.connect();
        await producer.send( {
            topic: topic,
            messages: [
                { body: messageValue, id: formConfigId },
            ],
        } );
    } catch ( error ) {
        throw error;
    }
};

// await producer.disconnect();

module.exports = { addToKafkaQueue };

