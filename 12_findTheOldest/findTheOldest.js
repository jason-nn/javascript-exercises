const findTheOldest = function (people) {
  return people.sort(
    (a, b) =>
      (b.yearOfDeath ? b.yearOfDeath : new Date().getFullYear()) -
      b.yearOfBirth -
      (a.yearOfDeath ? a.yearOfDeath : new Date().getFullYear()) +
      a.yearOfBirth
  )[0];
};

const people = [
  {
    name: 'Carly',
    yearOfBirth: 0,
    yearOfDeath: 1,
  },
  {
    name: 'Ray',
    yearOfBirth: 0,
    yearOfDeath: 10,
  },
  {
    name: 'Jane',
    yearOfBirth: 0,
    yearOfDeath: 5,
  },
];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
