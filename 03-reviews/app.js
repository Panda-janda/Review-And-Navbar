// local reviews data
const reviews = [
  {
    // Changing description of each person here
    id: 1,
    name: 'Michael Scott',
    job: 'Regional Manager',
    img: 'https://150264375.v2.pressablecdn.com/wp-content/uploads/2020/07/michael-scott-no.jpeg',
    text: "Best Boss",
  },
  {
    id: 2,
    name: 'Andy Bernard',
    job: 'web designer',
    img: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Andy-Bernard.The-Office.webp',
    text: 'The Nard-Dog',
  },
  {
    id: 3,
    name: 'Dwight Schrute',
    job: 'Salesperson',
    img: 'https://www.myany.city/sites/default/files/styles/scaled_cropped_medium__260x260/public/field/image/node-related-images/sample-dwight-k-schrute.jpg?itok=8TfRscbA',
    text: 'Reliable',
  },
  {
    id: 4,
    name: 'Kevin Malone',
    job: 'Accountant',
    img: 'https://helios-i.mashable.com/imagery/articles/01hUhtaOTanQnBkpjV7Cotj/hero-image.fill.size_1200x900.v1645640250.jpg',
    text: 'Loves his chili ',
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
const startBtn = document.querySelector(".btn-start");
const endBtn = document.querySelector(".btn-end");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

// Modifying code to go back to start
startBtn.addEventListener('click', function () {
  currentItem = 0;
  showPerson(currentItem);
});

// Modifying code to go to the end
endBtn.addEventListener('click', function () {
  currentItem = reviews.length - 1;
  showPerson(currentItem);
});
