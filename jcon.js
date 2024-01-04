let jsondattttes = `[
  {
    "id": "600dc3b5d617e547a0e74cb9",
    "name": "Mitchell Fitzgerald",
    "about": "Proident voluptate veniam voluptate mollit reprehenderit anim officia et ea ex laboris nulla laboris. Nulla ut aliquip fugiat tempor veniam sint aliqua reprehenderit tempor Lorem commodo anim.",
    "address": "48 Flatlands Avenue, Cutter, North Dakota",
    "company": "Scenty",
    "age": 27,
    "eyecolor": "green",
    "gender": "male"
  },
  {
    "id": "600dc3b5c4e60ba2ebf06569",
    "name": "Howell Faulkner",
    "about": "Mollit Lorem reprehenderit qui elit id aliqua. Deserunt ipsum ad cupidatat ullamco ut aliqua est do consectetur nostrud sit esse.",
    "address": "77 Hemlock Street, Hasty, Florida",
    "company": "Fleetmix",
    "age": 20,
    "eyecolor": "blue",
    "gender": "female"
  }
]`;

// infot jane si lista[]  kthehen ne objekte{} per manovrim

// var date = JSON.parse(jsondattttes);
let lan = JSON.parse(jsondattttes);


// iterimi i te dhenave 
for (let i = 0; i < lan.length; i++) {
  const person = lan[i];
  console.log(`Name: ${person.id}`);
  // console.log('ID: ${date[i].id}');
  console.log(`Name: ${person.name}`);
  console.log(`About: ${person.about}`);
  console.log(`Address: ${person.address}`);
  console.log(`Company: ${person.company}`);
  console.log(`Age: ${person.age}`);
  console.log(`EyeColor: ${person.eyecolor}`);
  console.log(`Gender: ${person.gender}`);
};
// let jsondattttes = `[
//   {
//     "id": "600dc3b5d617e547a0e74cb9",
//     "name": "Mitchell Fitzgerald",
//     "about": "Proident voluptate veniam voluptate mollit reprehenderit anim officia et ea ex laboris nulla laboris. Nulla ut aliquip fugiat tempor veniam sint aliqua reprehenderit tempor Lorem commodo anim.",
//     "address": "48 Flatlands Avenue, Cutter, North Dakota",
//     "company": "Scenty",
//     "age": 27,
//     "eyecolor": "green",
//     "gender": "male"
//   },
//   {
//     "id": "600dc3b5c4e60ba2ebf06569",
//     "name": "Howell Faulkner",
//     "about": "Mollit Lorem reprehenderit qui elit id aliqua. Deserunt ipsum ad cupidatat ullamco ut aliqua est do consectetur nostrud sit esse.",
//     "address": "77 Hemlock Street, Hasty, Florida",
//     "company": "Fleetmix",
//     "age": 20,
//     "eyecolor": "blue",
//     "gender": "female"
//   }
// ]`;

// // Parse JSON string to an array of objects
// let data = JSON.parse(jsondattttes);

// // Iterate through the data
// for (let i = 0; i < data.length; i++) {
//   const person = data[i];
//   console.log(`ID: ${person.id}`)
//   console.log(`Name: ${person.name}`);
//   console.log(`About: ${person.about}`);
//   console.log(`Address: ${person.address}`);
//   console.log(`Company: ${person.company}`);
//   console.log(`Age: ${person.age}`);
//   console.log(`EyeColor: ${person.eyecolor}`);
//   console.log(`Gender: ${person.gender}`);
// }
