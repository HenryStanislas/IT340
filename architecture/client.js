const patientService = require('./patientService');

patientService.addPatient('Doe', 'John');
patientService.addPatient('Smith', 'Alice');

const patientList = patientService.getPatientList();
console.log('liste des patients:', patientList);
