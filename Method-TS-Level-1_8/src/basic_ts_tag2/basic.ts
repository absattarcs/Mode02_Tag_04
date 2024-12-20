
const whereIsSam = "Sam is going to school";


const allUpperCase = whereIsSam.toUpperCase();


const allLowerCase = whereIsSam.toLowerCase();


const mixedCase1 = whereIsSam.split(" ").map((word, index) => {
  if (index === 0) return word.toUpperCase();
  if (index === 4) return word.toUpperCase();
  return word;
}).join(" ");


const mixedCase2 = whereIsSam.split(" ").map((word, index) => {
  if (index === 0) return word.toLowerCase();
  if (index === 1 || index === 2 || index === 3) return word.toUpperCase();
  return word;
}).join(" ");


const titleCase = whereIsSam.split(" ").map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}).join(" ");


const outputHTML = `
  <p>Original: ${whereIsSam}</p>
  <p>${allUpperCase}</p>
  <p>${allLowerCase}</p>
  <p>${mixedCase1}</p>
  <p>${mixedCase2}</p>
  <p>${titleCase}</p>
`;
document.body.innerHTML = outputHTML;