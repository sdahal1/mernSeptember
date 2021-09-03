const groceryList = Object.freeze([
    { item: "carrots",haveIngredient: false },
    { item: "onions",haveIngredient: true  },
    { item: "celery",haveIngredient: false },
    { item: "cremini mushrooms", haveIngredient: false },
    { item: "butter",haveIngredient: true  }
  ]);
  


// groceryList.push({item:"turmeric", haveIngredient:true})
// console.log(groceryList)

const addedTurmeric = [...groceryList, {item:"turmeric", haveIngredient:true} ]


// console.log(addedTurmeric)


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', "sea lions", "otter"];



// const animalsWithHummingBird = [...animals, "humming bird"]
const animalsWithHummingBird = animals.concat("humming bird")

// console.log(animalsWithHummingBird)
// console.log(animals)



const groceries = ["pearl onions", "cremini mushrooms", "thyme"];

// for(let i = 0; i<groceries.length; i++){
//     // console.log(groceries[i])
//     let jsxElement = `<p>${groceries[i]}</p>`
//     console.log(jsxElement);
// }


const groceryList2 = groceries.map( (gucciMane) => `<li>${gucciMane}</li>` );
console.log(groceryList2)


  