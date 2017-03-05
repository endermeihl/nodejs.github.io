/**
 * Created by ender on 2017/3/5.
 */
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + "" + person.lastName;
}
var user = new Student("Ender", "HaiLei", "Mei");
//document.body.innerHTML = greeter(user);
console.log(greeter(user));
