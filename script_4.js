console.log("Hello dear, who are the entrepreneurs born in the 70' ? ")
alert ("Hello dear, who are the entrepreneurs born in the 70' ?");


  let entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  let year70s = [];

    for (let i = 0; i < entrepreneurs.length; i++) 
    {
        if (entrepreneurs[i].year > 1969 && entrepreneurs[i].year < 1980) 
        {
        year70s.push(entrepreneurs[i]);
        }
    }

        console.log(year70s);

// second question
alert("Hello dear, here is an array containing names and surnames look in the console ")
console.log("Hello dear, here is an array containing names and surnames ");

let names = [];
    for (let i = 0; i < entrepreneurs.length; i++) 
{
    names.push(entrepreneurs[i].first); 
    names.push(entrepreneurs[i].last);
}

        console.log(names);