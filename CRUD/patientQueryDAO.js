function retrievePatientList() {
    return database.patient.map(({ id, lastName, firstName }) => ({ id, lastName, firstName }));
}
