console.log("Yes all the books have been rented at least once here they are ")
alert("Yes all the books have been rented at least once here they are, look in the console ")

let books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let rented_books = [];
for (let i = 0; i < books.length; i++) 
{
    if (books[i].rented >0 ) 
    {
      rented_books.push(books[i]);
    }
}
console.log(rented_books);

//question 4
console.log("To find Book with ID: 873495 please look under second -->")
alert("The Book with ID: 873495 is written in the console")

let find_id_books = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].id == 873495 ) 
    {
      find_id_books.push(books[i]);
    }
}
console.log(find_id_books);

// question 5

console.log("Book with ID 133712 will be deleted")
alert("The Book with ID: 133712 is will be deleted")


let remove_id_books = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].id != 133712 ) 
    {
      remove_id_books.push(books[i]);
    }
}
console.log(remove_id_books);
