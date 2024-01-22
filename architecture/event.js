class Event {
    constructor(name, patientId, payload, creationDate) {
        this.name = name;
        this.patientId = patientId;
        this.payload = payload;
        this.creationDate = creationDate || new Date();
    }
}

module.exports = Event;
