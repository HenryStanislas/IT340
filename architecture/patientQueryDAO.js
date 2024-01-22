const database = require('./database');
const cache = require('./cache');


function retrievePatientList() {
    return database.patientList.map(({ id, lastName, firstName }) => ({ id, lastName, firstName }));
}


function retrievePatient(id) {
    // const {lastName,firstName, ...patientTrouve} =database.patient.find(patient => patient.id === id);

    // patientTrouve.name = lastName + ' ' + firstName;
    // return {patientTrouve};


        const { id: patientId, name } = cache[id];
        
        const [lastName, firstName] = name.split(' ');
        return { id: "hey ", id: patientId, name };


}

module.exports = { retrievePatient, retrievePatientList };
