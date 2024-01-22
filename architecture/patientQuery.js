const Patient = require('./patient');
const patientCommandDAO = require('./patientCommandDAO');
const patientQueryDAO = require('./patientQueryDAO');

const { v4: uuidv4 } = require('uuid');
const database = require('./database');


function getPatientList() {

    return patientQueryDAO.retrievePatientList();
}

function getPatient(id) {
    return patientQueryDAO.retrievePatient(id);
}


module.exports = { getPatientList, getPatient };
