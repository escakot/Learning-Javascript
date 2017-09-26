var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
    // follows: ["f04", "f05"]
  }
};

var listData = function () {
  for (var person in data)
  {
    let p = data[person];
    console.log(`Name: ${p.name}, Age:${p.age}\nFollowing:`);
    for (follow of p.follows)
    {
      let f = data[follow];
      console.log(`${f.name}`)
    }
  }
}

var mostFollows = function(age) {
  let personWithMostFollows;
  let mostFollowsWithAge = 0
  for (var person in data)
  {
    if (!personWithMostFollows || checkFollowingAge(data[person], age) > mostFollowsWithAge)
    {
      personWithMostFollows = [data[person]];
      mostFollowsWithAge = checkFollowingAge(data[person], age);
      continue;
      // console.log(personWithMostFollows[0]);
    }
    if (age) {
      if (checkFollowingAge(data[person], age) == mostFollowsWithAge) {
        personWithMostFollows.push(data[person]);
      } else if (checkFollowingAge(data[person], age) > mostFollowsWithAge) {
        personWithMostFollows = [data[person]]
        mostFollowsWithAge = checkFollowingAge(data[person], age);
      }

    } else {
      if (data[person].follows.length == personWithMostFollows[0].follows.length)
      {
        personWithMostFollows.push(data[person]);
      } else if (data[person].follows.length > personWithMostFollows[0].follows.length) {
        personWithMostFollows = [data[person]];
      }
    }
  }
  console.log("Persons with most follows:");
  for (var p of personWithMostFollows)
  {
    console.log(`${p.name}s`);
  }
}

function checkFollowingAge(person, age) {
  let followingAboveAge = 0
  for (let following of person.follows) {
    let p = data[following];
    if (p.age > age) {
      followingAboveAge++;
    }
  }
  return followingAboveAge
}

var mostFollowers = function(age) {
  let personWithMostFollowers = {};
  let maxTally = 0;
  let tally = tallyFollowers(age)
  for (let followers in tally)
  {
    if (Object.keys(personWithMostFollowers).length == 0)
    {
      personWithMostFollowers[followers] = tally[followers];
      maxTally = tally[followers];
    }
    if (tally[followers] > maxTally)
    {
      personWithMostFollowers = {}
      personWithMostFollowers[followers] = tally[followers];
      maxTally = tally[followers];
    } else if (tally[followers] == maxTally) {
      personWithMostFollowers[followers] = tally[followers];
    }
  }
  console.log("Person with most followers:");
  for (let person of Object.keys(personWithMostFollowers)) {
    let p = data[person];
    console.log(`${p.name}: ${personWithMostFollowers[person]} followers`);
  }
}

function tallyFollowers(age) {
  let tallies = {};
  for (let person in data) {
    for (let p of data[person].follows) {
      if (age) {
        if (data[person].age > age) {
          if (tallies[p]) {
            tallies[p]++;
          } else {
            tallies[p] = 1;
          }
        }
      } else {
        if (tallies[p]) {
          tallies[p]++;
        } else {
          tallies[p] = 1;
        }
      }
    }
  }
  return tallies;
}

// listData();
mostFollows();
// mostFollowers();
// mostFollowers(30);
mostFollows(30);
