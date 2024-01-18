const patientService = require('./patientService');

patientService.addPatient('doe', 'john');
patientService.addPatient('daniel-day', 'lewis');
patientService.addPatient('mbappe', 'kyllian');


const patientList = patientService.getPatientList();
console.log('liste des patients:', patientList);


patientService.savePatient(1, 'bob', 'bob2');


const patient = patientService.getPatient(2);

console.log('patient:', patient);