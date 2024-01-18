let compteurId = 0;
function generateId(){
    compteurId++
    return compteurId
}

class Patient {
    constructor(id, lastName, firstName, creationDate) {
      this.id = generateId();
      this.lastName = lastName;
      this.firstName = firstName;
      this.creationDate = creationDate;
    }
  }
  
  module.exports = Patient;