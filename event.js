const EventEmitter = require('events');

// Init object
const MyEmitter = new EventEmitter();

// Event listeners
MyEmitter.on('event', () => console.log('Event Fired'));

// Fire event
MyEmitter.emit('event');
MyEmitter.emit('event');