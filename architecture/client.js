const patientService = require('./patientService');
const patientCommand = require('./patientCommand');
const patientQuery = require('./patientQuery');
const patientQueryDAO = require('./patientQueryDAO');

// patientService.addPatient('doe', 'john');
// patientService.addPatient('daniel-day', 'lewis');
// patientService.addPatient('mbappe', 'kyllian');


// const patientList = patientService.getPatientList();
// console.log('liste des patients:', patientList);


// patientService.savePatient(1, 'bob', 'bob2');


// const patient = patientService.getPatient(2);

// console.log('patient:', patient);

patientCommand.addPatient('ledger', 'heath');
patientCommand.addPatient('hopkins', 'anthony');

const patientList = patientQuery.getPatientList();
console.log('liste des patients:', patientList);

patientCommand.savePatient(1, 'day-lewis', 'daniel');


const patient = patientQuery.getPatient(1);

console.log('patient:', patient);