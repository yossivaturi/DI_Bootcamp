// Exercise 2 : Employees
// Instructions
// Using this array:

let users = [{
        firstName: 'Bradley',
        lastName: 'Bouley',
        role: 'Full Stack Resident'
    },
    {
        firstName: 'Chloe',
        lastName: 'Alnaji',
        role: 'Full Stack Resident'
    },
    {
        firstName: 'Jonathan',
        lastName: 'Baughn',
        role: 'Enterprise Instructor'
    },
    {
        firstName: 'Michael',
        lastName: 'Herman',
        role: 'Lead Instructor'
    },
    {
        firstName: 'Robert',
        lastName: 'Hajek',
        role: 'Full Stack Resident'
    },
    {
        firstName: 'Wes',
        lastName: 'Reid',
        role: 'Instructor'
    },
    {
        firstName: 'Zach',
        lastName: 'Klabunde',
        role: 'Instructor'
    }
];

// Using the map() method, say hello to the users 
//using only their firstname
//(ie.“Hello Bradley”, “Hello Chloe” ect…)
// users.map((v) => console.log(`Hello ${v.firstName}`));


// Using the filter() method, 
//congratulate only the Full Stack Residents.
users.filter((v) => v.role == 'Full Stack Resident')
    .map((v) => console.log(`Congraulations ${v.firstName}`));