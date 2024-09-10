let User = {
    name: "Faraj",
    email: "Faraj@gmail.com",
    id: 20,
    Available: false,
    address: { 
        Country: "Saudi Arabia",
        city: { 
            city: "Riydh",
            In: "Saudi Arabia",
        },
        Region: "ٌRiydh",
    },
    skills: ["programing", "play football", "play games"], 
    checkUser: function() {
        return this.Available;
    },
};

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Q1 
console.log(User);

// Q2
console.log(User.name);

// Q3
User.id = 25;
console.log(User.id);

// Q4
delete User.email;
console.log(User.email);

// Q5
User.Available = true;
console.log(User.checkUser());

// Q6
console.log(User.address);

// Q7 
console.log(User.address.city.city);

// Q8
console.log(User.skills[2]);

// Q8
console.log(User.skills.join(','));


// =========================================================================================================================================== //
// =========================================================================================================================================== //
// =========================================================================================================================================== //

                                                               // Lab 2 //


characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
];

// Q1
let result1 = characters.find(ele => ele.eye_color == "blue");
console.log(result1.name);

// Q2 
let result2 = characters.find(ele => ele.mass > 50);
console.log(result2.gender);

// Q3
result3 = characters.filter((element, index) => {
    if(characters[index].height < 200) {
        console.log(element)
    };
}); 

// Q4
result4 = characters.filter((element, index) => {
    if(characters[index].gender == "male") {
        console.log(element)
    };
});

// Q5
result5 = characters.map(ele => ele.name);
console.log(result5);

// Q6
result6 = characters.map(ele => ele.height);
console.log(result6);

// Q7 
result7 = characters.sort((a, b) => a.mass - b.mass);
console.log(result7);

// Q8
result8 = characters.sort((a, b) => b.height - a.height);
console.log(result8);

// Q9
result9 = characters.every(ele => ele.mass > 40);
console.log(result9);

// Q10
result10 = characters.every(ele => ele.height < 200);
console.log(result10);

// Q11
result11 = characters.some(ele => ele.eye_color == "blue");
console.log(result11);

// Q12
result12 = characters.some(ele => ele.height > 210);
console.log(result12);