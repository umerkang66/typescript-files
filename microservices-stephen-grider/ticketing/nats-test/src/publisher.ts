import nats from 'node-nats-streaming';
console.clear();

// client id should be different, if we want to create multiple instances
// ticketing is the name of project name inside nats-streaming-server
const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  // after stan client is connected
  console.log('Publisher connected to NATS');

  const data = JSON.stringify({
    id: '123',
    title: 'concert',
    price: 20,
  });

  // first is subject, second is data, third is callback that will run after published
  stan.publish('ticket:created', data, () => {
    console.log('"TICKET:CREATED" event is published');
  });
});
