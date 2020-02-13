//generic customizing
//Before getting start, I would like to practice the concept of Object.assign(target,source) which allows me to access the repeated keys, then replace the target's property with source's property and put others together

const object1 = {
  name: "Anderson",
  age: 28,
  Interest: "working out"
};

const object2 = {
  name: "Mary",
  age: 25
};

const copy = Object.assign(object1, object2);
console.log(copy); // it changes 1. name value, 2. age value because this two keys repeated.
console.log(object1); //and also the previous variables are replaced with the result array "const copy"
const copy2 = Object.assign({}, object2);
console.log(copy2); //correct. if there is the object, just putting the properties inside object2 into{}

function shape(this: any) {
  this.x = 0;
  this.y = 0;
}

shape.prototype.move = function(x: any, y: any) {
  this.x += x;
  this.y += y;
  console.info("shape moved.");
};

//let's customizing generic
function merge(prac1: object, prac2: object) {
  return Object.assign(prac1, prac2);
}

const merged = merge({ name: "Anderson" }, { age: 28 }); // typescript knows the result type of merged is "object" but don't know what the properties have and their types
//merged.age; = makes an error because typescript doesn't know the value of this though it knows what properties is there
//so

function merge2<T, U>(prac3: T, prac4: U) {
  // now this generic type can infer that these two parameters have possiblity to be different things which have different types respectively.
  return Object.assign(prac3, prac4);
}
const merged2 = merge2(
  { name: "Anderson", hobbies: ["work out", "flower arrangement"] },
  { age: 30 }
);
const merged3 = merge2({ name: "Marry" }, { age: 23 }); //It also works thanks to the flexibility of generic
console.log(merged2); //Then, it works.

//generic is really powerful especially when I have to use object and I have to approach to properties's value because typesciprt couldn't understand it. But, if I want to set the stringent type here, I can use "extends"
function merge3<T extends object | string, U extends object>(
  object: T,
  object2: U
) {
  //it means "hey I don't care about what is containd but U should be object" and of course union type is also available.
  return Object.assign(object, object2);
}

const mergedObj = merge3(
  { Name: "James", Major: { core: "ecology" } },
  { hobbies: "biking" }
);
console.log(mergedObj.Major); //{core:"ecology"}
