function insertPatient(patient) {
    database.patient.push(patient);
    console.log('patients dans la db:', database.patient);
}


module.exports = { insertPatient };
