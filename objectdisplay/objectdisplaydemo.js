function displayObjectV1(){
    const person = {
        name: "John",
        age: 30,
        city: "New York"
      };

    document.getElementById('demo').innerHTML = person;
}

function displayObjectV2() {
    const person = {
      firstName: "John",
      lastName: "Doe",
      id: 5566,
      fullName: function () {
        return this.firstName + " " + this.lastName;
      }
    };
    // Display Properties
    document.getElementById("demo").innerHTML = person.firstName + "," + person.lastName + "," + person.fullName();
  }