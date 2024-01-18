const Patient = require('./patient');
const patientDAO = require('./patientDAO');
const { v4: uuidv4 } = require('uuid');

function addPatient(lastName, firstName) {
    const id = uuidv4();  
    const creationDate = new Date();
    const newPatient = new Patient(id, lastName, firstName, creationDate);
    patientDAO.insertPatient(newPatient);
}

function getPatientList() {

    return patientDAO.retrievePatientList();
}

module.exports = { addPatient, getPatientList };
