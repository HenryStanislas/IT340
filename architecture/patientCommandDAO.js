const database = require('./database');


function insertPatient(patient) {
    database.patient.push(patient);
    console.log('patients dans la db:', database.patient);

}

function insertPatientList(patient) {
    database.patientList.push({ id: patient.id, lastName: patient.lastName, firstName: patient.firstName });
    console.log('PATIENTS DAN SLA DV:', database.patientList);
}


function updatePatient(updatedPatient) {
    const index = database.patient.findIndex(patient => patient.id === updatedPatient.id);
    database.patient[index] = updatedPatient;
    console.log('patient mis a jour:', updatedPatient);
}

function updatePatientList(updatedPatient) {
    const index = database.patient.findIndex(patient => patient.id === updatedPatient.id);
    database.patient[index] = updatedPatient;
    console.log('patient mis a jour:', updatedPatient);
}

module.exports = { insertPatient, updatePatient,insertPatientList,updatePatientList };
