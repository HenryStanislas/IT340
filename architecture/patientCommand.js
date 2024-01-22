const Patient = require('./patient');
const patientDAO = require('./patientCommandDAO');
const database = require('./database');
const cache = require('./cache.js');

function addPatient(lastName, firstName) {
    const id = '';
    const creationDate = new Date();
    const newPatient = new Patient(id, lastName, firstName, creationDate);
    patientDAO.insertPatient(newPatient);
    patientDAO.insertPatientList(newPatient);   
    cache[newPatient.id] = { id: newPatient.id, name: newPatient.lastName + " " + newPatient.firstName };

}

function savePatient(id, lastName, firstName) {
    const patientTrouve = database.patient.find(patient => patient.id === id);
    patientTrouve.lastName = lastName;
    patientTrouve.firstName = firstName;
    patientDAO.updatePatient(patientTrouve);
    patientDAO.updatePatientList(patientTrouve);
    
    cache[id].name = lastName + " " + firstName;
}



module.exports = { addPatient, savePatient };
