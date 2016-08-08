export default [
    {
        id: 1,
        name: "ABC Company",
        address: "123 main st",
        city: "Saint",
        state: "MO",
        zip: 63139,
        contacts:[
            {first_name: "Zoe", last_name: "Dog", email: "zoe@abc.com", active: true}
        ],
        pictures:[
            {file_name: "abc.png", url: "http://mysite.com/pictures/{companyid}/{file_name}"},
            {file_name: "lol.png", url: "http://mysite.com/pictures/{companyid}/{file_name}"}
        ]
    },
    {
        id: 2,
        name: "LOL Inc",
        address: "555 Avenue st",
        city: "Saint",
        state: "MO",
        zip: 63139,
        contacts:[
            {first_name: "Petey", last_name: "Puppy", email: "petey@gmail.com", active: true},
        ],
        pictures:[
            {file_name: "abc.png", url: "http://mysite.com/pictures/{companyid}/{file_name}"},
            {file_name: "lol.png", url: "http://mysite.com/pictures/{companyid}/{file_name}"}
        ]
    },
    {
        id: 3,
        name: "OMG.co",
        address: "321 OneTwoThree rd",
        city: "Saint",
        state: "MO",
        zip: 63139,
        contacts:[
            {first_name: "Dad", last_name: "Person", email: "dad@gmail.com", active: true},
            {first_name: "Mom", last_name: "Person", email: "mom@test.com", active: true},
            {first_name: "Daughter", last_name: "Person", email: "daughter@test.com", active: true}
        ],
        pictures:[
            {file_name: "abc.png", url: "http://mysite.com/pictures/{companyid}/{file_name}"},
            {file_name: "lol.png", url: "http://mysite.com/pictures/{companyid}/{file_name}"}
        ]
    }
]