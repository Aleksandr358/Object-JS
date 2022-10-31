function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const student1 = {
    name: "Alex", 
    ownCity: "Tver",
    age: 19,
    course: "Frontend"
  };

  console.log(showProps(student1, "same"));  // false
  console.log(showProps(student1, "name"));  // true