const { Kafka } = require( 'kafkajs' );

const configPath = process.env.CONFIG_PATH
                    ? process.env.CONFIG_PATH
                    : "../configs/ingress.json"
const config = require(configPath)

const clientId = config.kafka.clientId;
const brokers = config.kafka.brokers;
const topic = config.kafka.defaultTopic;

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

