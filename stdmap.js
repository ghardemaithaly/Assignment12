/*
 Write a program in JavaScript to map the student ids, names and scores.
a) Add data for 3 students (use map functions)
b) Get Student Names using map functions
c) Delete Student Scores using map functions

d) Display 1 parameter (only value), 2 parameters (value + key), and 3
parameters (value + key + map) for the student
Sample Input:
"id": [ 1, 2, 3 ]
"name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
"scores": [ 90, 88, 92 ]
Output:
[ 'Hitanshu', 'Ninad', 'Amandeep' ]
-----one parameter-----
[ 1, 2, 3 ]
[ 'Hitanshu', 'Ninad', 'Amandeep' ]
[ 90, 88, 92 ]
-----two parameter-----
id 1, 2, 3
name Hitanshu,Ninad,Amandeep
scores 90,88,92
-----three parameter-----
id 1, 2, 3
Map(3) {
'id' => [ 67, 48, 29 ],
'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
'scores' => [ 90, 88, 92 ]
}
name Hitanshu,Ninad,Amandeep
Map(3) {
'id' => [ 1, 2, 3 ],
'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
'scores' => [ 90, 88, 92 ]
}
scores 90,88,92
Map(3) {
'id' => [ 1, 2, 3 ],
'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
'scores' => [ 90, 88, 92 ]
}

*/

const students = [
  { id: 1, name: "Hitanshu", scores: 90 },
  { id: 2, name: "Ninad", scores: 88 },
  { id: 3, name: "Amandeep", scores: 92 },
];

// a) Add data for 3 students (use map functions)
const studentData = new Map();
studentData.set("id", students.map((student) => student.id));
studentData.set("name", students.map((student) => student.name));
studentData.set("scores", students.map((student) => student.scores));

// b) Get Student Names using map functions
const studentNames = studentData.get("name");
console.log(studentNames);

// c) Delete Student Scores using map functions
studentData.delete("scores");

// d) Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters (value + key + map) for the student

// 1 parameter (only value)
console.log("-----one parameter-----");
for (const value of studentData.values()) {
  console.log(value);
}

// 2 parameters (value + key)
console.log("-----two parameter-----");
for (const [key, value] of studentData) {
  console.log(`${key} ${value}`);
}

// 3 parameters (value + key + map)
console.log("-----three parameter-----");
for (const [key, value] of studentData) {
  console.log(`${key} ${value}`);
  console.log(`Map(${studentData.size}) ${studentData}`);
}
