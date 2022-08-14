var person = [
  {
    name: "kalai",
    age: 45,
    mobileNo: 123456789,
    mail: "kalaii@gmail.com",
  },
];

//for loop
for (var i = 0; i < person.length; i++) {
  var obj = person[i];

  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.mobileNo);
  console.log(obj.mail);
}
//for Each
person.forEach(function (obj) {
  console.log(obj.mobileNo);
});

//for In
for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(person[key].mail);
  }
}
//for Of
let text = "";
for (let x of person[key].name) {
  text += x;
}
console.log(text);
