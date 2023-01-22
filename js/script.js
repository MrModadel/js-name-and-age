let user_name = prompt('Как вас зовут?' );
let user_age = prompt('Сколько вам лет?');

if (user_name[0] === "a"&&user_age >= 18||user_name[0] === "A"&&user_age >= 18) {
   alert("Welcome to the site!")
} else {
   alert ("Log out of the site")
};
