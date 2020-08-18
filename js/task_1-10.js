"use strict";

import users from "./users.js";

const getUserNames = (users) => {
  const userName = users.map((user) => user.name);
  return userName;
};
console.log(`task-1`);
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUsersWithEyeColor = (users, color) => {
  const usersEye = users.filter((user) => user.eyeColor === color);
  return usersEye;
};
console.log(`task-2`);
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithGender = (users, gender) => {
  const usersGender = users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
  return usersGender;
};
console.log(`task-3`);
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getInactiveUsers = (users) => {
  const usersInactive = users.filter((user) => user.isActive === false);
  return usersInactive;
};
console.log(`task-4`);
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

const getUserWithEmail = (users, email) => {
  const userMail = users.find((user) => user.email === email);
  return userMail;
};
console.log(`task-5`);
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

const getUsersWithAge = (users, min, max) => {
  const usersAge = users.filter((user) => user.age >= min && user.age <= max);
  return usersAge;
};
console.log(`task-6`);
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const calculateTotalBalance = (users) => {
  const usersBalance = users.reduce((acc, user) => acc + user.balance, 0);
  return usersBalance;
};
console.log(`task-7`);
console.log(calculateTotalBalance(users)); // 20916

const getUsersWithFriend = (users, friendName) => {
  const usersFriends = users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
  return usersFriends;
};
console.log(`task-8`);
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

const getNamesSortedByFriendsCount = (users) => {
  const usersFriendSort = users
    .filter((user) => user.friends)
    .sort(
      (prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length
    );
  return usersFriendSort;
};
console.log(`task-9`);
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

const getSortedUniqueSkills = (users) => {
  const skills = users
    .map((user) => user.skills)
    .reduce(function (a, b) {
      return a.concat(b);
    }, [])
    .sort();
  const unique = Array.from(new Set(skills));
  return unique;
};
console.log(`task-10`);
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
