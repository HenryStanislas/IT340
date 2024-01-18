const database = require('./database');

function insertPatient(patient) {
    database.patient.push(patient);
    console.log('patients dans la db:', database.patient);
}

function retrievePatientList() {
    return database.patient.map(({ id, lastName, firstName }) => ({ id, lastName, firstName }));
}

function updatePatient(updatedPatient) {
    const index = database.patient.findIndex(patient => patient.id === updatedPatient.id);
    database.patient[index] = updatedPatient;
    console.log('patient mis a jour:', updatedPatient);
}

function retrievePatient(id) {
    const {lastName,firstName, ...patientTrouve} =database.patient.find(patient => patient.id === id);

    patientTrouve.name = lastName + ' ' + firstName;
    return {patientTrouve};

}
  
module.exports = { insertPatient, retrievePatientList,updatePatient, retrievePatient };
