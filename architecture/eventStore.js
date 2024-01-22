const Event = require('./event');
const eventList = [];

function addEvent(name, patientId, payload) {
    const newEvent = new Event(name, patientId, payload);
    eventList.push(newEvent);
    console.log('EVENT ADDED :', newEvent);
}



module.exports = { eventList, addEvent };
