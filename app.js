console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number){
    return function(plusNumber){
        return plusNumber + number;
    }
};

const plus15 = plus(15);
console.log(plus15(10));

console.log("EXERCISE 2:\n==========\n");
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach((user) =>  console.log(user.name));

  console.log("EXERCISE 3:\n==========\n");

  const mappedArray = users.map((user) => {
    return {name: user.name, score: user.score };
  });

  console.log(mappedArray);

  console.log("EXERCISE 4:\n==========\n");

  let activeUsers = users.filter((user) => 
    user.isActive == true);

    console.log(activeUsers);

console.log("EXERCISE 5:\n==========\n");

const sortedArray = users.sort((a, b) => b.score - a.score);


console.log(users);

console.log("EXERCISE 6:\n==========\n");

let averageScore = users.reduce((sum, user, i, array) => {
    if (i == array.length - 1){
    return (sum + user.score) / array.length;
    }else return sum + user.score;
}, 0);

console.log(averageScore);