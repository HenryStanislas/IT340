const Patient = require('./patient');
const patientDAO = require('./patientCommandDAO');
const database = require('./database');
const cache = require('./cache.js');
const EventStore = require('./eventStore');

function addPatient(lastName, firstName) {
    const id = '';
    const creationDate = new Date();
    const newPatient = new Patient(id, lastName, firstName, creationDate);
    patientDAO.insertPatient(newPatient);
    patientDAO.insertPatientList(newPatient);  
    EventStore.addEvent('patientAdded', newPatient.id, newPatient);

    cache[newPatient.id] = { id: newPatient.id, name: `${newPatient.lastName} ${newPatient.firstName}` };
}

function savePatient(id, lastName, firstName) {
    const restoredPatient = restorePatient(id);

    if (restoredPatient) {
        restoredPatient.lastName = lastName;
        restoredPatient.firstName = firstName;

        EventStore.addEvent('patientSaved', restoredPatient.id, restoredPatient);

        cache[id].name = `${lastName} ${firstName}`;
    } else {
        console.error(`Patient with id ${id} not found.`);
    }
}



function restorePatient(id) {
    const patientEvents = EventStore.eventList.filter(event => event.patientId === id);

    const restoredPatient = patientEvents.reduce((acc, event) => {
        switch (event.name) {
            case 'patientAdded':
            case 'patientSaved':
                return event.payload;

        }
    }, null);

    return restoredPatient;
}

module.exports = { addPatient, savePatient,restorePatient };
