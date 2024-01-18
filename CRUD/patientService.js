const Patient = require('./patient');
const patientDAO = require('./patientDAO');
const { v4: uuidv4 } = require('uuid');
const database = require('./database');

function addPatient(lastName, firstName) {
    const id = uuidv4();  
    const creationDate = new Date();
    const newPatient = new Patient(id, lastName, firstName, creationDate);
    patientDAO.insertPatient(newPatient);   
}

function getPatientList() {

    return patientDAO.retrievePatientList();
}

function savePatient(id, lastName, firstName) {
    const patientTrouve = database.patient.find(patient => patient.id === id);
    patientTrouve.lastName = lastName;
    patientTrouve.firstName = firstName;
    patientDAO.updatePatient(patientTrouve);

}

function getPatient(id) {
    return patientDAO.retrievePatient(id);
}
  

module.exports = { addPatient, getPatientList,getPatient,savePatient };
