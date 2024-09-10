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