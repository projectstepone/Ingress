const kafka = require('kafka-node')

const configPath = process.env.CONFIG_PATH
                    ? process.env.CONFIG_PATH
                    : "../configs/ingress.json"
const config = require(configPath)

const clientId = config.kafka.clientId;
const brokers = config.kafka.brokers;
const topic = config.kafka.defaultTopic;

const client = new kafka.KafkaClient({kafkaHost: brokers});

const producer = new kafka.HighLevelProducer(client, {
    requireAcks: -1,
    ackTimeoutMs: 100,
    partitionerType: 2
});

 const addToKafkaQueue = async ( formConfigId, messageValue ) => {
    try {
       await producer.send( [{
            topic: topic,
            messages: JSON.stringify( { body: messageValue, id: formConfigId })
        }] , function (err, data) {
            if(data) return true;
            if(err)  {
                console.log("Error: " + err);
                return false;
            }
        });
    } catch( error ) {
        console.error("Error" + e);
    }
};

// await producer.disconnect();

module.exports = { addToKafkaQueue };

