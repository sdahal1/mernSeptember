const beatles = ['Paul', 'George', 'John', 'Ringo'];

function printNames(names) {
  function actuallyPrintingNames() {
    let index;
    let name;
    for (index = 0; index < names.length; index++) {
      name = names[index];
  
      console.log(name + ' was found at index ' + index);
    }

    console.log('name and index after loop is ' + name + ':' + index);
  }

  
  actuallyPrintingNames();

}

printNames(beatles);




//globally scoped
//beatles
//function printNames()


//var--> functionally scoped, and if its not in a function, its global
//let and const-> block scoped (scoped within the forloop they are in, and if they are not in a for loop, then whatever function its a part of)