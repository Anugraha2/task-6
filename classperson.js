class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.country = country;
      this.city = city;
    }
    getFullName() {
      const fullName = (this.firstName + ' ' + this.lastName);
      return fullName;
    }
  
  displayinfo() {
      const details = ( "Age:" + this.age + " " + "Country:" + this.country + " " + "City:" +this.city);   
      return details; 
  }
}
  const person1 = new Person('Anugraha', 'SA', 27, 'India', 'Chennai')
  console.log(person1.getFullName());
  console.log(person1.displayinfo());

  