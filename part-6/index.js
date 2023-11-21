// IF
if (true) {
  console.log("This is true");
  console.log("This is if");
}

let a = 7;
if (a > 5) {
  console.log("A is greater thaN 5");
}

const rating = 3;
if (rating === 3) {
  console.log("Rating is 3");
}

const isMarried = true;
if (isMarried) {
  console.log("Congratulations...! You are Married");
}

// ELSE IF

// 2 = Movie is bad
// 3 = Movie is average
// 4 = Movie is good
// 5 = Movie is exceptional
let movie1Rating = 5;
if (movie1Rating === 2) {
  console.log("Movie is bad");
} else if (movie1Rating === 3) {
  console.log("Movie is average");
} else if (movie1Rating === 4) {
  console.log("Movie is good");
} else if (movie1Rating === 5) {
  console.log("Movie is exceptional");
}

// ELSE
let movie2Rating = 1000;
if (movie2Rating === 2) {
  console.log("Movie is bad");
} else if (movie2Rating === 3) {
  console.log("Movie is average");
} else if (movie2Rating === 4) {
  console.log("Movie is good");
} else if (movie2Rating === 5) {
  console.log("Movie is exceptional");
} else {
  console.log("Rating is incorrect");
}

// QUESTION
// If the password's length is greater than 6 then print its "valid password"
// or else print "invalid password"
let password = "gogoi";
if (password.length > 6) {
  console.log("Valid password");
} else {
  console.log("Invalid password");
}

// NESTED IF ELSE
// If password's length is short then 6 then print "Password is too short"
// If password has space then print "Password can't include spaces"
// If these two conditions met then print "Valid Password"

const pass = "pranjalgogoi";
if (pass.length >= 6) {
  if (pass.indexOf(" ") !== -1) {
    console.log("Password can't include spaces");
  } else {
    console.log("Valid Password");
  }
} else {
  console.log("Password is too short");
}

/* const ps = "gogoi";
if (ps.length < 6) {
  console.log("Password is too short");
} else if (ps.indexOf(" ") !== -1) {
  console.log("Password can't include spaces");
} else {
  console.log("Valid Password");
} */
