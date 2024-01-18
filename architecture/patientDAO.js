const database = require('./database');

function insertPatient(patient) {
    database.patient.push(patient);
    console.log('patients dans la db:', database.patient);
}

function retrievePatientList() {
    return database.patient.map(({ id, lastName, firstName }) => ({ id, lastName, firstName }));
}

module.exports = { insertPatient, retrievePatientList };
