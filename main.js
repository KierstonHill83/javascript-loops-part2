  var students = ["joe", "carl", "rachel", "derek", "lily"];


//problem 1
  for(var i = 0; i < students.length - 1; i++) {
    console.log(students[i]);
  }


//problem 2
  for (var i = 0; i < students.length; i++) {
    if(i % 2 === 0) {
      console.log(students[i]);
    }
  }

  for (var i = 0; i < students.length; i+=2) {
    console.log(students[i]);
  }


//problem 3
  // for (var i = 0; i < students.length; i++) {
  //   var newList = students.reverse(i);
  // }
  //  console.log(newList);

  for (var i = students.length - 1; i >= 0; i--) {
    console.log(students[i]);
  }


//problem 4
  for (var i = 0; i < students.length; i++) {
    if(i === 0) {
      console.log(students[i]);
    } else if(i === students.length - 1) {
      console.log(students[i]);
    } else {
      console.log(students[i]);
      console.log(students[i]);
    }
  };


  for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
    if (i > 0 && i < students.length - 1) {
      console.log(students[i]);
    }
  };
